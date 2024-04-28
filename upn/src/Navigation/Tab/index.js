import React from "react";
import { TouchableOpacity } from "react-native";
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

export const TabNavigation = ({ data })=>{
   return (<Tab.Navigator screenOptions={({ route }) => ({
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
      tabBarIcon: ({ focused, color, size }) => {
        const tabData = data?.filter((d)=>d?.id===route.name)[0];
        const iconType = tabData?.icon?.type;
        const iconName = tabData?.icon?.name;
        const focusedIconType = tabData?.focusedIcon?.type;
        const focusedIconName = tabData?.focusedIcon?.name;
        if(iconType==='AntDesign' || focusedIconType==='AntDesign' ){
            return (<AntDesign name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='Entypo' || focusedIconType==='Entypo'){
            return (<Entypo name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='EvilIcons' || focusedIconType==='EvilIcons'){
            return (<EvilIcons name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='Feather' || focusedIconType==='Feather'){
            return (<Feather name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='FontAwesome' || focusedIconType==='FontAwesome'){
            return (<FontAwesome name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='Fontisto' || focusedIconType==='Fontisto'){
            return (<Fontisto name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='Foundation' || focusedIconType==='Foundation'){
            return (<Foundation name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='Ionicons' || focusedIconType==='Ionicons'){
            return (<Ionicons name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='MaterialIcons' || focusedIconType==='MaterialIcons'){
            return (<MaterialIcons name={focused?(focusedIconName):(iconName)} size={26} color={color} />);
        } else if(iconType==='MaterialCommunityIcons' || focusedIconType==='MaterialCommunityIcons'){
            return (<MaterialCommunityIcons name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='Octicons' || focusedIconType==='Octicons'){
            return (<Octicons name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='Zocial' || focusedIconType==='Zocial'){
            return (<Zocial name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else if(iconType==='SimpleLineIcons' || focusedIconType==='SimpleLineIcons'){
            return (<SimpleLineIcons name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        } else {
            return (<FontAwesome5 name={focused?(focusedIconName):(iconName)} size={24} color={color} />);
        }
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { paddingTop:8 },
      tabBarLabelStyle: { fontSize: 13 },
      tabBarShowLabel: false
    })}>
      {data?.map((d, i)=>{
         return (<Tab.Screen key={i} name={d?.id} component={d?.component} />);
      })}
      </Tab.Navigator>);
}