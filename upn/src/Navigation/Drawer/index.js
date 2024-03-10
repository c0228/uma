import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './content';
import { DrawerUserProfile, Icon } from 'e-ui-react-native';
import Home from './../../Pages/Home/index.js';
import Syllabus from './../../Pages/Syllabus/index.js';

const Drawer = createDrawerNavigator();

export const HamburgerIcon = (props)=>{
 return (<TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer(); }} >
 <View style={{ padding:15 }}>
   <Icon type="Feather" name="menu" color="#777" size={22} />
 </View>
</TouchableOpacity>);
};

const drawerInfo = { 
  user:{ displayName:"Anup Chakravarthi",
         image:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Prime_Minister_Modi_in_July_2021.jpg", 
         accountType:"Badge Title"
         // shortDesc:"Location, Locality, State, Country - 501510"
       },
  menu:[{
    icon:{ type:"FontAwesome5", name:"home", color: "#777", size: 16 }, 
    label:{ name: "Home", color: "#777", size: 13 },
    component: Home
},
{
  icon:{ type:"FontAwesome5", name:"university", color: "#777", size: 18 }, 
  label:{ name: "About UPSC and its Exams", color: "#777", size: 13 },
  component: Syllabus
},{
    icon:{ type:"MaterialIcons", name:"travel-explore", color: "#777", size: 18 }, 
    label:{ name: "Explore My Exam Syllabus", color: "#777", size: 13 },
    component: Syllabus
}]
};

export const DrawerNavigation =()=> {
  return (
    <Drawer.Navigator initialRouteName="Home" 
      drawerContent={props=><DrawerContent drawerInfo={drawerInfo} {...props}/>}
      drawerStyle={{
        backgroundColor: '#eee',
        width: 240,
      }}
      screenOptions={{ 
        headerShown: false, 
        activeTintColor:'#000', 
        activeBackgroundColor:'#eee'
      }}
      >
        {drawerInfo.menu.map((drawer)=>{
          return <Drawer.Screen key={drawer?.label?.name} name={drawer?.label?.name} component={drawer?.component} />
        })}
    </Drawer.Navigator>
  );
};