import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';

const PrevQP = (props)=>{
    return (<View>
      <HamburgerIcon {...props}/>
      <Text>Home</Text>
      </View>);
   };

const HomeStyle = StyleSheet.create({ 
   
});

export default PrevQP;