import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export const Icon = ({ type, name, size, color })=>{
    return (<>
    {type==='AntDesign'&& (<AntDesign name={name} color={color} size={size} />)}
    {type==='Entypo'&& (<Entypo name={name} color={color} size={size} />)}
    {type==='EvilIcons'&& (<EvilIcons name={name} color={color} size={size} />)}
    {type==='Feather'&& (<Feather name={name} color={color} size={size} />)}
    {type==='FontAwesome'&& (<FontAwesome name={name} color={color} size={size} />)}
    {type==='FontAwesome5'&& (<FontAwesome5 name={name} color={color} size={size} />)}
    {type==='FontAwesome6'&& (<FontAwesome6 name={name} color={color} size={size} />)}
    {type==='Fontisto'&& (<Fontisto name={name} color={color} size={size} />)}
    {type==='Foundation'&& (<Foundation name={name} color={color} size={size} />)}
    {type==='Ionicons'&& (<Ionicons name={name} color={color} size={size} />)}
    {type==='MaterialCommunityIcons'&& (<MaterialCommunityIcons name={name} color={color} size={size} />)}
    {type==='MaterialIcons'&& (<MaterialIcons name={name} color={color} size={size} />)}
    {type==='Octicons'&& (<Octicons name={name} color={color} size={size} />)}
    {type==='SimpleLineIcons'&& (<SimpleLineIcons name={name} color={color} size={size} />)}
    {type==='Zocial'&& (<Zocial name={name} color={color} size={size} />)}
    </>);
};

