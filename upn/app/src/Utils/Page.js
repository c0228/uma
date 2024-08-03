import React, { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { DrawerHeader } from '@AppPage/Main/Drawer/index.js';

const Page = ({ title, backgroundColor, children }) =>{
 return (<View style={[styles.pageView,{ backgroundColor: backgroundColor }]}>
    <StatusBar animated={true} backgroundColor="#000" />
    <View>
      <DrawerHeader>
        <Text style={styles.pageTitle}>{title}</Text>
      </DrawerHeader>
    </View>
    <View style={styles.pageContentView}>
      {children}
    </View>
 </View>);
};

const styles = StyleSheet.create({
 pageView:{ display:'flex', flex:1 },
 pageTitle:{ color:'#fff', paddingTop:4, fontSize:16, fontWeight:'bold' },
 pageContentView:{ flex:1, backgroundColor:'#fff', borderColor:'#fff', borderWidth:1, borderTopLeftRadius:45, borderTopRightRadius:45 },
});
  
export default Page;