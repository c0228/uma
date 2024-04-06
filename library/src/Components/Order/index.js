import React from "react";
import { View, Text } from "react-native";

export const Order = (props)=>{
 return (<View style={props.style}>{props.children}</View>);
}

export const Li = (props)=>{
 return (<View style={{ flex:1, flexDirection:'row' }}>
    <View style={{ width:'5%', alignItems:'center' }}>
        <Text>-</Text>
    </View>
    <View style={{ width:'95%' }}>
        <Text style={props.style}>{props.children}</Text>
    </View>
 </View>);
};
