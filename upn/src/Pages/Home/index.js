import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../Navigation/Drawer/index.js';

const Home = (props)=>{
    return (<View>
      <HamburgerIcon {...props}/>
      <Text>Home</Text>
      </View>);
   };

const HomeStyle = StyleSheet.create({ 
   
});

export default Home;