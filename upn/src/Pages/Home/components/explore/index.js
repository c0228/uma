import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import ExamTarget from './components/ExamTarget/index.js';

const Explore = (props)=>{
 return (<View style={ExploreStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={ExploreStyle.scrollView}>
 <Text>Explore Page</Text>
 <ExamTarget />
 </ScrollView>
 </View>);
};

const ExploreStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default Explore;