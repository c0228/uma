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

const TabData = [
{ 
      id:'MM_Home|Home_Notifications', 
      icon:{ name:"bell-o", type:"FontAwesome", color:"#6b046b" }, 
      focusedIcon:{ name:"bell", type:"FontAwesome", color:"#ccc" },
      label: { name: "Notifications" }, 
      component: Notifications 
},
{  
  id:'MM_Home|Home_Explore', 
  icon:{ name:"explore", type:"MaterialIcons", color:"#df0d55" }, 
  focusedIcon:{ name:"explore", type:"MaterialIcons", color:"#ccc" }, 
  label: { name: "Explore" }, 
  component: Explore  
},
{  
  id:'MM_Home|Home_MyLearnings', 
  icon:{ name:"journal-whills", type:"", color:"#eb3a02" }, 
  focusedIcon:{ name:"book-open", type:"", color:"#ccc" }, 
  label: { name: "My Learnings" }, 
  component: MyLearnings 
},
{  
  id:'MM_Home|Home_MyProgess', 
  icon:{ name:"award", type:"FontAwesome5", color:"#0e7512" }, 
  focusedIcon:{ name:"award", type:"FontAwesome5", color:"#ccc" }, 
  label: { name: "My Progress" }, 
  component: MyProgress 
},
{  
  id:'MM_Home|Home_DiscussionForum', 
  icon:{ name:"comment-o", type:"FontAwesome", color:"#044375" }, 
  focusedIcon:{ name:"comments-o", type:"FontAwesome", color:"#ccc" }, 
  label: { name: "Discussion Forum" }, 
  component: Discussion 
}];

const Home = (props)=>{
   return (<TabNavigation data={TabData} initialRouteName={TabData?.[1]?.id} />);
}

export default Home;