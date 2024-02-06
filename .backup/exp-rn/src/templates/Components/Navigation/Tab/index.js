import React,{ useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AppColorTemplate from './../../../styles/ColorConfig';
import TabNavigationStyles from './styles';

const GLOBAL_TMPL_COLOR2_MED = '#ddd';
const GLOBAL_TMPL_COLOR1_MAX = '#532c97';

const Tab = createBottomTabNavigator();

export const TabNavigation = ({ tabMenu, headerShown }) => {

  const [ tabBadgeActive, setTabBadgeActive ] = useState("");

  const TabIconProvider = ({ routeName, size, color }) =>{
    let tabInfo = tabMenu.filter((val)=>val.name===routeName);
    return <MaterialCommunityIcons name={tabInfo[0].icon}
            size={size} color={color} />
  };
  
  return (
        <Tab.Navigator 
        screenListeners={() => ({
          state: (e) => {
            setTabBadgeActive(tabMenu[e.data.state.index].name);
          },
        })}
        screenOptions={({ route }) => ({
          headerShown: headerShown,
          tabBarIcon: ({ color, size }) => {
            return <TabIconProvider routeName={route.name} size={size} color={color} />
          },
          tabBarInactiveTintColor: GLOBAL_TMPL_COLOR2_MED,
          tabBarActiveTintColor: GLOBAL_TMPL_COLOR1_MAX,
        })}>
          {tabMenu.map((tab)=>{
            let tabScreenOptions = {
              tabBarShowLabel:false,
              tabBarLabelStyle: TabNavigationStyles.tabBarLabelStyle,
              tabBarBadgeStyle: (tabBadgeActive===tab.name)?
                TabNavigationStyles.tabBarBadgeActiveStyle:
                TabNavigationStyles.tabBarBadgeStyle
            };
            if(tab.badge!==undefined && tab.badge>0) { 
              tabScreenOptions.tabBarBadge =  tab.badge;
            }
            return (
              <Tab.Screen 
                key={tab.name}
                name={tab.name} 
                component={tab.component}
                initialParams={{}}
                options={tabScreenOptions}/>);
            })}
          </Tab.Navigator>
      );
}
