import React from "react";
import { View, Text, ScrollView , StyleSheet } from 'react-native';
import { TabNavigation } from '@AppNavigation/Tab/index.js';
import { Order, Li } from "e-ui-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Aupsc from './components/aupsc/index.js';
import Calendar from './components/calendar/index.js';
import Syllabus from './components/syllabus/index.js';
import Inspire from './components/inspire/index.js';

const Tab = createBottomTabNavigator();

const TabData = [{ 
  id:'About_Home', 
  icon:{ name:"vihara", type:"FontAwesome5" }, 
  focusedIcon:{ name:"vihara", type:"FontAwesome5" }, 
  label: { name: "About" }, 
  component: Aupsc 
},
{ 
  id:'About_Calendar', 
  icon:{ name:"calendar-alt", type:"FontAwesome5" }, 
  focusedIcon:{ name:"calendar-check", type:"FontAwesome5" }, 
  label: { name: "Calendar" }, 
  component: Calendar  
},
{ 
  id:'About_Syllabus', 
  icon:{ name:"journal-whills", type:"FontAwesome5" }, 
  focusedIcon:{ name:"book-open", type:"FontAwesome5" }, 
  label: { name: "Syllabus" }, 
  component: Syllabus 
},
{ 
  id:'About_Inspire', 
  icon:{ name:"praying-hands", type:"FontAwesome5" }, 
  focusedIcon:{ name:"praying-hands", type:"FontAwesome5" }, 
  label: { name: "Inspire" }, 
  component: Inspire 
}];

const About = (props)=>{
   return (<TabNavigation data={TabData} />);
}

export default About;