import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getAppContext, ContextProvider as ExtraContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import { getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import Avatar from "./components/Avatar/index.js";
import EduStatus from "./components/EduStatus/index.js";
import ExamTarget from "./components/ExamTarget/index.js";
import PrepareSubjects from "./components/PrepSubj/index.js";
import TimeTable from "./components/TimeTable/index.js";

const Extra = () =>{
 const Content = () =>{
  const { contextData, setContextData } = getAppContext();
  const initialize = async() =>{
    const userDetails = await getFromSPStore("USER_DETAILS"); // Gets Details After Login
    if(userDetails?.accountInfo?.avatar?.length>0){
      setContextData({ displayScreen: 'EDUSTATUS', userDetails: userDetails });
    } else {
      setContextData({ displayScreen: 'AVATAR', userDetails: userDetails });   
    }
    
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
    {contextData?.displayScreen === 'EDUSTATUS' && (<EduStatus />)}
    {contextData?.displayScreen === 'EXAMTARGET' && (<ExamTarget />)}
    {contextData?.displayScreen === 'PREPSUBJ' && (<PrepareSubjects />)}
    {contextData?.displayScreen === 'TIMETABLE' && (<TimeTable />)}
  </View>);
 };
 return (<ExtraContextProvider>{/* REGISTER / EMAIL_VALIDATE / SUCCESS */}
    <Content />
 </ExtraContextProvider>);
};

const styles = StyleSheet.create({
  extraView:{ flex:1, backgroundColor:'#fff' }
});

export default Extra;