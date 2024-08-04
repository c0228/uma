import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native';
import { Icon } from "e-ui-react-native";
import { TimeAgo } from '@AppUtils/DateTime.js';

const NotifyTile = ({ data })=>{
 const [notificationData, setNotificationData] = useState();
 useEffect(()=>{
  setNotificationData(data); // data called from API
 },[data]);
 const handleClose = (id) =>{
  const updatedData = notificationData.map(item => item.id === id ? { ...item, isHidden: true } : item);
  setNotificationData(updatedData);
  ToastAndroid.show('This Notification is hidden from Notification Timeline', ToastAndroid.LONG);
 };
 const Template = ({ templateData, backgroundColor })=>{
    return (<View style={[styles.notifyTileView, { backgroundColor: backgroundColor}]}>
        <View style={styles.row}>
          <View style={styles.notifyIconView}>
            {templateData?.type==='POSTED' && <Icon type="MaterialCommunityIcons" name="post-outline" size={46} color="#333" />}
            {templateData?.type==='MENTIONS' && <Icon type="Octicons" name="mention" size={32} color="#333" />}
            {templateData?.type==='COMMENTED' && <Icon type="MaterialCommunityIcons" name="comment-question" size={46} color="#333" />}
            {templateData?.type==='POLLED' && (<View style={{ paddingTop:5 }}>
                <Icon type="MaterialCommunityIcons" name="human-male-board-poll" size={44} color="#333" />
                </View>)}
            {templateData?.type==='PROGRESS' && <Icon type="Entypo" name="mobile" size={38} color="#333" />}
                
          </View>
          <View style={styles.notifyTextView}>
            <View style={styles.row}>
            <Text style={styles.notifiedBy}>{templateData?.notifiedBy} </Text>
            {templateData?.type==='POSTED' && (<Text style={styles.padTop2}>created a Question </Text>)}
            {templateData?.type==='MENTIONS' && (<Text style={styles.padTop2}>mentioned you </Text>)}
            {templateData?.type==='COMMENTED' && (<Text style={styles.padTop2}>commented </Text>)}
            {templateData?.type==='POLLED' && (<Text style={styles.padTop2}>created a Poll </Text>)}
            {templateData?.type==='PROGRESS' && (<Text style={styles.padTop2}>notifies you </Text>)}
            <Text style={[styles.textBold, styles.padTop2]}>:</Text>
            </View>
            <Text style={styles.lh22}>{templateData?.notification}</Text>
          </View>
          <View style={styles.notifyCloseView}>
            <TouchableOpacity onPress={()=>handleClose(templateData?.id)}>
                <Icon type="AntDesign" name="closecircle" size={18} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.timelineView}>
            <View style={styles.row}>
                <View style={styles.padTop2} >
                <Icon type="Feather" name="clock" size={12} color="#999" />
                </View>
                <Text style={styles.notifiedAt}>{TimeAgo(templateData?.notifiedAt)}</Text>
            </View>
        </View>
    </View>);
 };
 
 return (<View>
    {notificationData?.filter(d=>!d?.isHidden)?.map((d,i)=>{
      return (<Template key={i} templateData={d} backgroundColor={(i%2===0)?'#fcecff':'#fff'}/>);
    })}
 </View>);
    
};

const styles = StyleSheet.create({
 notifyTileView:{ padding:10, borderBottomWidth:1, borderTopWidth:1, borderColor: '#eee' },
 row:{ flexDirection:'row' },
 textBold:{ fontWeight:'bold' },
 padTop2:{ paddingTop:2 },
 lh22:{ lineHeight: 22 },
 notifyIconView:{ width:'15%', alignItems:'center', justifyContent:'center' },
 notifyTextView:{ width:'75%' },
 notifiedBy:{ lineHeight:22, fontWeight:'bold', color:'#555' },
 notifiedAt:{ paddingLeft:3, fontStyle:'italic', color:'#999', fontSize:12 },
 notifyCloseView:{ width:'10%', alignItems:'flex-end' },
 timelineView:{ alignItems:'flex-end', paddingRight:6 }
});

export default NotifyTile;