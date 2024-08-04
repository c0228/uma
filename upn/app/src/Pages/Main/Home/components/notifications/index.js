import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Page from '@AppUtils/Page.js';
import NotifyTile from './tile.js';

const data = [{ 
  id: 1,
  type: 'POSTED', 
  notifiedBy:'Nellutla L N Rao',
  notification: 'Celebrate Friendships Days by giving ',
  notifiedAt:'2024-08-04 16:18:12',
  isHidden: false
},{ 
  id: 2,
  type: 'MENTIONS', 
  notifiedBy:'Nellutla Laxmi ...',
  notification: 'Celebrate Friendships Days by giving ',
  notifiedAt:'2024-08-04 16:18:12',
  isHidden: false
},{ 
  id: 3,
  type: 'COMMENTED', 
  notifiedBy:'Disney+ Hotstar',
  notification: 'Celebrate Friendships Days by giving ',
  notifiedAt:'2024-08-04 16:18:12',
  isHidden: false
},{ 
  id: 4,
  type: 'POLLED', 
  notifiedBy:'Disney+ Hotstar',
  notification: 'Celebrate Friendships Days by giving ',
  notifiedAt:'2024-08-04 16:18:12',
  isHidden: false
},{ 
  id: 5,
  type: 'PROGRESS', 
  notifiedBy:'UPSCPrepNetwork',
  notification: 'Celebrate Friendships Days by giving ',
  notifiedAt:'2024-08-04 16:18:12',
  isHidden: false
},{ 
  id: 6,
  type: 'POSTED', 
  notifiedBy:'You',
  notification: 'Celebrate Friendships Days by giving ',
  notifiedAt:'2024-08-04 16:18:12',
  isHidden: false
},{ 
  id: 7,
  type: 'POLLED', 
  notifiedBy:'You',
  notification: 'Celebrate Friendships Days by giving ',
  notifiedAt:'2024-08-04 16:18:12',
  isHidden: false
}];

const Notifications = () =>{
  const [notificationData, setNotificationData] = useState();
  const [tagState, setTagState] = useState();
  useEffect(()=>{
    setTagState('ALL');
    setNotificationData(data); 
  },[]);
  const handleTagPress = (id)=>{
    let updatedData = [...data];
    if(id==='MENTIONS'){ updatedData = data?.filter(d=>d?.type==='MENTIONS'); }
    if(id==='MY_POSTS'){ updatedData = data?.filter(d=>d?.notifiedBy==='You'); }
    setTagState(id);
    setNotificationData(updatedData);
  };
  const Tag = ({ id, label })=>{
    return (<TouchableOpacity onPress={()=>handleTagPress(id)}>
    <View style={styles.flexWrap}>
      <Text style={[styles.tagText, (tagState===id)?styles.activeTag:styles.inActiveTag]}>{label}</Text>
    </View>
    </TouchableOpacity>);
  };
  return (<Page backgroundColor="#6b046b" title="Notifications">
      <View style={styles.tagView}>
        <Tag id="ALL" label="All" />
        <Tag id="MENTIONS" label="Mentions" />
        <Tag id="MY_POSTS" label="My Posts" />
      </View>
      <ScrollView style={styles.pageScrollView}>
        {notificationData && <NotifyTile data={notificationData} />}
      </ScrollView>
  </Page>);
};

const styles = StyleSheet.create({
 pageScrollView:{ marginTop:5 },
 flexWrap:{ flexWrap: 'wrap' },
 tagView:{ width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center', 
  paddingTop:10, paddingLeft: 15, paddingRight: 15 },
 tagText:{margin:5, borderWidth:1, paddingLeft:8, paddingRight:8, paddingTop:5, paddingBottom:5, 
  borderRadius:6, fontWeight:'bold', fontSize:12 },
 activeTag:{ borderColor:'#6b046b', color:'#fff', backgroundColor:'#6b046b' },
 inActiveTag:{ borderColor:'#555', color:'#555', backgroundColor:'transparent' }
});

export default Notifications;