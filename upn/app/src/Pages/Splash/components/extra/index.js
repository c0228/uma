import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { getAppContext, ContextProvider as ExtraContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import { getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import Avatar from "./components/Avatar/index.js";

const Extra = () =>{
 const Content = () =>{
  const { contextData, setContextData } = getAppContext();
  const initialize = async() =>{
    const userDetails = await getFromSPStore("USER_DETAILS"); // Gets Details After Login
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
  return (<View style={styles.extraView}>
    {contextData?.displayScreen === 'AVATAR' && (<Avatar />)}
    {contextData?.displayScreen === 'EMAIL_VALIDATE' && (<Avatar />)}
    {contextData?.displayScreen === 'SUCCESS' && (<Avatar />)}
  </View>);
 };
 return (<ExtraContextProvider variables={{ displayScreen: 'AVATAR' }}>{/* REGISTER / EMAIL_VALIDATE / SUCCESS */}
    <Content />
 </ExtraContextProvider>);
};

const styles = StyleSheet.create({
  extraView:{ borderTopWidth:1, borderTopColor:'#ddd', paddingLeft:15, paddingRight:15, marginBottom:120 }
});

export default Extra;