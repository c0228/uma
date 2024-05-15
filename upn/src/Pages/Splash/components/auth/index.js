import React from 'react';
import { View, Text, Image } from 'react-native';
import { HorizontalStaticMenu } from '@AppComponent/HorizontalStaticMenu/index.js';
import Logo from '@Assets/img/logo-default.png';
import Register from './components/Register/index.js';
import Login from './components/Login/index.js';

const MenuListData = [{ id:'register', label:'Register', component: <Register /> },
                     { id:'login', label:'Login', component:(<Login />) }];

const Auth = () =>{
 return (<View style={{ flex:1, backgroundColor:'#fff' }}>
      <View style={{ padding:20, alignItems:'center' }}>
         <Image style={{ width:160, height:18, marginLeft:8, marginTop:3 }} source={Logo} />
      </View>
      <HorizontalStaticMenu activeId="register" data={MenuListData} />
 </View>);
};

export default Auth;