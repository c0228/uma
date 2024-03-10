import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../Navigation/Drawer/index.js';

const Syllabus = (props)=>{
    return (<View>
      <HamburgerIcon {...props}/>
      <Text>Syllabus</Text>
      </View>);
   };

const SyllabusStyle = StyleSheet.create({ 
   
});

export default Syllabus;