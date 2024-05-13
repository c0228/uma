import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from './../../utils/Header.js';
import Language from './../../utils/Language.js';
import { bgs, dialogue } from './../../static-data/dialogue.js';
import { Button } from '@AppFormElement/Button/index.js';

const Storage = ({ route }) =>{
 const [lang, setLang] = useState(route?.params?.language || 'en');

 useEffect(()=>{
   if(route?.params?.language){ 
     setLang( route?.params?.language );
   }
 },[route?.params]);

 const navigation = useNavigation();
 const BackButton = () =>{
  return (
  <View style={{  position:'absolute', marginLeft:10, marginTop:18 }}>
        <TouchableOpacity onPress={() => navigation?.navigate('SS_Notifications', { language: lang })}>
            <View style={{ flexDirection:'row', padding:8, borderWidth:1, borderColor:'#fff', borderRadius:8 }} >
                <FontAwesome5 name="arrow-left" size={12} color="#fff" style={{ marginTop:2,marginRight:5 }} />
                <Text style={{ color:'#fff', fontSize: 13, fontWeight:'bold' }}>{dialogue?.["d12"]?.[lang]}</Text>  
            </View>
         </TouchableOpacity>    
  </View>);
 };
 const handleNotification = () =>{
    navigation.navigate('SS_Authentication',{ language: lang });
 };
 const SplashButton = ()=>{
    return (<View style={{ flex:1, justifyContent:'flex-end', alignItems:'center' }}>
    <View style={{ width:'100%', height:60, paddingLeft:15, paddingRight:15 }}>
    <Button type="light" label={dialogue?.["d17"]?.[lang]}
    icon={{ type:'FontAwesome6', label:"floppy-disk", size: 24, style:{ marginTop:8, color: '#000' } }}
    size={16} onPress={()=>handleNotification(navigation)} />
    </View>
  </View>);
 };
 return (<View style={{ flex:1, backgroundColor: bgs?.['blue']}}>
    <BackButton />
 <View style={{ position:'absolute', right:15, top:15 }}>
   <Language value={lang} handleSelect={(option)=>setLang(option)} />
 </View>
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
 subTitleView:{ paddingTop:30, width:'100%', alignItems:'center' },
 subTitle:{ color:'#fdf2d0', fontSize:15, fontWeight:'bold', lineHeight:24, textTransform:'uppercase'  },
 descView:{ padding:20, width:'100%' },
 desc:{ color:'#fff', fontSize:16, lineHeight:24  },
});

export default Storage;