import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ContextProvider } from 'e-ui-react-native';
import { Order, Li } from "e-ui-react-native";
import { Select } from '@AppFormElement/Select/index.js';
import { Button } from '@AppFormElement/Button/index.js';

const Intro = ({ lang, dialogue, handleIntroduction }) =>{
 
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

 const SplashButton = ()=>{
    return (<View style={{ flex:1, justifyContent:'flex-end', alignItems:'center' }}>
    <View style={{  width:'100%', height:60, paddingLeft:15, paddingRight:15 }}>
    <Button type="light" label={dialogue?.["d7"]?.[lang]} size={16} onPress={()=>handleIntroduction()} />
    </View>
  </View>);
 };

 return (<View style={{ flex:1 }}>
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
 subTitleView:{ padding:20, width:'100%', alignItems:'center' },
 subTitle:{ color:'#fdf2d0', fontSize:16, lineHeight:24  }
});

export default Intro;