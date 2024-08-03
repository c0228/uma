import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getAppContext, ContextProvider as ExtraContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import { getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import Avatar from "./components/Avatar/index.js";
import ExamTarget from "./components/ExamTarget/index.js";
import TimeTable from "./components/TimeTable/index.js";
import { CommonActions } from '@react-navigation/native';

const Extra = () =>{
 const navigation = useNavigation();
 const Content = () =>{
  const { contextData, setContextData } = getAppContext();
  const initialize = async() =>{
    const userDetails = await getFromSPStore("USER_DETAILS"); // Gets Details After Login
    if(userDetails?.accountInfo?.avatar?.length===0){
      setContextData({ displayScreen: 'AVATAR', userDetails: userDetails });   
    } else if(userDetails?.accountInfo?.examTargetList?.length===0){
      setContextData({ displayScreen: 'EXAMTARGET', userDetails: userDetails });
    } else if(Object.keys(userDetails?.accountInfo?.timeAvailability)?.length===0){
      setContextData({ displayScreen: 'TIMETABLE', userDetails: userDetails });
    } else {
      navigation.dispatch(CommonActions.reset({
        index: 0, routes: [{ name: 'SS_Main', params: { from: 'SS_Extra' } }],
      }));
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
    {contextData?.displayScreen === 'EXAMTARGET' && (<ExamTarget />)}
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