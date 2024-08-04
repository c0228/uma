import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Page from '@AppUtils/Page.js';

const Explore = () =>{
  return (<Page backgroundColor="#df0d55" title="Explore">
    <ScrollView style={styles.scrollViewPage}>
      <View style={{  paddingLeft:15, paddingTop:15 }}>
        <Text>Hello</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection:'row' }}>
          <Text style={{ margin:5, padding:15, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>Hello1</Text>
          <Text style={{ margin:5, padding:15, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>Hello1</Text>
          <Text style={{ margin:5, padding:15, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>Hello1</Text>
          <Text style={{ margin:5, padding:15, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>Hello1</Text>
          <Text style={{ margin:5, padding:15, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>Hello1</Text>
          <Text style={{ margin:5, padding:15, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>Hello1</Text>
          <Text style={{ margin:5, padding:15, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>Hello1</Text>
          <Text style={{ margin:5, padding:15, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>Hello1</Text>
          <Text style={{ margin:5, padding:15, borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>Hello1</Text>
        </View>
      </ScrollView>
    </ScrollView>
  </Page>);
};

const styles = StyleSheet.create({
  scrollViewPage:{ paddingLeft:10, paddingRight:10 }
});

export default Explore;