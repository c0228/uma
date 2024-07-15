import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HierarchyBadge = ({ subject, topic, subTopic }) =>{
 return (<View style={styles.badgeView}>
 <Text style={styles.badge}>{subject}</Text>
 <Ionicons name="caret-forward" size={24} color="#777" />
 <Text style={styles.badge}>{topic}</Text>
 <Ionicons name="caret-forward" size={24} color="#777" />
 <Text style={styles.badge}>{subTopic}</Text>
</View>);
};

export const UserDisplay = ({ img, name, status })=>{
 return (<View style={styles.row}>
 <View>
 <Image source={{ uri: img }} style={styles.profilePic} />
 </View>
 <View style={styles.userDisplay}>
     <Text style={styles.userName}>{name}</Text>
     <Text style={styles.status}>{status}</Text>
 </View>
 </View>);
};

const styles = StyleSheet.create({
 badgeView: { flexDirection:'row', padding:5, flexWrap:'wrap' },
 badge: { marginTop:2,marginBottom:2, fontSize:12, color:'#999', paddingTop:2, paddingBottom:2,  paddingLeft:5, 
    paddingRight:5, borderWidth:1, borderColor:'#999', borderRadius:8 },
row: { flexDirection: 'row' },
profilePic:{ borderRadius: 50, width: 40, height: 40 },
userDisplay:{ marginLeft:10 },
userName:{ fontWeight:'bold', fontSize:14 },
status:{ fontSize:12, color:'#aaa' }
});
