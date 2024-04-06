import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../Navigation/Drawer/index.js';

const StudyTT = (props)=>{
    return (<View>
      <HamburgerIcon {...props}/>
      <Text>StudyTT</Text>
      </View>);
   };

const HomeStyle = StyleSheet.create({ 
   
});

export default StudyTT;