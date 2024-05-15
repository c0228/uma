import React from 'react';
import { View, Text } from 'react-native';
import { Email } from '@AppFormElement/Email/index.js';
import { Password } from '@AppFormElement/Password/components/pwd.js';
import { Form } from '@AppFormElement/Form/index.js';

const Login = () =>{
  const EmailAddress = () =>{
      return ( <Email name="email" 
          validation={{
              email:{
                  formatCheck: true,
                  isEmailExist:{ 
                      // If Email Already Exists, Returns 'EXIST'
                      // If Email not exists, Returns 'NOT_EXIST'
                      url:"http://upn.nellutlalnrao.com/",
                      method:"",
                      value:"NOT_EXIST", // When Value not matches - throws Error Message
                      errorMessage:"This Email Address is already Registered."
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
  
  return (<View style={{ padding:10 }}>
    <Form name="login" btnSubmit={{
            btnType:'primary',
            label:'Login into Account',
            size: 14
          }} 
          onSubmit={(form, isValidForm)=>{
            console.log("Form Result:", form);
          }}>
      <View style={{ marginTop:15 }}>
          <EmailAddress />
      </View>
      <View style={{ marginTop:15, marginBottom:15 }}>
          <RegPwd />
      </View>
   </Form>
  </View>);
};


export default Login;