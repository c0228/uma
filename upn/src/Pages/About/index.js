import React from "react";
import { View, Text, ScrollView , StyleSheet } from 'react-native';
import { TabNavigation } from './../../Navigation/Tab/index.js';
import { Order, Li } from "e-ui-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Aupsc from './components/aupsc/index.js';
import Calendar from './components/calendar/index.js';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabData = [{ icon:"vihara", focusedIcon: "vihara", name: "About", component: Aupsc },
{ icon:"calendar-alt", focusedIcon: "calendar-check", name: "Calendar", component: Calendar  },
{ icon:"journal-whills", focusedIcon: "book-open", name: "Syllabus", component: HomeScreen },
{ icon:"praying-hands", focusedIcon: "praying-hands", name: "Inspire", component: SettingsScreen }];

const About = (props)=>{
   return (<TabNavigation data={TabData} />);
}

export default About;