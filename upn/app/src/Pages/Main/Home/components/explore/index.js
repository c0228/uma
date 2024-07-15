import React from 'react';
import { View, Text } from 'react-native';
import { DrawerHeader } from '@AppPage/Main/Drawer/index.js';

const Explore = () =>{
 return (<View>
    <DrawerHeader>
      <Text style={{ fontSize:16, fontWeight:'bold' }}>Explore</Text>
    </DrawerHeader>
 </View>);
};

export default Explore;