import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, BackHandler } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DrawerHeader } from '@AppPage/Main/Drawer/index.js';

const Explore = () =>{
 const navigation = useNavigation();
 return (<View>
    <DrawerHeader>
      <Text style={{ fontSize:16, fontWeight:'bold' }}>Explore</Text>
    </DrawerHeader>
 </View>);
};

export default Explore;