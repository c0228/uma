import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Form } from '@AppFormElement/Form/index.js';
import axios from 'axios';
import { Alert } from '@AppComponent/Alert/index.js';
import { Email } from '@AppFormElement/Email/index.js';
import { NEXUS_URL } from '@StaticData/urls.js';

const ForgotPwd = () =>{
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ type:'', heading:'', message:'' });
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

  const handleFormSubmit = async(form, isValidForm, triggerReset) =>{
    if(isValidForm){
      setLoading(true);
      const emailAddress = form?.["forgotPwd"]?.email?.value;
      axios.post(NEXUS_URL+'user/reset/password/link', { to: emailAddress }).then(async(response) => { 
        setLoading(false);
        if(response?.data?.message === 'EMAIL_SENT_SUCCESS'){
          setAlertMessage({ type:'success', heading:'Success message', message:'Reset Passwork link is sent to your Email Address "'+ emailAddress +'".'
            + 'Please check your inbox for confirmation and reset your Password.' });
        } else {
          setAlertMessage({ type:'danger', heading:'Error message', message:'Email was not sent successfully, failed to send.' });
        } 
      });
      triggerReset();
    }
  };
  return (<View>
    <View style={styles.formDescView}>
      <Text style={styles.formHeadText}>Forgot Your Password - Don't worry !!</Text>
      <Text style={styles.formDescText}>
        "Having trouble remembering your password? No problem! Enter your email address and we'll send you a link to reset it."
      </Text>
    </View>
    {loading?(<View style={styles.loadingView}>
        <Image source={require('@Assets/img/loading.gif')} style={styles.loadingImg} />
      </View>):(<View>
        <Form name="forgotPwd" 
    btnSubmit={{ btnType:'danger', label:'Send Link to Reset Account', size: 14 }} 
    onSubmit={handleFormSubmit}>
    {alertMessage?.type?.length>0 && alertMessage?.message?.length>0  && 
      (<View style={{ marginTop: 5, marginBottom: 10 }}>
          <Alert type={alertMessage?.type} show="true" heading={alertMessage?.heading} body={alertMessage?.message} />
      </View>)}
    <View style={{ marginTop:5, marginBottom:15 }}>
        <EmailAddress />
    </View>
    </Form>
    </View>)}
    
   </View>);
};

const styles = StyleSheet.create({
 loadingView: { justifyContent:'center', alignItems:'center' },
 loadingImg: { width:100, height: 100 },
 formDescView:{ marginTop:5, marginBottom: 10  },
 formHeadText:{ marginBottom:8, textAlign:'center', lineHeight:24, fontSize:16, color:'#000', fontStyle: 'italic', fontWeight:'bold' },
 formDescText:{ textAlign:'center', lineHeight:24, fontSize:15, fontStyle: 'italic' },
 forgotPwdView:{ alignItems:'flex-end', marginBottom:15 },
 forgotPwdText: { textDecorationLine:'underline', textDecorationColor:'#007bff', color:'#007bff' },
});

export default ForgotPwd;