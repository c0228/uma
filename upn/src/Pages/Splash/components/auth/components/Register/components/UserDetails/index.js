import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import axios from 'axios';
import md5 from 'md5';
import { getAppContext } from '@AdvancedTopics/ReactContext/index.js';
import { TextBox } from '@AppFormElement/TextBox/index.js';
import { Email } from '@AppFormElement/Email/index.js';
import { Select } from '@AppFormElement/Select/index.js';
import { ConfirmPassword } from '@AppFormElement/Password/components/confirm-pwd.js';
import { Alert } from '@AppComponent/Alert/index.js';
import { Form } from '@AppFormElement/Form/index.js';
import { Range } from '@AppUtils/ArrayManagement.js';
import { NEXUS_URL } from '@StaticData/urls.js';

const UserDetails = () =>{
 const { contextData, setContextData } = getAppContext();
 const [loading, setLoading] = useState(false);
 const [alertMessage, setAlertMessage] = useState({ type:'', message:'' });
 const handleFormSubmit = async(form, isValidForm, triggerReset) =>{
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
    let userDetails = contextData.userDetails;
        userDetails.accountInfo = data;
    // Trigger API to send OTP
    axios.post(NEXUS_URL+'send/otp', { name: data?.surname+' '+data?.name, 
            email: data?.email, deviceId: contextData?.userDetails?.device?.id }).then(response => { 
        console.log(response?.data);
        setContextData({ userDetails: userDetails, displayScreen: 'EMAIL_VALIDATE' });
    }) .catch(error => {  // Show Alert
            console.error(error);
            setLoading(false);
            setAlertMessage({ type:'danger', message: error.message });
    });
  } else { // Show Alert
     setLoading(false);
     setAlertMessage({ type:'danger', message: 'Please complete all mandatory fields to proceed.' });
  }
 };

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
                    url: NEXUS_URL+"email/validate",
                    method:"POST",
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


 return (<View>
    {loading?(<View style={styles.loadingView}>
                <Image source={require('@Assets/img/loading.gif')} style={styles.loadingImg} />
              </View>):
    (<View>
      <Form name="register" btnSubmit={{ btnType:'danger', label:'Create an Account', size: 14 }} onSubmit={handleFormSubmit}>
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
    </View>)}
  </View>);
};

const styles = StyleSheet.create({
 loadingView: { marginTop:'55%', justifyContent:'center', alignItems:'center' },
 loadingImg: { width:100, height: 100 }
});

export default UserDetails;