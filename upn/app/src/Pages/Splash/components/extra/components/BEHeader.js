import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from '@AppFormElement/Button/index.js';
import LogoutButton from '@AppPage/Main/Logout/index.js';
import Logo from '@Assets/img/logo-default.png';

const BEHeader = ({ formSize, activeForm, name }) =>{
 const [signout, setSignout] = useState(false);
 return (<View>
 <View style={{ flexDirection:'row', marginTop:10, marginBottom:10, marginLeft:10, marginRight:10 }}>
 <View style={{ width:'52%', padding:10, justifyContent:'center' }}>
     <Image style={{ width:150, height:16, marginTop:3 }} source={Logo} />
 </View>
 <View style={{ width:'48%',  borderLeftWidth:2, borderLeftColor:'#000', padding:10 }}>
     <Text style={{ textAlign:'center', lineHeight:20, fontWeight:'bold', color:'#000', letterSpacing:0.3 }}>FOR YOUR BETTER EXPERIENCE</Text>
 </View>
</View>
<View style={{ flexDirection:'row', paddingLeft:20, paddingRight:20 }}>
    <View style={{ width:'70%', justifyContent:'flex-end' }}><Text style={{ color:'#000' }}>Hello {name},</Text></View>
    <View style={{  width:'30%', alignItems:'flex-end' }}>
        <Button type="outline-danger" size={12} onPress={()=>setSignout(true)}>Logout</Button>
    </View>
    {signout && (<LogoutButton />)}
</View>
<View style={{ flexDirection:'row', paddingTop:5, paddingLeft:20, paddingRight:20 }}>
    <Text style={{ lineHeight:22 }}>Please provide the following details to help tailor the service to your needs -</Text>
</View>
<View style={styles.flexContainer}>
    {Array.from({ length: formSize })?.map((_,index)=>{
        return (<View key={index} style={[styles.flexItem,{ backgroundColor: (index===activeForm)?'tomato':'#ccc' }]}></View>);
    })}
</View>
</View>);
};

export const HeaderTitle = ({ title, subTitle }) =>{
 return (<View>
    <Text style={styles.mainTitle}>{title}</Text>
    <Text style={styles.examTargetDesc}>{subTitle}</Text>
</View>);
};

const styles = StyleSheet.create({
    flexContainer:{ display:'flex', flexDirection:'row', paddingLeft:10, paddingRight:10, marginBottom:10 },
    flexItem: { flexGrow:1, margin:10, height:4, borderRadius:8 },
    mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22, textAlign: 'center' },
    examTargetDesc: { marginTop:5, marginBottom:2, fontStyle:'italic', lineHeight:22, paddingLeft:10, 
        paddingRight:10, color:'#777', textAlign:'center' },
});

export default BEHeader;