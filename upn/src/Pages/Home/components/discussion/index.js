import React, { useState, useEffect, useMemo } from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, useWindowDimensions } from "react-native";
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import RenderHtml from 'react-native-render-html';
import HtmlData from './index.html';

const Discussion = (props)=>{
 
 return (<View style={DiscussionStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={DiscussionStyle.scrollView}>
 <Text>Discussion Page</Text>
 <Text>{HtmlData}</Text>
 </ScrollView>
 </View>);
};

const DiscussionStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default Discussion;