import React, { useState, createContext, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { getAppContext, ContextProvider as RegisterContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import EmailValidate from "./components/EmailValidate/index.js";
import UserDetails from "./components/UserDetails/index.js";
import SuccessView from "./components/SuccessView/index.js";
import { getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';

const Register = () =>{
 const Content = () =>{
  const { contextData, setContextData } = getAppContext();
  const initialize = async() =>{
    const userDetails = await getFromSPStore("USER_DETAILS");
    setContextData({ userDetails: userDetails });
  };
  useEffect(()=>{
    console.log("---------------------------");
    console.log("contextData", contextData);
    console.log("---------------------------");
  },[contextData]);
  useEffect(()=>{
    initialize();
  },[]);
  return (<View style={styles.registerView}>
    {contextData?.displayScreen === 'REGISTER' && (<UserDetails />)}
    {contextData?.displayScreen === 'EMAIL_VALIDATE' && (<EmailValidate />)}
    {contextData?.displayScreen === 'SUCCESS' && (<SuccessView />)}
  </View>);
 };
 return (<RegisterContextProvider variables={{ displayScreen: 'REGISTER' }}>{/* REGISTER / EMAIL_VALIDATE / SUCCESS */}
  <Content />
 </RegisterContextProvider>);
};

const styles = StyleSheet.create({
 registerView:{ borderTopWidth:1, borderTopColor:'#ddd', paddingLeft:15, paddingRight:15, marginBottom:120 }
});

export default Register;