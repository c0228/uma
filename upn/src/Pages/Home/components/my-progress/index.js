import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HamburgerIcon } from './../../../../Navigation/Drawer/index.js';

const MyProgress = (props)=>{
 return (<View style={MyProgressStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={MyProgressStyle.scrollView}>
 <Text>MyProgress Page</Text>
 </ScrollView>
 </View>);
};

const MyProgressStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default MyProgress;