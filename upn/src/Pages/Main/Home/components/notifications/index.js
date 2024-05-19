import React from 'react';
import { View, Text } from 'react-native';
import { DrawerHeader } from '@AppPage/Main/Drawer/index.js';

const Notifications = () =>{
 return (<View>
    <DrawerHeader>
      <Text style={{ fontSize:16, fontWeight:'bold' }}>Notifications</Text>
    </DrawerHeader>
 </View>);
};

export default Notifications;