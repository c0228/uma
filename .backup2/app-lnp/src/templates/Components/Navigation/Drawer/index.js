import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './content';
import { Page1Screen } from "@AppPage/Page1.js";
import { ImageUpload } from "@AppFormElement/FileUpload/index.js";
import { HomeScreen } from '@AppPage/HomeScreen';

const Drawer = createDrawerNavigator();

const drawerInfo = { 
  user:{ displayName:"Anup Chakravarthi",
         image:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Prime_Minister_Modi_in_July_2021.jpg", 
         accountType:"Party Leader",
         shortDesc:"Location, Locality, State, Country - 501510"
       },
  menu:[{ name:'Home', icon:'home-outline', label:'Basic Components', component: Page1Screen },
        { name:'Drawer2', icon:'account-outline', label:'Image File Uploader',  component: ImageUpload },
        { name:'Drawer3', icon:'account-outline', label:'QR Code Reader', component: HomeScreen }]};

export const DrawerNavigation =()=> {
  return (
    <Drawer.Navigator initialRouteName="Home" 
      drawerContent={props=><DrawerContent drawerInfo={drawerInfo} {...props}/>}
      drawerStyle={{
        backgroundColor: '#eee',
        width: 240,
      }}
      screenOptions={{ headerShown: false, activeTintColor:'#000',activeBackgroundColor:'#eee'}}
      >
        {drawerInfo.menu.map((drawer)=>{
          return <Drawer.Screen key={drawer.name} name={drawer.name} component={drawer.component} />
        })}
    </Drawer.Navigator>
  );
};