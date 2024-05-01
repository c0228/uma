import React from "react";
import { View, Text, ScrollView, Button, PermissionsAndroid, StyleSheet } from "react-native";
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';

const MyLearnings = (props)=>{

    const requestCameraPermission = async () => {
        try {
         // const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
         const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
          } else {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      };

 return (<View style={MyLearningsStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={MyLearningsStyle.scrollView}>
 <Text>MyLearnings Page</Text>
 <Button title="Camera Permissions" onPress={requestCameraPermission} />
 </ScrollView>
 </View>);
};

const MyLearningsStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default MyLearnings;