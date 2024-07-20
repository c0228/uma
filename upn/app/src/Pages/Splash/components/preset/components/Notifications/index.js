import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PermissionsAndroid, BackHandler  } from 'react-native';
import { getAppContext, ContextProvider as PresetContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from './../Header.js';
import { bgs, dialogue } from '@StaticData/dialogue.js';
import { Button } from '@AppFormElement/Button/index.js';
import { AddToSPStore, getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';

const Notifications = ({ route }) =>{
 const { contextData, setContextData } = getAppContext();
 const lang = contextData?.lang; // language 
 const navigation = useNavigation();

 const backButton = () =>{
  const backHandler = BackHandler.addEventListener('hardwareBackPress',  () => { // onBack Press
    setContextData({ displayScreen: 'INTRODUCTION' }); // Move to Introduction
    return true; // Prevent default back action
  });
  return () => backHandler.remove();
 }; 

 useEffect(() => { backButton(); }, []);

 const handleNotification = async() =>{
   try {
     const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
     if(granted === PermissionsAndroid.RESULTS.GRANTED){
       const userDetails = await getFromSPStore('USER_DETAILS');
       if(!userDetails?.permissions?.includes('NOTIFICATIONS')){
        let permissions = userDetails?.permissions || [];
           permissions.push('NOTIFICATIONS');
        await AddToSPStore('USER_DETAILS',{...userDetails, permissions});
       }
       else if(!userDetails?.permissions?.includes('STORAGE')){
          setContextData({ displayScreen: 'STORAGE' });
       } else {
          navigation.navigate('SS_Auth');
       }
     } else {
        console.log("Access Denied"); // Access Denied Message 
     }
   } catch(err) {
      console.warn(err);
   }
 };

 const GoBackButton = () =>{
  return (<View style={styles.backButtonView}>
    <TouchableOpacity onPress={() =>setContextData({ displayScreen: 'INTRODUCTION' })}>
      <View style={styles.backButtonBox} >
        <FontAwesome5 name="arrow-left" size={12} color="#fff" style={styles.backButtonIcon} />
        <Text style={styles.backButtonText}>{dialogue?.["d12"]?.[lang]}</Text>  
      </View>
    </TouchableOpacity>    
  </View>);
 };

 const SplashButton = ()=>{
    return (<View style={styles.splashButtonView}>
    <View style={styles.splashButtonBack}>
    <Button type="light" label={dialogue?.["d11"]?.[lang]} 
    icon={{ type:'MaterialCommunityIcons', label:"bell", size: 24, style:{ marginTop:8, color: '#000' } }}
    size={16} onPress={()=>handleNotification(navigation)} />
    </View>
  </View>);
 };

 return (<View style={styles.notificationView}>
    <GoBackButton />
    <Header title={dialogue?.["d1"]?.[lang]} color="indigo" lang={lang} />
    <View style={styles.subTitleView}>
      <Text style={styles.subTitle}>{dialogue?.["d8"]?.[lang]}</Text>
    </View>
    <View style={styles.descView}>
      <Text style={[styles.desc, { textAlign:'center' }]}>{dialogue?.["d9"]?.[lang]}</Text>
      <Text style={[styles.desc,{ paddingTop:20 }]}>{dialogue?.["d10"]?.[lang]}</Text>
    </View>
    <SplashButton />
  </View>);
};

const styles = StyleSheet.create({
 backButtonView:{ position:'absolute', marginLeft:10, marginTop:18 },
 backButtonBox:{ flexDirection:'row', padding:8, borderWidth:1, borderColor:'#fff', borderRadius:8 },
 backButtonIcon:{ marginTop:2,marginRight:5 },
 backButtonText:{ color:'#fff', fontSize: 13, fontWeight:'bold' },
 splashButtonView:{ flex:1, justifyContent:'flex-end', alignItems:'center' },
 splashButtonBack:{ width:'100%', height:60, paddingLeft:15, paddingRight:15 },
 notificationView:{ flex:1, backgroundColor: bgs?.['indigo']},
 subTitleView:{ paddingTop:30, width:'100%', alignItems:'center' },
 subTitle:{ color:'#fdf2d0', fontSize:16, fontWeight:'bold', lineHeight:24, textTransform:'uppercase'  },
 descView:{ padding:20, width:'100%', alignItems:'center' },
 desc:{ color:'#fff', fontSize:16, lineHeight:24  },
});

export default Notifications;