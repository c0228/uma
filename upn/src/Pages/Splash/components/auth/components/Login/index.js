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

const Login = () =>{
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
      axios.post(NEXUS_URL+'user/login', data).then(async(response) => { 
        setLoading(false);
        console.log(response?.data);
        let userDetails = await getFromSPStore("USER_DETAILS");
            userDetails.accountInfo = { isAuthenticated: true, ...response?.data?.params };
        await AddToSPStore("USER_DETAILS", userDetails);
        if(userDetails?.accountInfo?.avatar?.length===0){
           // navigation.navigate('SS_Avatar',{ });
            navigation.navigate('SS_Extra',{ });
        } else {
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
    <Form name="login" btnSubmit={{ btnType:'danger', label:'Login into Account', size: 14 }} onSubmit={handleFormSubmit}>
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
      <View style={{ alignItems:'flex-end', marginBottom:15 }}>
        <TouchableOpacity>
            <Text style={{ textDecorationLine:'underline', textDecorationColor:'#007bff', color:'#007bff' }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
   </Form>
  </View>)}
 </View>);
};

const styles = StyleSheet.create({
 loadingView: { marginTop:'55%', justifyContent:'center', alignItems:'center' },
 loadingImg: { width:100, height: 100 }
});
   

export default Login;