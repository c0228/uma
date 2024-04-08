import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './content';
import { DrawerUserProfile, Icon } from 'e-ui-react-native';
import Home from './../../Pages/Home/index.js';
import About from './../../Pages/About/index.js';
import Dashboard from './../../Pages/Dashboard/index.js';
import ExamDates from './../../Pages/ExamDates/index.js';
import PrevQP from './../../Pages/PrevQP/index.js';

const Drawer = createDrawerNavigator();

export const HamburgerIcon = (props)=>{
 return (<TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer(); }} >
 <View style={{ padding:15, flexDirection:'row' }}>
   <View>
     <Icon type="Feather" name="menu" color="#000" size={22} />
   </View>
   <View>
    <Image style={{ width:90, height:23, marginLeft:15 }} 
      source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcy_wwZqSNGR5WpInssvFyLxflB1v1f0atFNIfr-sq&s" }} />
   </View>
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
    icon:{ type:"FontAwesome5", name:"home", color: "#000", size: 16 }, 
    label:{id:'1',  name: "Home", color: "#000", size: 14 },
    component: Home
},{
    icon:{ type:"FontAwesome5", name:"university", color: "#000", size: 18 }, 
    label:{ id:'2', name: "About UPSC Examination", color: "#000", size: 14 },
    component: About
},{
  icon:{ type:"MaterialIcons", name:"travel-explore", color: "#000", size: 18 }, 
  label:{ id:'3', name: "Dashboard", color: "#000", size: 14 },
  component: Dashboard
},{
  icon:{ type:"MaterialIcons", name:"travel-explore", color: "#000", size: 18 }, 
  label:{ id:'4', name: "UPSC Exam Dates", color: "#000", size: 14 },
  component: ExamDates
},{
  icon:{ type:"MaterialIcons", name:"travel-explore", color: "#000", size: 18 }, 
  label:{ id:'5', name: "Previous Question Papers", color: "#000", size: 14 },
  component: PrevQP
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
        {drawerInfo.menu.map((drawer, index)=>{
          return <Drawer.Screen key={index} name={drawer?.label?.name} component={drawer?.component} />
        })}
    </Drawer.Navigator>
  );
};