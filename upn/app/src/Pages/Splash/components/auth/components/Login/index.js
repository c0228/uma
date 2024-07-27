import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import md5 from 'md5';
import { useNavigation } from '@react-navigation/native';
import { Alert } from '@AppComponent/Alert/index.js';
import { Email } from '@AppFormElement/Email/index.js';
import { Password } from '@AppFormElement/Password/components/pwd.js';
import { Form } from '@AppFormElement/Form/index.js';
import { NEXUS_URL } from '@StaticData/urls.js';
import { AddToSPStore, getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import ForgotPwd from './../ForgotPwd/index.js';

const Login = () =>{
 const [displayScreen, setDisplayScreen] = useState('LOGIN');
 const [loading, setLoading] = useState(false);
 const [alertMessage, setAlertMessage] = useState({ type:'', message:'' });
 const navigation = useNavigation();
 const EmailAddress = () =>{
      return ( <Email name="email" 
          validation={{
              email:{
                  formatCheck: true,
                  isEmailExist:{ 
                      // If Email Already Exists, Returns 'EXIST'
                      // If Email not exists, Returns 'NOT_EXIST'
                      url: NEXUS_URL+"email/validate",
                      method:"POST",
                      value:"EXIST", // When Value not matches - throws Error Message
                      errorMessage:"This Email Address is not Registered."
                  }
              }
          }} />);
  };

  const RegPwd = () =>{
      return ( <Password type="password" label="Account Password" name="pwd" value="" 
      placeholder="Enter Account Password"
      validation={{
          required:{
              value: true,
              errorMessage:"This is a Mandatory Field"
          },
          minLength:{
              value: 8,
              errorMessage:"Password should be greator than 8"
          },
          maxLength:{
              value: 16,
              errorMessage:"Message should be lessthan 16"
          },
          passwordContains:["Lowercase","Uppercase","Number", "Symbol"]
  }} />);
  };
  
  const handleFormSubmit = async(form, isValidForm, triggerReset)=>{
    console.log("----------------------------------");
    console.log("isValidForm", isValidForm);
    console.log("----------------------------------");
    if(isValidForm){
      setLoading(true);
      console.log("Form Result:", form);
      const data = { 
        email: form?.["login"]?.email?.value,
        pwd: md5( form?.["login"]?.pwd?.value ) 
      };
      axios.post(NEXUS_URL+'user/login', data)
      .then(async(response) => { 
        setLoading(false);
        let userDetails = await getFromSPStore("USER_DETAILS");
            userDetails.accountInfo = { isAuthenticated: true, ...response?.data?.params };
        console.log("userDetails [Login Page]", response?.data, userDetails);
        await AddToSPStore("USER_DETAILS", userDetails);
        if(userDetails?.accountInfo?.avatar?.length===0){
           navigation.navigate('SS_Extra',{ });
        } else if(userDetails?.accountInfo?.examTargetList?.length===0){
          navigation.navigate('SS_Extra',{ });
        } else if(Object.keys(userDetails?.accountInfo?.timeAvailability)?.length===0){
          navigation.navigate('SS_Extra',{ });
        }
        else {
            navigation.navigate('SS_Main',{ });
        }
      }) .catch(error => {  // Show Alert
        console.error(error);
        setLoading(false);
        setAlertMessage({ type:'danger', message: error.message });
      });
    } else {
        setLoading(false);
        setAlertMessage({ type:'danger', message: 'Please complete all mandatory fields to proceed.' });
    }
  };

  return (<View style={{  borderTopWidth:1, borderTopColor:'#ddd', padding:15 }}>
    {loading?(<View style={styles.loadingView}>
                <Image source={require('@Assets/img/loading.gif')} style={styles.loadingImg} />
              </View>):
    (<View>
    {displayScreen==='LOGIN' && (<Form name="login" 
      btnSubmit={{ btnType:'danger', label:'Login into Account', size: 14 }} 
      onSubmit={handleFormSubmit}>
      <View style={styles.formDescView}>
        <Text style={styles.formHeadText}>Get Started your Journey !!</Text>
        <Text style={styles.formDescText}>
          "Login using your new account to access a world of knowledge and personalized learning paths."
        </Text>
      </View>
      {alertMessage?.type?.length>0 && alertMessage?.message?.length>0  && 
        (<View style={{ marginTop: 5, marginBottom: 10 }}>
            <Alert type={alertMessage?.type} show="true" heading="Error Message" body={alertMessage?.message} />
        </View>)}
      <View style={{ marginTop:5 }}>
          <EmailAddress />
      </View>
      <View style={{ marginTop:15, marginBottom:15 }}>
          <RegPwd />
      </View>
      <View style={styles.forgotPwdView}>
        <TouchableOpacity onPress={()=>setDisplayScreen('FORGOT_PWD')}>
            <Text style={styles.forgotPwdText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
   </Form>)}
   {displayScreen==='FORGOT_PWD' && (<>
    <ForgotPwd />
    <View style={[styles.forgotPwdView, { marginTop:15 }]}>
      <TouchableOpacity onPress={()=>setDisplayScreen('LOGIN')}>
        <Text style={styles.forgotPwdText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  </>)}
  </View>)}
 </View>);
};

const styles = StyleSheet.create({
 loadingView: { marginTop:'55%', justifyContent:'center', alignItems:'center' },
 loadingImg: { width:100, height: 100 },
 formDescView:{ marginTop:5, marginBottom: 10  },
 formHeadText:{ marginBottom:8, textAlign:'center', lineHeight:24, fontSize:16, color:'#000', fontStyle: 'italic', fontWeight:'bold' },
 formDescText:{ textAlign:'center', lineHeight:24, fontSize:15, fontStyle: 'italic' },
 forgotPwdView:{ alignItems:'flex-end', marginBottom:15 },
 forgotPwdText: { textDecorationLine:'underline', textDecorationColor:'#007bff', color:'#007bff' },
});
   

export default Login;