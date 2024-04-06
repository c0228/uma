import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../Navigation/Drawer/index.js';

const MyProfile = (props)=>{
    return (<View>
      <HamburgerIcon {...props}/>
      <Text>MyProfile</Text>
      </View>);
   };

const HomeStyle = StyleSheet.create({ 
   
});

export default MyProfile;