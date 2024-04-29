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
        <Button type="primary" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="success" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="danger" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="warning" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="info" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="dark" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="light" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-primary" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-secondary" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-success" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-danger" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-warning" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-info" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-dark" label="Test" size={14} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button type="outline-light" label="Test" size={14} />
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