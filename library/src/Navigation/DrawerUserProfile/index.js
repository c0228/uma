import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Title } from 'react-native-paper';

export const DrawerUserProfile = ({ image, displayName, accountType })=>{
    return (<View style={DrawerUserProfileStyle.section}>
            <View style={DrawerUserProfileStyle.image}>
                {image && <Avatar.Image 
                    source={{uri: image }} 
                    size={50} />}
            </View>
            <View style={DrawerUserProfileStyle.info}>
                {displayName && <Title style={DrawerUserProfileStyle.title}>{displayName}</Title>}
                {accountType && <Text style={DrawerUserProfileStyle.type}>{accountType}</Text>}
            </View>
    </View>);
};

const DrawerUserProfileStyle = StyleSheet.create({ 
 section: { paddingLeft:20, paddingBottom:8, flexDirection:'row' },
 image: { marginTop:8, marginBottom:10 },
 info: {marginLeft:15, marginTop:1, flexDirection:'column'},
 title:{ fontSize:16, marginTop:3, fontWeight:'bold' },
 type:{ fontWeight:'bold',alignSelf: 'flex-start',borderRadius:4, paddingLeft:8,paddingRight:8, 
    paddingTop:5,paddingBottom:5,backgroundColor:'#b50541', color:'#fff',fontSize:12,lineHeight:14 },
});
