import React from 'react';
import { View, Text } from 'react-native';
import { DrawerHeader } from '@AppPage/Main/Drawer/index.js';

const MyLearnings = () =>{
 return (<View>
    <DrawerHeader>
      <Text style={{ fontSize:16, fontWeight:'bold' }}>My Learnings</Text>
    </DrawerHeader>
 </View>);
};

export default MyLearnings;