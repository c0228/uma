import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PermissionsAndroid, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAppContext, ContextProvider as PresetContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from './../Header.js';
import { bgs, dialogue } from '@StaticData/dialogue.js';
import { Button } from '@AppFormElement/Button/index.js';
import { AddToSPStore, getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';

const Storage = () =>{
 const { contextData, setContextData } = getAppContext();
 const lang = contextData?.lang; // language 
 const handleBackButton = async() =>{
  const userDetails = await getFromSPStore('USER_DETAILS');
  let permissions = userDetails?.permissions || [];
  if(!permissions?.includes('NOTIFICATIONS')){
    setContextData({ displayScreen: 'NOTIFICATIONS' });
  } else {
    setContextData({ displayScreen: 'INTRODUCTION' });
  }
 };
 const backButton = () =>{
  const backHandler = BackHandler.addEventListener('hardwareBackPress',  async() => { // onBack Press
    handleBackButton();
    return true; // Prevent default back action
  });
  return () => backHandler.remove();
 }; 
 useEffect(()=>{
  backButton();
 },[]);
 const navigation = useNavigation();
 const GoBackButton = () =>{
  return (
  <View style={styles.goBackButtonView}>
        <TouchableOpacity onPress={() =>handleBackButton()}>
            <View style={styles.goBackButtonBox} >
                <FontAwesome5 name="arrow-left" size={12} color="#fff" style={styles.goBackButtonIcon} />
                <Text style={styles.goBackButtonText}>{dialogue?.["d12"]?.[lang]}</Text>  
            </View>
         </TouchableOpacity>    
  </View>);
 };
 const handleNotification = async() =>{
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [PermissionsAndroid?.PERMISSIONS?.READ_EXTERNAL_STORAGE,
        PermissionsAndroid?.PERMISSIONS?.WRITE_EXTERNAL_STORAGE
      ]);
    if(granted[PermissionsAndroid?.PERMISSIONS?.READ_EXTERNAL_STORAGE]===PermissionsAndroid?.RESULTS?.GRANTED &&
      granted[PermissionsAndroid?.PERMISSIONS?.WRITE_EXTERNAL_STORAGE]===PermissionsAndroid?.RESULTS?.GRANTED){
        const userDetails = await getFromSPStore('USER_DETAILS');
        if(!userDetails?.permissions?.includes('STORAGE')){
          let permissions = userDetails?.permissions || [];
             permissions.push('STORAGE');
          await AddToSPStore('USER_DETAILS',{...userDetails, permissions});
        }
    } else {
      console.log("Access Denied")
    }
    navigation.navigate('SS_Authentication');
  } catch(err){
     console.warn(err);
  } 
 };
 const SplashButton = ()=>{
    return (<View style={styles.splashButtonView}>
    <View style={styles.splashButtonBox}>
    <Button type="light" label={dialogue?.["d17"]?.[lang]}
    icon={{ type:'FontAwesome6', label:"floppy-disk", size: 24, style:{ marginTop:8, color: '#000' } }}
    size={16} onPress={()=>handleNotification(navigation)} />
    </View>
  </View>);
 };
 return (<View style={styles.storageView}>
    <GoBackButton />
    <Header title={dialogue?.["d1"]?.[lang]} color="blue" lang={lang} />
    <View style={styles.subTitleView}>
      <Text style={styles.subTitle}>{dialogue?.["d13"]?.[lang]}</Text>
    </View>
    <View style={styles.descView}>
      <Text style={[styles.desc,{ paddingTop:20 }]}>{dialogue?.["d14"]?.[lang]}</Text>
      <Text style={[styles.desc,{ paddingTop:20 }]}>{dialogue?.["d15"]?.[lang]}</Text>
      <Text style={[styles.desc,{ paddingTop:20 }]}>{dialogue?.["d16"]?.[lang]}</Text>
    </View>
    <SplashButton />
  </View>);
};

const styles = StyleSheet.create({
 goBackButtonView:{  position:'absolute', marginLeft:10, marginTop:18 },
 goBackButtonBox:{ flexDirection:'row', padding:8, borderWidth:1, borderColor:'#fff', borderRadius:8 },
 goBackButtonIcon:{ marginTop:2,marginRight:5 },
 goBackButtonText:{ color:'#fff', fontSize: 13, fontWeight:'bold' },
 splashButtonView:{ flex:1, justifyContent:'flex-end', alignItems:'center' },
 splashButtonBox:{ width:'100%', height:60, paddingLeft:15, paddingRight:15 },
 storageView:{ flex:1, backgroundColor: bgs?.['blue']},
 subTitleView:{ paddingTop:30, width:'100%', alignItems:'center' },
 subTitle:{ color:'#fdf2d0', fontSize:15, fontWeight:'bold', lineHeight:24, textTransform:'uppercase'  },
 descView:{ padding:20, width:'100%' },
 desc:{ color:'#fff', fontSize:16, lineHeight:24  },
});

export default Storage;