import React, { useState } from "react";
import axios from 'axios';
import { getAppContext } from '@AdvancedTopics/ReactContext/index.js';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextBox } from '@AppFormElement/TextBox/index.js';
import { Alert } from '@AppComponent/Alert/index.js';
import { Form } from '@AppFormElement/Form/index.js';
import { AddToSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import { NEXUS_URL } from '@StaticData/urls.js';
import CountdownTimer from '@AppUtils/CountdownTimer.js';

const EmailValidate = () =>{
 const { contextData, setContextData } = getAppContext();
 const [loading, setLoading] = useState(false);
 const [alertMessage, setAlertMessage] = useState({ type:'', message:'' });
 const [timerDuration, setTimerDuration] = useState(120); // false - Shows Timer, true - Shows Status
 const handleFormSubmit = async(form, isValidForm, triggerReset)=>{
    if(isValidForm){
     setLoading(true);
     const otpcode = form?.["validateEmail"]?.otp?.value;
     // Trigger API to send OTP
     axios.post(NEXUS_URL+'verify/otp', { 
           otpcode: otpcode,
           deviceId: contextData?.userDetails?.device?.id
         }).then(async(response) => { 
             console.log(response?.data);
             if(response?.data?.status?.toLowerCase()==='success'){
                 // Update Account Info Data into Database
                 axios.post(NEXUS_URL+'user/create', contextData?.userDetails?.accountInfo).then(async(response) => { 
                     console.log(NEXUS_URL+'user/create', response?.data);
                     let userDetails = contextData?.userDetails;
                         userDetails.accountInfo = { ...userDetails.accountInfo, ...response?.data?.params };
                     setLoading(false);
                     setContextData({ displayScreen: 'SUCCESS' });
                 }).catch(error => {  // Show Alert
                     console.error(error);
                     setLoading(false);
                     setAlertMessage({ type:'danger', message: error.message });
                 });
             } else {
                 setLoading(false);
                 setAlertMessage({ type:'danger', message: response?.data?.message });
             }
      }) .catch(error => {  // Show Alert
         console.error(error);
         setLoading(false);
         setAlertMessage({ type:'danger', message: error.message });
       });      
    } else { // Show Alert
        setLoading(false);
        setAlertMessage({ type:'danger', message: 'Please Enter Valid OTP Code.' });
    }
 }
 const OtpCode = () =>{
    return (<TextBox name="otp" label="Enter OTP Code" placeholder="_ _ _ _ _" 
        validation={{
            required:{ value: true, errorMessage:"This is a Mandatory Field" },
            minLength:{ value: 6, errorMessage:"OTP Code should be 6 digits" },
            maxLength:{ value: 6, errorMessage:"OTP Code should be 6 digit" }
        }} />);
 };
    
 const handleResendOTP = () =>{
   setTimerDuration(120);
   const userDetails = contextData?.userDetails;
   const name = userDetails?.accountInfo?.surname+' '+userDetails?.accountInfo?.name;
   const email = userDetails?.accountInfo?.email;
   const deviceId = userDetails?.accountInfo?.device?.id;
    // Trigger API to send OTP
    axios.post(NEXUS_URL+'send/otp', { name: name, email: email, deviceId: deviceId }).then(response => { 
        console.log(response?.data);
    }).catch(error => {  // Show Alert
        console.error(error);
        setAlertMessage({ type:'danger', message: error.message });
    });
 };
 return (<View>
    {loading?(<View style={styles.loadingView}>
                <Image source={require('@Assets/img/loading.gif')} style={styles.loadingImg} />
              </View>):
    (<View>
      <Form name="validateEmail" btnSubmit={{ btnType:'danger', label:'Validate OTP Code', size: 14 }} onSubmit={handleFormSubmit}>
        {alertMessage?.type?.length>0 && alertMessage?.message?.length>0  && 
        (<View style={[styles.mtop15p]}>
          <Alert type={alertMessage?.type} show="true" heading="Error Message" body={alertMessage?.message} />
        </View>)}
        <View style={[styles.mtop15p]}>
          <Text style={styles.lh22}>An OTP Code is sent to your mentioned Email Address {contextData?.userDetails?.accountInfo?.email}.</Text>
        </View>
        <View style={[styles.mtop15p]}><OtpCode /></View>
        <View style={styles.resendOTPView}>
            {(timerDuration === 0)?(<TouchableOpacity onPress={()=>handleResendOTP()}>
                <Text style={styles.resendOTP}>Resend OTP Code?</Text>
                </TouchableOpacity>):(<View style={styles.timeRemainingView}>
                    <Text style={styles.textBold}>Time Remaining : </Text>
                    <CountdownTimer size={14} duration={timerDuration} format="M:S" onTimerEnd={()=>setTimerDuration(0)} />
                </View>)}
        </View>
      </Form>
    </View>)}
 </View>);
};

const styles = StyleSheet.create({
 mtop15p: { marginTop:15 },
 mbot15p: { marginBottom:15 },
 lh22: { lineHeight:22 },
 loadingView: { marginTop:'55%', justifyContent:'center', alignItems:'center' },
 loadingImg: { width:100, height: 100 },
 resendOTPView:{ marginTop:15, marginBottom:15, paddingRight:10 },
 timeRemainingView: { width:'100%', flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end' },
 textBold:{ fontWeight:'bold' },
 resendOTP: { textAlign:'right', textDecorationLine:'underline', textDecorationColor:'#007bff', color:'#007bff' }
});

export default EmailValidate;