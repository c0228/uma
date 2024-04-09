import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HamburgerIcon } from './../../../../Navigation/Drawer/index.js';

const Discussion = (props)=>{
 return (<View style={DiscussionStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={DiscussionStyle.scrollView}>
 <Text>Discussion Page</Text>
 </ScrollView>
 </View>);
};

const DiscussionStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default Discussion;