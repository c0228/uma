import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigation } from '@AppNavigation/Tab/index.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discussion from './components/discussion/index.js';
import Explore from './components/explore/index.js';
import MyLearnings from './components/my-learnings/index.js';
import MyProgress from './components/my-progress/index.js';
import Notifications from './components/notifications/index.js';

const Tab = createBottomTabNavigator();

const TabData = [{ 
  id:'MM_Home|Home_Notifications', 
  icon:{ name:"bell-o", type:"FontAwesome" }, 
  focusedIcon:{ name:"bell", type:"FontAwesome" }, 
  label: { name: "Notifications" }, 
  component: Notifications 
},
{  
  id:'MM_Home|Home_Explore', 
  icon:{ name:"explore", type:"MaterialIcons" }, 
  focusedIcon:{ name:"explore", type:"MaterialIcons" }, 
  label: { name: "Explore" }, 
  component: Explore  },
{  
  id:'MM_Home|Home_MyLearnings', 
  icon:{ name:"journal-whills", type:""}, 
  focusedIcon:{ name:"book-open", type:"" }, 
  label: { name: "My Learnings" }, 
  component: MyLearnings 
},
{  
  id:'MM_Home|Home_MyProgess', 
  icon:{ name:"award", type:"FontAwesome5" }, 
  focusedIcon:{ name:"award", type:"FontAwesome5" }, 
  label: { name: "My Progress" }, 
  component: MyProgress 
},
{  
  id:'MM_Home|Home_DiscussionForum', 
  icon:{ name:"comment-o", type:"FontAwesome" }, 
  focusedIcon:{ name:"comments-o", type:"FontAwesome" }, 
  label: { name: "Discussion Forum" }, 
  component: Discussion 
}];

const Home = (props)=>{
   return (<TabNavigation data={TabData} />);
}

export default Home;