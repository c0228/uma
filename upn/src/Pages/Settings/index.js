import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../Navigation/Drawer/index.js';

const Settings = (props)=>{
    return (<View>
      <HamburgerIcon {...props}/>
      <Text>Settings</Text>
      </View>);
   };

const HomeStyle = StyleSheet.create({ 
   
});

export default Settings;