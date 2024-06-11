import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import md5 from 'md5';
import { useNavigation } from '@react-navigation/native';
import { TextBox } from '@AppFormElement/TextBox/index.js';
import { Email } from '@AppFormElement/Email/index.js';
import { Select } from '@AppFormElement/Select/index.js';
import { Password } from '@AppFormElement/Password/components/pwd.js';
import { ConfirmPassword } from '@AppFormElement/Password/components/confirm-pwd.js';
import { Alert } from '@AppComponent/Alert/index.js';
import { Form } from '@AppFormElement/Form/index.js';
import { Range } from '@AppUtils/ArrayManagement.js';
import { AddToSPStore, getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import { NEXUS_URL } from '@StaticData/urls.js';
import GifImage from '@lowkey/react-native-gif';

const Register = () =>{
    const [displayScreen, setDisplayScreen] = useState('REGISTER'); // REGISTER / EMAIL_VALIDATE / SUCCESS
    const [deviceId, setDeviceId] = useState();
    const [loading, setLoading] = useState(false);
    const [registerData, setRegisterData] = useState({ email: 'xxxxxxxxxxxx@gmail.com' });
    const [alertMessage, setAlertMessage] = useState({ type:'', message:'' });
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
                    value: 6,
                    errorMessage:"OTP Code should be 6 digits"
                },
                maxLength:{
                    value: 6,
                    errorMessage:"OTP Code should be 6 digit"
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
      {displayScreen=='REGISTER' && (
        <View>
            {loading? (<View style={{ marginTop:'55%', justifyContent:'center', alignItems:'center' }}>
                <Image source={require('@Assets/img/loading.gif')} 
            style={{ width:100, height: 100 }} />
            </View>):(
             <Form name="register" btnSubmit={{
                btnType:'danger',
                label:'Create an Account',
                size: 14
              }} 
              onSubmit={async(form, isValidForm, triggerReset)=>{
                if(isValidForm){
                  setLoading(true);
                  setAlertMessage({ type:'', message: '' });
                  const data = { 
                   surname: form?.["register"]?.surname?.value,
                   name: form?.["register"]?.name?.value,
                   gender: form?.["register"]?.gender?.value?.[0],
                   age: form?.["register"]?.age?.value?.[0],
                   email: form?.["register"]?.email?.value,
                   pwd: md5( form?.["register"]?.pwd?.value ) 
                  };
                  const userDetails = await getFromSPStore("USER_DETAILS");
                  await AddToSPStore("USER_DETAILS", { ...userDetails, accountInfo: data });
                  setDeviceId(userDetails?.device?.id);
                  // Trigger API to send OTP
                  axios.post(NEXUS_URL+'send/otp', 
                      { 
                        name: data?.surname+' '+data?.name,
                        email: data?.email,
                        deviceId: userDetails?.device?.id
                      }).then(response => { 
                          console.log(response);
                          setRegisterData(data);
                          setDisplayScreen('EMAIL_VALIDATE');
                   }) .catch(error => {  // Show Alert
                      console.error(error);
                      setLoading(false);
                      setAlertMessage({ type:'danger', message: error.message });
                    });
                } else { // Show Alert
                  setLoading(false);
                  setAlertMessage({ type:'danger', message: 'Please complete all mandatory fields to proceed.' });
                }
                
              }}>
                {alertMessage?.type?.length>0 && alertMessage?.message?.length>0  && 
            (<View style={{ marginTop: 15 }}>
              <Alert type={alertMessage?.type} show="true" heading="Error Message" body={alertMessage?.message} />
            </View>)}
            <View style={{ marginTop:15 }}><SurName /></View>
            <View style={{ marginTop:15 }}><Name /></View>
            <View style={{ marginTop:15 }}><Gender /></View>
            <View style={{ marginTop:15 }}><Age /></View>
            <View style={{ marginTop:15 }}><EmailAddress /></View>
            <View style={{ marginTop:15, marginBottom:15 }}><RegPwd /></View>
              </Form>  
            )}
      </View>)}
      {displayScreen=='EMAIL_VALIDATE' && (<Form name="validateEmail" btnSubmit={{
              btnType:'danger',
              label:'Validate OTP Code',
              size: 14
            }} 
            onSubmit={async(form, isValidForm, triggerReset)=>{
                // Validate OTP Code
                const otpcode = form?.["validateEmail"]?.otp?.value;
                // Trigger API to send OTP
                axios.post(NEXUS_URL+'verify/otp', { 
                      otpcode: otpcode,
                      deviceId: deviceId
                    }).then(async(response) => { 
                        console.log(response);
                        if(response?.data?.status?.toLowerCase()==='success'){
                            // Update Account Info Data into Database
                            const userDetails = await getFromSPStore("USER_DETAILS");
                            console.log("===================================");
                            console.log("userDetails [accountInfo]", userDetails?.accountInfo);
                            console.log("===================================");
                            axios.post(NEXUS_URL+'user/create', userDetails?.accountInfo).then(response => { 
                                    console.log(response?.data);
                                    setDisplayScreen('SUCCESS');
                            }).catch(error => {  // Show Alert
                                console.error(error);
                                setLoading(false);
                                setAlertMessage({ type:'danger', message: error.message });
                            });
                        } else {
                            setAlertMessage({ type:'danger', message: response?.data?.message });
                        }
                 }) .catch(error => {  // Show Alert
                    console.error(error);
                    setAlertMessage({ type:'danger', message: error.message });
                  });
                
            }}>
               {alertMessage?.type?.length>0 && alertMessage?.message?.length>0  && 
               (<View style={{ marginTop: 15 }}>
                    <Alert type={alertMessage?.type} show="true" heading="Error Message" body={alertMessage?.message} />
                </View>)}
                <View style={{ marginTop:15, marginBottom:15 }}>
                    <Text style={{ lineHeight:22 }}>
                    An OTP Code is sent to your mentioned Email Address {registerData?.email}
                    </Text>
                </View>
                <View style={{ marginBottom:15 }}><OtpCode /></View>
            </Form>)}
        {displayScreen=='SUCCESS' && (
                <View style={{ marginTop:25, marginBottom:15 }}>
                    <Text style={{ textAlign:'center', marginBottom:5}}>
                      Your Account was created successfully.
                    </Text>
                    <Text style={{ textAlign:'center', marginBottom:5}}>
                    Please login into Account.
                    </Text>
                </View>)}
    </View>);
};

export default Register;