import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { DrawerNavigation } from 'src/Navigation/Drawer/index.js';
import NotificationHandler from '@AppComponent/NotificationHandler/index.js';

const Drawer = createDrawerNavigator();

const App = ()=>{
 
  useEffect(() => {

    // Calls to it New Token is assigned
    messaging().onTokenRefresh(token => {
      console.log("Refreshed Token:", token);
      // Add the Token to Database
    });

    // Get the current device token
    messaging().getToken().then(token => {
        console.log("Generated Token:", token);
    });
    
  });

  return (
    <NavigationContainer>
      <DrawerNavigation />
      <NotificationHandler />
    </NavigationContainer>
  );
};

export default App;
