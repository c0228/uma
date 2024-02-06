import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AppRouting = ({ data, initialRouteName }) => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
        {data?.map(menu=><Stack.Screen key={menu.name} name={menu.name} component={menu.component}  />)}
        </Stack.Navigator>
    </NavigationContainer>
  );
};

