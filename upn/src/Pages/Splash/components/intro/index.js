import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, NativeModules  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Header from './../../utils/Header.js';
import Language from './../../utils/Language.js';
import { bgs, dialogue } from './../../static-data/dialogue.js';
import { Button } from '@AppFormElement/Button/index.js';
import { getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';

const Introduction = ({ route }) =>{
 const { PlatformConstants } = NativeModules;
 const [lang, setLang] = useState('en'); 
 const navigation = useNavigation(); 

 useEffect(()=>{
  console.log("useEffect [lang]", lang);
 },[lang]);

 useEffect(()=>{
  if(route?.params?.language){ 
    setLang( route?.params?.language );
  }
},[route?.params]);

 const BulletPoint = ({ text }) =>{
    return (<View style={{ paddingBottom:10, paddingLeft:20, paddingRight:20, flexDirection:'row'}}>
          <View style={{ width:'5%'}}>
              <View style={{ marginTop:10, width:5, height:5, borderRadius: 2.5, backgroundColor:'#fff' }}></View>
          </View>
          <View style={{ width:'95%'}}>
              <Text style={{ color:'#fff', fontSize:16, lineHeight:24 }}>{text}</Text>
          </View>
        </View>);
 };
 const handleIntroduction = async() =>{
  const userDetails = await getFromSPStore('USER_DETAILS');
  if(!userDetails?.permissions?.includes('POST_NOTIFICATIONS')){
     navigation.navigate('SS_Notifications',{ language: lang });
  } else if(!userDetails?.permissions?.includes('STORAGE') && 
          Platform?.OS?.toLowerCase()==='android' && 
          PlatformConstants?.Version<=23){
     navigation.navigate('SS_Storage',{ language: lang });
  } else {
     navigation.navigate('SS_Authentication',{ language: lang });
  }
 };

 const SplashButton = ()=>{
      return (<View style={{ flex:1, justifyContent:'flex-end', alignItems:'center' }}>
      <View style={{  width:'100%', height:60, paddingLeft:15, paddingRight:15 }}>
      <Button type="light" label={dialogue?.["d7"]?.[lang]} size={16} onPress={()=>handleIntroduction()} />
      </View>
    </View>);
 };

 return (<View style={{ flex:1, backgroundColor: bgs?.['voilet']}}>
    <View style={{ position:'absolute', right:15, top:15 }}>
      <Language value={lang} handleSelect={(option)=>setLang(option)} />
    </View>
    <Header title={dialogue?.["d1"]?.[lang]} color="voilet" lang={lang} />
    <View style={styles.subTitleView}>
        <Text style={styles.subTitle}>{dialogue?.["d2"]?.[lang]}</Text>
    </View>
    <BulletPoint text={dialogue?.["d3"]?.[lang]} />
    <BulletPoint text={dialogue?.["d4"]?.[lang]} />
    <BulletPoint text={dialogue?.["d5"]?.[lang]} />
    <BulletPoint text={dialogue?.["d6"]?.[lang]} />
    <SplashButton />
   {/*} <Text onPress={() => navigation.goBack()}>Back</Text>
    <Text>Hello World, {paramName}</Text> */}
 </View>);
};

const styles = StyleSheet.create({
 subTitleView:{ padding:20, width:'100%', alignItems:'center' },
 subTitle:{ color:'#fdf2d0', fontSize:16, lineHeight:24  }
});

export default Introduction;