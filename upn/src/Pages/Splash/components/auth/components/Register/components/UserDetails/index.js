import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getAppContext } from '@AdvancedTopics/ReactContext/index.js';

const UserDetails = () =>{
 const { setContextData } = getAppContext();
 return (<View>
    <TouchableOpacity onPress={()=>setContextData({ displayScreen: 'EMAIL_VALIDATE' })}>
    <Text>UserDetails</Text>
    </TouchableOpacity>
 </View>);
};

export default UserDetails;