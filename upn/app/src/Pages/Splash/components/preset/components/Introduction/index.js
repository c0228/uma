import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, NativeModules } from 'react-native';
import { getAppContext, ContextProvider as PresetContextProvider } from '@AdvancedTopics/ReactContext/index.js';
import { useNavigation } from '@react-navigation/native';
import Header from './../Header.js';
import Language from '@AppUtils/Language.js';
import { bgs, dialogue } from '@StaticData/dialogue.js';
import { Button } from '@AppFormElement/Button/index.js';
import { getFromSPStore, AddToSPStore } from '@AppUtils/EncryptSharedPreferences.js';

const Introduction = () =>{
 const { contextData, setContextData } = getAppContext();
 const { PlatformConstants } = NativeModules;
 const lang = contextData?.lang; // language 
 const navigation = useNavigation(); 
 const checkStoragePermissions = async(userDetails) =>{
   let details = {...userDetails}; 
   if(Platform?.OS?.toLowerCase()==='android' && PlatformConstants?.Version>23 && !details?.permissions?.includes('STORAGE')){
     let permissions = details?.permissions || [];
         permissions.push('STORAGE');
         details = {...details, permissions};
     await AddToSPStore('USER_DETAILS', details);
   }
   return details;
 };
 const handleIntroduction = async() =>{
  let userDetails = await getFromSPStore('USER_DETAILS');
  // Based on Android Version set permissions details of 'STORAGE'
  const details = await checkStoragePermissions(userDetails);
  if(!details?.permissions?.includes('NOTIFICATIONS')){ // displayScreen of 'NOTIFICATIONS'
    setContextData({ displayScreen: 'NOTIFICATIONS' });
  } else if(!details?.permissions?.includes('STORAGE')){ // displayScreen of 'STORAGE'
      setContextData({ displayScreen: 'STORAGE' });
  } else { // navigate to auth
     navigation.navigate('SS_Auth');
  }
 };
 const BulletPoint = ({ text }) =>{
   return (<View style={styles.bulletView}>
      <View style={styles.bulletPointView}>
         <View style={styles.bulletPoint}></View>
      </View>
      <View style={styles.bulletTextView}>
         <Text style={styles.bulletText}>{text}</Text>
      </View>
   </View>);
 };
 const SplashButton = ()=>{
      return (<View style={styles.splashButtonView}>
      <View style={styles.splashButton}>
         <Button type="light" label={dialogue?.["d7"]?.[lang]} size={16} onPress={()=>handleIntroduction()} />
      </View>
    </View>);
 };

 return (<View style={styles.introductionView}>
    <Header title={dialogue?.["d1"]?.[lang]} color="voilet" lang={lang} />
    <View style={styles.subTitleView}>
        <Text style={styles.subTitle}>{dialogue?.["d2"]?.[lang]}</Text>
    </View>
    <BulletPoint text={dialogue?.["d3"]?.[lang]} />
    <BulletPoint text={dialogue?.["d4"]?.[lang]} />
    <BulletPoint text={dialogue?.["d5"]?.[lang]} />
    <BulletPoint text={dialogue?.["d6"]?.[lang]} />
    <SplashButton />
 </View>);
};

const styles = StyleSheet.create({
 introductionView: { flex:1, backgroundColor: bgs?.['voilet'] },
 bulletView:{ paddingBottom:10, paddingLeft:20, paddingRight:20, flexDirection:'row' },
 bulletPointView:{ width:'5%'},
 bulletPoint:{ marginTop:10, width:5, height:5, borderRadius: 2.5, backgroundColor:'#fff' },
 bulletTextView:{ width:'95%' },
 bulletText:{ color:'#fff', fontSize:16, lineHeight:24 },
 splashButtonView:{ flex:1, justifyContent:'flex-end', alignItems:'center' },
 splashButton:{  width:'100%', height:60, paddingLeft:15, paddingRight:15 },
 subTitleView:{ padding:20, width:'100%', alignItems:'center' },
 subTitle:{ color:'#fdf2d0', fontSize:16, lineHeight:24  }
});

export default Introduction;