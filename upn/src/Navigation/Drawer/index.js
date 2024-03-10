import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './content';
import { DrawerUserProfile } from 'e-ui-react-native';


const Drawer = createDrawerNavigator();

const Home = (props)=>{
  return (<View>
    <TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer(); }} >
            <Text>Hello</Text>
        </TouchableOpacity>
        <DrawerUserProfile  image={''} displayName="Test" accountType="TestTitle" />
    </View>);
 };

 const Syllabus = (props)=>{
  return (<View>
    <TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer(); }} >
            <Text>Hello</Text>
        </TouchableOpacity>
    <Text>Syllabus</Text>
    </View>);
 };

const drawerInfo = { 
  user:{ displayName:"Anup Chakravarthi",
         image:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Prime_Minister_Modi_in_July_2021.jpg", 
         accountType:"Badge Title"
         // shortDesc:"Location, Locality, State, Country - 501510"
       },
  menu:[{
    icon:{ type:"MaterialCommunityIcons", name:"exit-to-app", color: "#777", size: 18 }, 
    label:{ name: "Home", color: "#777", size: 13 },
    component: Home
},{
    icon:{ type:"MaterialCommunityIcons", name:"exit-to-app", color: "#777", size: 18 }, 
    label:{ name: "Explore Syllabus", color: "#777", size: 13 },
    component: Syllabus
}]
};
 /* menu:[{ name:'Home', icon:'home-outline', label:'Basic Components', component: Home },
        { name:'Drawer2', icon:'account-outline', label:'Image File Uploader',  component: Syllabus },
        { name:'Drawer3', icon:'account-outline', label:'QR Code Reader', component: Home }]}; */

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