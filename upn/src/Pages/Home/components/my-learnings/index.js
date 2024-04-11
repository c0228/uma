import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';

const MyLearnings = (props)=>{
 return (<View style={MyLearningsStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={MyLearningsStyle.scrollView}>
 <Text>MyLearnings Page</Text>
 </ScrollView>
 </View>);
};

const MyLearningsStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default MyLearnings;