import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './content';
import { DrawerUserProfile, Icon } from 'e-ui-react-native';
import Home from '@AppPage/Main/Home/index.js';
import About from '@AppPage/Main/About/index.js';
import Dashboard from '@AppPage/Main/Dashboard/index.js';
import ExamDates from '@AppPage/Main/ExamDates/index.js';
import PrevQP from '@AppPage/Main/PrevQP/index.js';
import MyProfile from '@AppPage/Main/MyProfile/index.js';
import Settings from '@AppPage/Main/Settings/index.js';
import StudyTT from '@AppPage/Main/StudyTT/index.js';
import Logo from "@Assets/img/logo-default.png";
import { LogBox } from 'react-native';

// Temporary Fix: Ignore warnings containing the word "defaultProps"
LogBox.ignoreLogs([/defaultProps/]);

const Drawer = createDrawerNavigator();

export const HamburgerIcon = React.memo((props)=>{
 return (<TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer(); }} >
 <View style={{ padding:15, flexDirection:'row' }}>
   <View>
     <Icon type="Feather" name="menu" color="#000" size={22} />
   </View>
   <View>
    <Image style={{ width:160, height:18, marginLeft:8, marginTop:3 }} source={Logo} />
   </View>
 </View>
</TouchableOpacity>);
});

const drawerInfo = { 
  user:{ displayName:"Anup Chakravarthi",
         image:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Prime_Minister_Modi_in_July_2021.jpg", 
         accountType:"Badge Title"
         // shortDesc:"Location, Locality, State, Country - 501510"
       },
  menu:[{
    id:'MM_Home',
    icon:{ type:"FontAwesome5", name:"home", color: "#000", size: 16 }, 
    label:{ name: "Home", color: "#000", size: 14 },
    component: Home
},{
    id:'MM_AboutUPSC',
    icon:{ type:"FontAwesome5", name:"university", color: "#000", size: 18 }, 
    label:{ name: "About UPSC Examination", color: "#000", size: 14 },
    component: About
},{
  id:'MM_Dashboard',
  icon:{ type:"MaterialIcons", name:"travel-explore", color: "#000", size: 18 }, 
  label:{ name: "Dashboard", color: "#000", size: 14 },
  component: Dashboard
},{
  id:'MM_UPSCExamDates',
  icon:{ type:"MaterialIcons", name:"travel-explore", color: "#000", size: 18 }, 
  label:{ name: "UPSC Exam Dates", color: "#000", size: 14 },
  component: ExamDates
},{
  id:'MM_PrevQP',
  icon:{ type:"MaterialIcons", name:"travel-explore", color: "#000", size: 18 }, 
  label:{ name: "Previous Question Papers", color: "#000", size: 14 },
  component: PrevQP
}]
};

const bottomMenu = [{
  id:'MM_StudyTimeTable',
  icon:{ type:"FontAwesome5", name:"user-graduate", color: "#000", size: 17 }, 
  label:{ name: "Study Timetable", color: "#000", size: 14 },
  component: StudyTT
},{
  id:'MM_MyProfile',
  icon:{ type:"FontAwesome5", name:"user-check", color: "#000", size: 17 }, 
  label:{ name: "My Profile", color: "#000", size: 14 },
  component: MyProfile
},
{
  id:'MM_Settings',
  icon:{ type:"Ionicons", name:"settings", color: "#000", size: 18 }, 
  label:{ name: "Settings", color: "#000", size: 14 },
  component: Settings
},{
  id:'MM_Signout',
  icon:{ type:"MaterialCommunityIcons", name:"exit-to-app", color: "#000", size: 18 }, 
  label:{ name: "Signout", color: "#000", size: 14 },
  component: Settings
}];



export const DrawerNavigation =()=> {

  return (
    <Drawer.Navigator initialRouteName="Home" 
      drawerContent={props=><DrawerContent drawerInfo={drawerInfo} bottomMenu={bottomMenu} {...props}/>}
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
        {drawerInfo.menu?.concat(bottomMenu)?.map((drawer, index)=>{
          console.log("labelName: ", drawer?.id);
          return <Drawer.Screen key={index} name={drawer?.id} component={drawer?.component} />
        })}
    </Drawer.Navigator>
  );
};