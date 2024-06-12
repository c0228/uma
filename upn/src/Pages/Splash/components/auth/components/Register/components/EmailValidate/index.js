import React, { useState } from "react";
import axios from 'axios';
import { getAppContext } from '@AdvancedTopics/ReactContext/index.js';
import { View, Text, Image, StyleSheet } from "react-native";
import { TextBox } from '@AppFormElement/TextBox/index.js';
import { Alert } from '@AppComponent/Alert/index.js';
import { Form } from '@AppFormElement/Form/index.js';
import { AddToSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import { NEXUS_URL } from '@StaticData/urls.js';

const EmailValidate = () =>{
 const { contextData, setContextData } = getAppContext();
 const [loading, setLoading] = useState(false);
 const [alertMessage, setAlertMessage] = useState({ type:'', message:'' });
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
                     console.log("===================================");
                     console.log("userDetails [EMAIL_VALIDATE]", userDetails);
                     console.log("===================================");
                     await AddToSPStore("USER_DETAILS", userDetails);
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
    
 return (<View>
    {loading?(<View style={styles.loadingView}>
                <Image source={require('@Assets/img/loading.gif')} style={styles.loadingImg} />
              </View>):
    (<View>
      <Form name="validateEmail" btnSubmit={{ btnType:'danger', label:'Validate OTP Code', size: 14 }} onSubmit={handleFormSubmit}>
        {alertMessage?.type?.length>0 && alertMessage?.message?.length>0  && 
        (<View style={{ marginTop: 15 }}>
          <Alert type={alertMessage?.type} show="true" heading="Error Message" body={alertMessage?.message} />
        </View>)}
        <View style={{ marginTop:15, marginBottom:15 }}>
          <Text style={{ lineHeight:22 }}>An OTP Code is sent to your mentioned Email Address {contextData?.userDetails?.accountInfo?.email}</Text>
        </View>
        <View style={{ marginBottom:15 }}><OtpCode /></View>
      </Form>
    </View>)}
 </View>);
};

const styles = StyleSheet.create({
 loadingView: { marginTop:'55%', justifyContent:'center', alignItems:'center' },
 loadingImg: { width:100, height: 100 }
});

export default EmailValidate;