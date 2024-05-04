import React from "react";
import { View, Text, ScrollView, Button, PermissionsAndroid, StyleSheet } from "react-native";
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import notifee from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';

const MyLearnings = (props)=>{
  const navigation = useNavigation();
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

      async function onDisplayNotification() {
        
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default3',
          name: 'Default Channel',
        });
    
        // Display a notification
        await notifee.displayNotification({
          id:'123',
          title: 'Notification Title',
          body: 'Main body content of the notification',
          android: {
            channelId,
            showTimestamp: true,
           // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
              id: 'default3',
              mainComponent:'MM_AboutUPSC|About_Syllabus',
            },
          },
        }); 

      }

 return (<View style={MyLearningsStyle.pageView}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={MyLearningsStyle.scrollView}>
 <Text>MyLearnings Page</Text>
 <Button title="Camera Permissions" onPress={requestCameraPermission} />
 <Button title="Display Notification" onPress={() => onDisplayNotification()} />
 </ScrollView>
 </View>);
};

const MyLearningsStyle = StyleSheet.create({ 
 pageView: {  flex:1, backgroundColor:'#fff' },
 scrollView: { paddingLeft:15, paddingRight: 15 }
});

export default MyLearnings;