import React, { useState, createContext, useEffect } from "react";
import { getAppContext, ContextProvider as RegisterContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import { View, Text, TouchableOpacity } from "react-native";
import EmailValidate from "./components/EmailValidate/index.js";
import UserDetails from "./components/UserDetails/index.js";
import SuccessView from "./components/SuccessView/index.js";

const Register = () =>{
 const Content = () =>{
  const { contextData } = getAppContext();
  return (<View>
    {contextData?.displayScreen === 'REGISTER' && (<UserDetails />)}
    {contextData?.displayScreen === 'EMAIL_VALIDATE' && (<EmailValidate />)}
    {contextData?.displayScreen === 'SUCCESS' && (<SuccessView />)}
  </View>);
 };
 return (<RegisterContextProvider variables={{ displayScreen: 'REGISTER' }}>{/* REGISTER / EMAIL_VALIDATE / SUCCESS */}
    <Content />
 </RegisterContextProvider>);
};

export default Register;