import React, { useEffect } from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { DrawerHeader } from '@AppPage/Main/Drawer/index.js';

const Explore = () =>{
 return (<View style={styles.pageView}>
  <StatusBar animated={true} backgroundColor="#000" />
  <View>
    <DrawerHeader>
      <Text style={styles.pageTitle}>Explore</Text>
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
 pageView:{ backgroundColor:'#df0d55', display:'flex', flex:1 },
 pageTitle:{ color:'#fff', paddingTop:4, fontSize:16, fontWeight:'bold' },
 pageContentView:{ flex:1, backgroundColor:'#fff', borderColor:'#fff', borderWidth:1, borderTopLeftRadius:25, borderTopRightRadius:25 },
 pageScrollView:{ padding:15 }
});

export default Explore;