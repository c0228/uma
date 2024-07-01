import React, { useState, createContext, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { getAppContext, ContextProvider as PresetContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import Introduction from "./components/Introduction/index.js";
import Notifications from "./components/Notifications/index.js";
import Storage from "./components/Storage/index.js";
import { getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';

const Preset = () =>{
 const Content = () =>{
  const { contextData, setContextData } = getAppContext();
  useEffect(()=>{
    setContextData({...contextData, lang:'en' }); // Set Language
  },[]);
  return (<View style={styles.presetView}>
    {contextData?.displayScreen === 'INTRODUCTION' && (<Introduction />)}
    {contextData?.displayScreen === 'NOTIFICATIONS' && (<Notifications />)}
    {contextData?.displayScreen === 'STORAGE' && (<Storage />)}
  </View>);
 };
 return (<PresetContextProvider variables={{ displayScreen: 'INTRODUCTION' }}>{/* REGISTER / EMAIL_VALIDATE / SUCCESS */}
  <Content />
 </PresetContextProvider>);
};

const styles = StyleSheet.create({
 presetView:{ flex:1 }
});

export default Preset;