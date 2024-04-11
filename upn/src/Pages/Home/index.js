import React from "react";
import { View, Text } from 'react-native';
import { TabNavigation } from '@AppNavigation/Tab/index.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discussion from './components/discussion/index.js';
import Explore from './components/explore/index.js';
import MyLearnings from './components/my-learnings/index.js';
import MyProgress from './components/my-progress/index.js';
import Notifications from './components/notifications/index.js';

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

const TabData = [{ icon:{ name:"bell-o", type:"FontAwesome" }, focusedIcon:{ name:"bell", type:"FontAwesome" }, name: "Notifications", component: Notifications },
{ icon:{ name:"explore", type:"MaterialIcons" }, focusedIcon:{ name:"explore", type:"MaterialIcons" }, name: "Explore", component: Explore  },
{ icon:{ name:"journal-whills", type:""}, focusedIcon:{ name:"book-open", type:"" }, name: "My Learnings", component: MyLearnings },
{ icon:{ name:"award", type:"FontAwesome5" }, focusedIcon:{ name:"award", type:"FontAwesome5" }, name: "My Progress", component: MyProgress },
{ icon:{ name:"comment-o", type:"FontAwesome" }, focusedIcon:{ name:"comments-o", type:"FontAwesome" }, name: "Discussion Forum", component: Discussion }
];

const Home = (props)=>{
   return (<TabNavigation data={TabData} />);
}

export default Home;