import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { DrawerHeader } from '@AppPage/Main/Drawer/index.js';
import Page from './../../page.js';

const Notifications = () =>{
  return (<Page backgroundColor="#6b046b" title="Notifications">
    <View>
      <Text>Notifications Test</Text>
    </View>
  </Page>);
};

const styles = StyleSheet.create({
 
});

export default Notifications;