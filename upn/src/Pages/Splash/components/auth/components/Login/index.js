import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Email } from '@AppFormElement/Email/index.js';
import { Password } from '@AppFormElement/Password/components/pwd.js';
import { Form } from '@AppFormElement/Form/index.js';
import { NEXUS_URL } from '@StaticData/urls.js';

const Login = () =>{
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
  
  const handleFormSubmit = () =>(form, isValidForm, triggerReset)=>{
    if(isValidForm){
      console.log("Form Result:", form);
      navigation.navigate('SS_Main',{ });
    }
  };

  return (<View style={{  borderTopWidth:1, borderTopColor:'#ddd', padding:15 }}>
    <Form name="login" btnSubmit={{ btnType:'danger', label:'Login into Account', size: 14 }} onSubmit={handleFormSubmit}>
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
  </View>);
};


export default Login;