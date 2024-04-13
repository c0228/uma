import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { useWindowDimensions } from 'react-native';
import { Select } from '@AppFormElement/Select/index.js';
import { Form } from '@AppFormElement/Form/index.js';
import RenderHtml from 'react-native-render-html';

const source = {
    html: `
  <p style='text-align:center;background-color:orange;'>
    Hello World!
  </p>`
  };

const Notifications = (props)=>{

  const handleSelect = (option) => {
   console.log("handleSelect", option);
  };

    const { width } = useWindowDimensions();
 return (<View style={NotifyStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={NotifyStyle.scrollView}>
 <Text>Notification Page</Text>
 <Text style={{ fontSize: 18, fontWeight:'bold' }}>आप कैसे हैं?</Text>
 <RenderHtml
      contentWidth={width}
      source={source}
    />
    <Form name="forgotPwdForm" btnSubmit={{
              btnType:'primary',
              label:'Send Reset Password Link',
              size: 11
            }} 
            onSubmit={(form, isValidForm)=>{
              console.log("Form Result:", form);
            }}>
      <Select name="language" 
              label="Language" 
              placeholder="Select your Language" 
              value={["en"]} 
              options={[{ id: 'en', label: 'English', value: 'en' },
                        { id: 'hi', label: 'Hindi', value: 'hi' }]} 
              onSelect={handleSelect} 
              multipleSelect={true} />
    </Form>
 </ScrollView>
 </View>);
};

const NotifyStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default Notifications;