import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { WeekDatesComponent } from './components/weekdays/index.js';

const MyProgress = (props)=>{
 return (<View style={MyProgressStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={MyProgressStyle.scrollView}>
   <Text style={[MyProgressStyle.mainTitle, MyProgressStyle.textCenter]}>My Progress for the Week</Text>
   <WeekDatesComponent />
 </ScrollView>
 </View>);
};

const MyProgressStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 },
 mainTitle: { fontSize:18, paddingBottom:15, fontWeight:'bold', color:'#000', lineHeight: 22 },
 textCenter: { textAlign: 'center' }
});

export default MyProgress;