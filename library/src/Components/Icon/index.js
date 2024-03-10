import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Icon = ({ type, name, size, color })=>{
    return (<>
    {type==='MaterialCommunityIcons'?
     (<MaterialCommunityIcons name={name} color={color} size={size} />):(<></>)}
    </>);
};

