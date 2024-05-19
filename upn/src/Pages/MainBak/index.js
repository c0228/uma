import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from '@AppNavigation/Drawer/index.js';
import NotificationHandler from '@AppComponent/NotificationHandler/index.js';

const Main = () =>{
 return (<View>
    <DrawerNavigation />
    <NotificationHandler />
 </View>);
};

export default Main;