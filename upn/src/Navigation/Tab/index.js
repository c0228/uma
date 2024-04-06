import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const TabNavigation = ({ data })=>{
   return (<Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        const tabData = data?.filter((d)=>d?.name===route.name)[0];
        return <FontAwesome5 name={focused?(tabData?.focusedIcon):(tabData?.icon)} size={18} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { paddingTop:8 },
      tabBarLabelStyle: { fontSize: 13 }
    })}>
      {data?.map((d)=>{
         return (<Tab.Screen name={d?.name} component={d?.component} />);
      })}
      </Tab.Navigator>);
}