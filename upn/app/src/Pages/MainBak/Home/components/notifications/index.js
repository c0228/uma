import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { useWindowDimensions } from 'react-native';
import { Email } from '@AppFormElement/Email/index.js';
import { Select } from '@AppFormElement/Select/index.js';
import { Form } from '@AppFormElement/Form/index.js';
import { Button } from '@AppFormElement/Button/index.js';
import { InputGroup } from '@AppFormElement/InputGroup/index.js';
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
              size: 14
            }} 
            onSubmit={(form, isValidForm)=>{
              console.log("Form Result:", form);
            }}>
      <View style={{ marginBottom: 10 }}>
        <Select name="language" 
              label="Language" 
              placeholder="Select your Language" 
              value={[]} 
              options={[{ id: 'en', label: 'English', value: 'en' },
                        { id: 'hi', label: 'Hindi', value: 'hi' }]} 
              onSelect={handleSelect} 
              multipleSelect={true} />
      </View>
      <View  style={{ marginBottom: 10 }}>
        <Email name="em" 
        value="abc"  
        /*validation={{
        email:{
           // formatCheck: true,
            isEmailExist:{ 
                // If Email Already Exists, Returns 'EXIST'
                // If Email not exists, Returns 'NOT_EXIST'
                url:"http://upn.nellutlalnrao.com/",
                method:"",
                value:"NOT_EXIST", // When Value not matches - throws Error Message
                errorMessage:""
            }
        }
    }} */

    />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="primary" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="success" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="danger" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="warning" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="info" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="dark" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="light" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-primary" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-secondary" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-success" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-danger" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-warning" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-info" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-dark" size={14}>Test</Button>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-light" size={14}>Test</Button>
      </View>
    </Form>
 </ScrollView>
 </View>);
};

const NotifyStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default Notifications;