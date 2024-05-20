import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextBox } from '@AppFormElement/TextBox/index.js';
import { Email } from '@AppFormElement/Email/index.js';
import { Select } from '@AppFormElement/Select/index.js';
import { Password } from '@AppFormElement/Password/components/pwd.js';
import { ConfirmPassword } from '@AppFormElement/Password/components/confirm-pwd.js';
import { Form } from '@AppFormElement/Form/index.js';
import { Range } from '@AppUtils/ArrayManagement.js';

const Register = () =>{
    const [displayScreen, setDisplayScreen] = useState('REGISTER'); // REGISTER / EMAIL_VALIDATE / SUCCESS
    const [registerData, setRegisterData] = useState({
        email: 'xxxxxxxxxxxx@gmail.com' });

    const navigation = useNavigation();
    const SurName = () =>{
        return (<TextBox name="surname" label="Surname" placeholder="Enter your Surname" 
            validation={{
                required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                },
                minLength:{
                    value: 5,
                    errorMessage:"Surname should be greator than 5"
                }
            }} />);
    };

    const OtpCode = () =>{
        return (<TextBox name="otp" label="Enter OTP Code" placeholder="_ _ _ _ _" 
            validation={{
                required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                },
                minLength:{
                    value: 5,
                    errorMessage:"OTP Code should be 5 digits"
                },
                maxLength:{
                    value: 5,
                    errorMessage:"OTP Code should be 5 digit"
                }
            }} />);
    };


    const Name = () =>{
        return (<TextBox name="name" label="Name" placeholder="Enter your Name" 
            validation={{
                required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                },
                minLength:{
                    value: 5,
                    errorMessage:"Message should be greator than 5"
                }
            }} />);
    };

    const Gender = ()=>{
        return (<View>
         <Select name="gender" 
           label="Gender" 
           popupTitle="Choose your Gender"
           placeholder="Select your Gender"
           options={["Male", "Female"]?.map((val)=>{ return { id:val, label:val, value: val }; })} 
           onSelect={(value)=>{}} 
           validation={{
                required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                }
          }} />
       </View>);
    };

    const Age = ()=>{
        return (<View>
         <Select name="age" 
           label="Age" 
           popupTitle="Select your Age"
           placeholder="Select your Age"
           options={Range(10, 32)?.map((val)=>{ return { id:val+' years', label:val+' years', value: val+' years' }; })} 
           onSelect={(value)=>{}}
           validation={{
             required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
             }
          }} />
       </View>);
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
            <ConfirmPassword  name="pwd" 
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
    
    return (<View style={{  borderTopWidth:1, borderTopColor:'#ddd', paddingLeft:15, paddingRight:15, marginBottom:120 }}>
      {displayScreen=='REGISTER' && (<Form name="register" btnSubmit={{
              btnType:'primary',
              label:'Create an Account',
              size: 14
            }} 
            onSubmit={(form, isValidForm, triggerReset)=>{
              console.log("Form Result:", form);
              const data = { surname: form?.["register"]?.surname?.value,
                            name: form?.["register"]?.name?.value,
                            gender: form?.["register"]?.gender?.value,
                            age: form?.["register"]?.gender?.value,
                            email: form?.["register"]?.email?.value,
                            pwd: form?.["register"]?.pwd?.value,
                            pwdConfirm: form?.["register"]?.pwdConfirm?.value };
              console.log("data", data);
              if(data?.gender?.length>0 && data?.email?.length>0){
                setRegisterData(data);
                setDisplayScreen('EMAIL_VALIDATE');
              }
             // triggerReset();
            }}>
        <View style={{ marginTop:5 }}>
            <SurName />
        </View>
        <View style={{ marginTop:5 }}>
            <Name />
        </View>
        <View style={{ marginTop:5 }}>
            <Gender />
        </View>
        <View style={{ marginTop:5 }}>
            <Age />
        </View>
        <View style={{ marginTop:15 }}>
            <EmailAddress />
        </View>
        <View style={{ marginTop:15, marginBottom:15 }}>
            <RegPwd />
        </View>
      </Form>)}
      {displayScreen=='EMAIL_VALIDATE' && (<Form name="validateEmail" btnSubmit={{
              btnType:'primary',
              label:'Validate OTP Code',
              size: 14
            }} 
            onSubmit={(form, isValidForm, triggerReset)=>{
                setDisplayScreen('SUCCESS');
            }}>
                <View style={{ marginTop:15, marginBottom:15 }}>
                    <Text style={{ lineHeight:22 }}>
                    An OTP Code is sent to your mentioned Email Address {registerData?.email}
                    </Text>
                </View>
                <View style={{ marginBottom:15 }}>
                <OtpCode />
                </View>
            </Form>)}
        {displayScreen=='SUCCESS' && (<Form name="validateEmail" btnSubmit={{
              btnType:'primary',
              label:'Next',
              size: 14
            }} 
            onSubmit={(form, isValidForm, triggerReset)=>{
                navigation.navigate('SS_Avatar', registerData);
            }}>
                <View style={{ marginTop:15, marginBottom:15 }}>
                    <Text style={{ textAlign:'center', marginBottom:5}}>
                      Your Account was successfully Created.
                    </Text>
                    <Text style={{ textAlign:'center', marginBottom:5}}>
                    Please login into Account.
                    </Text>
                </View>
            </Form>)}
    </View>);
};

export default Register;