import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Listing from './components/Listing/index.js';
import Answers from './components/Answers/index.js';

const Stack = createStackNavigator();

const Discussion = () =>{
 
 return (
    <Stack.Navigator>
    <Stack.Screen name="SS_Discussion_Listing" component={Listing} options={{ headerShown: false }} />
    <Stack.Screen name="SS_Discussion_Answers" component={Answers} options={{ headerShown: false }}  />
     </Stack.Navigator>);
};

export default Discussion;