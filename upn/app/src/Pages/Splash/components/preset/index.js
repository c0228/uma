import React, { useState, createContext, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getAppContext, ContextProvider as PresetContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import Introduction from "./components/Introduction/index.js";
import Notifications from "./components/Notifications/index.js";
import Storage from "./components/Storage/index.js";
import { getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import Language from '@AppUtils/Language.js';

const Preset = () =>{
 const Content = () =>{
  const navigation = useNavigation();
  const { contextData, setContextData } = getAppContext(); // Used to change Display's
  // const [lang, setLang] = useState();
  const handleLang = (option) =>{
   // setLang(option);
    setContextData({ lang: option });
  };
  const initialize = async() =>{
    let details = await getFromSPStore('USER_DETAILS');
    console.log("details", details);
    
    if(details?.accountInfo?.isAuthenticated){
      navigation?.navigate('SS_Extra');
    } else {
      setContextData({ displayScreen: 'INTRODUCTION', lang: details?.lang || 'en' });
    }
  };
  useEffect(()=>{
    initialize();
  },[]);
  
  return (<View style={styles.presetView}>
    <View style={styles.langView}>
      <Language value={contextData?.lang} handleSelect={handleLang} />
    </View>
    {contextData?.displayScreen === 'INTRODUCTION' && (<Introduction />)}
    {contextData?.displayScreen === 'NOTIFICATIONS' && (<Notifications />)}
    {contextData?.displayScreen === 'STORAGE' && (<Storage />)}
  </View>);
 };
 return (<PresetContextProvider>{/* REGISTER / EMAIL_VALIDATE / SUCCESS */}
  <Content />
 </PresetContextProvider>);
};

const styles = StyleSheet.create({
 presetView:{ flex:1 },
 langView: { position:'absolute', right:15, top:15, zIndex:2 },
});

export default Preset;