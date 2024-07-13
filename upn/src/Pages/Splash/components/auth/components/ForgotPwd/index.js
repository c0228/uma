import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForgotPwd = () =>{
  const handleFormSubmit = () =>{
    if(isValidForm){
      const data = { 
        email: form?.["forgotPwd"]?.email?.value
      };
    }
  };
  
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

  return (<Form name="forgotPwd" btnSubmit={{ btnType:'danger', label:'Send Link to Reset Account', size: 14 }} onSubmit={handleFormSubmit}>
      <View style={styles.formDescView}>
        <Text style={styles.formHeadText}>Forgot Your Password - Don't worry !!</Text>
        <Text style={styles.formDescText}>
          "Having trouble remembering your password? No problem! Enter your email address and we'll send you a link to reset it."
        </Text>
      </View>
      {alertMessage?.type?.length>0 && alertMessage?.message?.length>0  && 
        (<View style={{ marginTop: 5, marginBottom: 10 }}>
            <Alert type={alertMessage?.type} show="true" heading="Error Message" body={alertMessage?.message} />
        </View>)}
      <View style={{ marginTop:5, marginBottom:15 }}>
          <EmailAddress />
      </View>
   </Form>);
};

const styles = StyleSheet.create({
 formDescView:{ marginTop:5, marginBottom: 10  },
 formHeadText:{ marginBottom:8, textAlign:'center', lineHeight:24, fontSize:16, color:'#000', fontStyle: 'italic', fontWeight:'bold' },
 formDescText:{ textAlign:'center', lineHeight:24, fontSize:15, fontStyle: 'italic' },
 forgotPwdView:{ alignItems:'flex-end', marginBottom:15 },
 forgotPwdText: { textDecorationLine:'underline', textDecorationColor:'#007bff', color:'#007bff' },
});

export default ForgotPwd;