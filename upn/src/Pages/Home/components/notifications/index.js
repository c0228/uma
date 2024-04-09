import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HamburgerIcon } from './../../../../Navigation/Drawer/index.js';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
    html: `
  <p style='text-align:center;background-color:orange;'>
    Hello World!
  </p>`
  };

const Notifications = (props)=>{
    const { width } = useWindowDimensions();
 return (<View style={NotifyStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={NotifyStyle.scrollView}>
 <Text>Notification Page</Text>
 <RenderHtml
      contentWidth={width}
      source={source}
    />
 </ScrollView>
 </View>);
};

const NotifyStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default Notifications;