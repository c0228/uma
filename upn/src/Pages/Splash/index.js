import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Introduction from './components/intro/index.js';
import Notify from './components/notify/index.js';
import Storage from './components/store/index.js';
import Auth from './components/auth/index.js';

const bgs = {
    "blue": "#31338f",
    "voilet": "#890e2a",
    "indigo": "#4a3a02",
    "green": "#115300"
};

const Stack = createStackNavigator();

const Splash = () =>{
 return (<NavigationContainer>
 <Stack.Navigator>
    <Stack.Screen name="SS_Introduction" component={Introduction}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Notifications" component={Notify}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Storage" component={Storage}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Authentication" component={Auth} options={{ headerShown: false }} />
  </Stack.Navigator>
  </NavigationContainer>);
};

export default Splash;