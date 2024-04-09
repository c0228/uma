import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HamburgerIcon } from './../../../../Navigation/Drawer/index.js';

const Notifications = (props)=>{
 return (<View style={NotifyStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={NotifyStyle.scrollView}>
 <Text>Notification Page</Text>
 </ScrollView>
 </View>);
};

const NotifyStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default Notifications;