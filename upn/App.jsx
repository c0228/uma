import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { LogBox } from 'react-native';
// import messaging from '@react-native-firebase/messaging';

import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import SplashScreen from '@AppPage/Splash/index.js';
// Temporary Fix: Ignore warnings containing the word "defaultProps"
LogBox.ignoreLogs([/defaultProps/]);

const App = ()=>{
 
 /* useEffect(() => {

    // Calls to it New Token is assigned
    messaging().onTokenRefresh(token => {
      console.log("Refreshed Token: ", token);
      // Add the Token to Database
    });

    // Get the current device token
    messaging().getToken().then(token => {
        console.log("Generated Token:", token);
    });
    
  },[]); */

  return (<SplashScreen />);
 
};

export default App;
