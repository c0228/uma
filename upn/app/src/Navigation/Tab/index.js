import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator();

export const TabNavigation = ({ data, initialRouteName })=>{
   return (<Tab.Navigator initialRouteName={initialRouteName} screenOptions={({ route }) => ({
      headerShown: false,
      tabBarButton:(props) => (
        <TouchableOpacity style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={props?.onPress}>
    {props?.children}
  </TouchableOpacity>
      ),
      tabBarIcon: ({ focused }) => {
        const tabData = data?.filter((d)=>d?.id===route.name)[0];
        const iconType = tabData?.icon?.type;
        const iconName = tabData?.icon?.name;
        const activeColor = tabData?.icon?.color || '#df0d55';
        const focusedIconType = tabData?.focusedIcon?.type;
        const focusedIconName = tabData?.focusedIcon?.name;
        const inActiveColor = tabData?.focusedIcon?.color || '#ccc';
        const icon = focused?(focusedIconName):(iconName);
        const color = focused?activeColor:inActiveColor;
        
        if(iconType==='AntDesign' || focusedIconType==='AntDesign' ){
            return (<AntDesign name={icon} size={24} color={color} />);
        } else if(iconType==='Entypo' || focusedIconType==='Entypo'){
            return (<Entypo name={icon} size={24} color={color} />);
        } else if(iconType==='EvilIcons' || focusedIconType==='EvilIcons'){
            return (<EvilIcons name={icon} size={24} color={color} />);
        } else if(iconType==='Feather' || focusedIconType==='Feather'){
            return (<Feather name={icon} size={24} color={color} />);
        } else if(iconType==='FontAwesome' || focusedIconType==='FontAwesome'){
            return (<FontAwesome name={icon} size={24} color={color} />);
        } else if(iconType==='Fontisto' || focusedIconType==='Fontisto'){
            return (<Fontisto name={icon} size={24} color={color} />);
        } else if(iconType==='Foundation' || focusedIconType==='Foundation'){
            return (<Foundation name={icon} size={24} color={color} />);
        } else if(iconType==='Ionicons' || focusedIconType==='Ionicons'){
            return (<Ionicons name={icon} size={24} color={color} />);
        } else if(iconType==='MaterialIcons' || focusedIconType==='MaterialIcons'){
            return (<MaterialIcons name={icon} size={26} color={color} />);
        } else if(iconType==='MaterialCommunityIcons' || focusedIconType==='MaterialCommunityIcons'){
            return (<MaterialCommunityIcons name={icon} size={24} color={color} />);
        } else if(iconType==='Octicons' || focusedIconType==='Octicons'){
            return (<Octicons name={icon} size={24} color={color} />);
        } else if(iconType==='Zocial' || focusedIconType==='Zocial'){
            return (<Zocial name={icon} size={24} color={color} />);
        } else if(iconType==='SimpleLineIcons' || focusedIconType==='SimpleLineIcons'){
            return (<SimpleLineIcons name={icon} size={24} color={color} />);
        } else {
            return (<FontAwesome5 name={icon} size={24} color={color} />);
        }
      },
      tabBarStyle: { paddingTop:8 },
      tabBarLabelStyle: { fontSize: 13 },
      tabBarShowLabel: false
    })}>
      {data?.map((d, i)=>{
         return (<Tab.Screen key={i} name={d?.id} component={d?.component} />);
      })}
      </Tab.Navigator>);
}