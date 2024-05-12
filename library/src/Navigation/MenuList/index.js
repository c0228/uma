import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from './../../Components/Icon/index.js';
/*
Usage:
<MenuList fixBottom={true} items={[{
    icon:{ type:"MaterialCommunityIcons", name:"exit-to-app", color: "#777", size: 18 }, label:"Signout"
}]} />
*/
export const MenuList = (props)=>{
    return (<View style={MenuListStyle.menu}>
        {props.items?.map((item, index)=>{
            return (<View  key={index} style={{ flexDirection:'row' }}>
                <TouchableOpacity onPress={()=>{
                    console.log("Selected: ", item?.id);
                    props?.navigation?.navigate(item?.id);
                }}>
                    <View style={MenuListStyle.menuItem}>
                    <Icon type={item?.icon?.type} 
                        name={item?.icon?.name} 
                        color={item?.icon?.color} 
                        size={item?.icon?.size} />
                    <Text style={[MenuListStyle.text,
                        { color:item?.label?.color, 
                          fontSize: item?.label?.size}]}>{item?.label?.name}</Text>
                    </View>
                </TouchableOpacity>
                </View>);
        })}
    </View>);
};

const MenuListStyle = StyleSheet.create({ 
 menu:{ borderTopColor:'#f4f4f4',borderTopWidth:1, borderBottomColor:'#f4f4f4',borderBottomWidth:1, paddingLeft:15, paddingBottom: 15 },
 menuItem:{ paddingTop:12, flexDirection:'row' },
 icon:{ paddingTop:1 },
 text: { paddingLeft:5, fontWeight: '600', letterSpacing: 0.3 }
});
