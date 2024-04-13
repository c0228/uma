import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { DrawerNavigation } from 'src/Navigation/Drawer/index.js';
import { HelloWorld } from 'e-ui-react-native';

const Drawer = createDrawerNavigator();

const Home = ({ navigation })=>{
 return (<View><Text>Hello</Text></View>);
};

const App = ()=>{
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
