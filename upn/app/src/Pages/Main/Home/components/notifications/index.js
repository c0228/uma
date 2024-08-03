import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { DrawerHeader } from '@AppPage/Main/Drawer/index.js';

const Notifications = () =>{
  return (<View style={styles.pageView}>
    <View>
      <DrawerHeader>
        <Text style={styles.pageTitle}>Notifications</Text>
      </DrawerHeader>
    </View>
    <View style={styles.pageContentView}>
      <ScrollView style={styles.pageScrollView}>
        <Text>Test</Text>
      </ScrollView>
    </View>
   </View>);
};

const styles = StyleSheet.create({
  pageView:{ backgroundColor:'#6b046b', display:'flex', flex:1 },
  pageTitle:{ color:'#fff', paddingTop:4, fontSize:16, fontWeight:'bold' },
  pageContentView:{ flex:1, backgroundColor:'#fff', borderColor:'#fff', borderWidth:1, borderTopLeftRadius:25, borderTopRightRadius:25 },
  pageScrollView:{ padding:15 }
});

export default Notifications;