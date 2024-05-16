import React from 'react';
import { View, Text } from 'react-native';
import { TextBox } from '@AppFormElement/TextBox/index.js';
import { Email } from '@AppFormElement/Email/index.js';
import { Password } from '@AppFormElement/Password/components/pwd.js';
import { ConfirmPassword } from '@AppFormElement/Password/components/confirm-pwd.js';
import { Form } from '@AppFormElement/Form/index.js';

const Register = () =>{

    const SurName = () =>{
        return (<TextBox name="surname" label="Surname" placeholder="Enter your Surname" />);
    };

    const Name = () =>{
        return (<TextBox name="name" label="Name" placeholder="Enter your Name" />);
    };

    const Comment = () =>{
        return (<TextBox name="comment" label="Add your Comment" placeholder="Enter your Comments" multiline={true} numberOfLines={4} />);
    };

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
        return (<View>
            <ConfirmPassword  name="pwd2" 
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
            }}
            />
        </View>);
    };
    
    return (<View style={{ padding:10 }}>
      <Form name="register" btnSubmit={{
              btnType:'primary',
              label:'Create an Account',
              size: 14
            }} 
            onSubmit={(form, isValidForm, triggerReset)=>{
              console.log("Form Result:", form);
              triggerReset();
            }}>
        <View style={{ marginTop:5 }}>
            <SurName />
        </View>
        <View style={{ marginTop:5 }}>
            <Name />
        </View>
        <View style={{ marginTop:15 }}>
            <EmailAddress />
        </View>
        <View style={{ marginTop:15, marginBottom:15 }}>
            <RegPwd />
        </View>
     </Form>
    </View>);
};

export default Register;