import React from "react";
import { View, Text, ScrollView , StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../Navigation/Drawer/index.js';

const ExamDates = (props)=>{
    return (<View>
      <HamburgerIcon {...props}/>
      <ScrollView style={{ padding:15 }}>
         <Text style={{ fontSize:16, paddingBottom:6, fontWeight:'bold' }}>Dashboard</Text>
      </ScrollView>
      </View>);
   };

const SyllabusStyle = StyleSheet.create({ 
   
});

export default ExamDates;