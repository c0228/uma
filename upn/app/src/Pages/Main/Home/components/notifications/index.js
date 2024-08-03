import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Page from '@AppUtils/Page.js';

const Notifications = () =>{
  const [tagState, setTagState] = useState('ALL');
  const Tag = ({ id, label })=>{
    return (<TouchableOpacity onPress={()=>setTagState(id)}>
    <View style={{ flexWrap: 'wrap' }}>
      <Text style={[styles.tagText, (tagState===id)?styles.activeTag:styles.inActiveTag]}>{label}</Text>
    </View>
    </TouchableOpacity>);
  };
  return (<Page backgroundColor="#6b046b" title="Notifications">
    <ScrollView style={styles.pageScrollView}>
      <View style={{ width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
        <Tag id="ALL" label="All" />
        <Tag id="MENTIONS" label="Mentions" />
        <Tag ID="MY_POSTS" label="My Posts" />
      </View>
    </ScrollView>
  </Page>);
};

const styles = StyleSheet.create({
 pageScrollView:{ paddingTop:10, paddingLeft: 15, paddingRight: 15 },
 tagText:{margin:5, borderWidth:1, paddingLeft:8, paddingRight:8, paddingTop:5, paddingBottom:5, 
  borderRadius:6, fontWeight:'bold', fontSize:12 },
 activeTag:{ borderColor:'#6b046b', color:'#fff', backgroundColor:'#6b046b' },
 inActiveTag:{ borderColor:'#555', color:'#555', backgroundColor:'transparent' }
});

export default Notifications;