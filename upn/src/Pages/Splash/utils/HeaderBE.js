import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '@Assets/img/logo-default.png';

const HeaderBE = ({ formSize, activeForm }) =>{
 return (<View>
 <View style={{ flexDirection:'row', marginTop:10, marginBottom:10, marginLeft:10, marginRight:10 }}>
 <View style={{ width:'52%', padding:10, justifyContent:'center' }}>
     <Image style={{ width:150, height:16, marginTop:3 }} source={Logo} />
 </View>
 <View style={{ width:'48%',  borderLeftWidth:2, borderLeftColor:'#000', padding:10 }}>
     <Text style={{ textAlign:'center', lineHeight:20, fontWeight:'bold', color:'#000', letterSpacing:0.3 }}>FOR YOUR BETTER EXPERIENCE</Text>
 </View>
</View>
<View style={styles.flexContainer}>
    {Array.from({ length: formSize })?.map((_,index)=>{
        return (<View key={index} style={[styles.flexItem,{ backgroundColor: (index===activeForm)?'tomato':'#ccc' }]}></View>);
    })}
</View>
</View>);
};

const styles = StyleSheet.create({
  flexContainer:{ display:'flex', flexDirection:'row', paddingLeft:10, paddingRight:10, marginBottom:10 },
  flexItem: { flexGrow:1, margin:10, height:4, borderRadius:8 }
});

export default HeaderBE;