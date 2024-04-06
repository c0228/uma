import React from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../Navigation/Drawer/index.js';

const Home = (props)=>{
    return (<View>
      <HamburgerIcon {...props}/>
      <ScrollView style={{ paddingLeft:15, paddingRight: 15 }}> 
       <Text>Home</Text>
      </ScrollView>
      </View>);
   };

const HomeStyle = StyleSheet.create({ 
   
});

export default Home;