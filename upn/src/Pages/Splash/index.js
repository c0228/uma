import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './utils/Header.js';
import { dialogue } from './static-data/dialogue.js';

const bgs = {
    "blue": "#31338f",
    "voilet": "#890e2a",
    "indigo": "#4a3a02",
    "green": "#115300"
};

const Stack = createStackNavigator();

const Home = ({ route }) =>{
 const [lang, setLang] = useState(route?.params?.lang || ['en']); 
 const navigation = useNavigation(); 
 // const { paramName } = route?.params || {};
 return (<View style={{ flex:1, backgroundColor: bgs?.['voilet']}}>
    <Header title={dialogue?.["d1"]?.[lang]} color="voilet" lang={lang} handleSelect={(option)=>setLang(option)}/>
    <Text onPress={() => navigation.goBack()}>Back</Text>
   {/* <Text>Hello World, {paramName}</Text> */}
    <Text  onPress={() => navigation.navigate('SS_Notifications',{ paramName:'value for Screen2' })}>Next</Text>
 </View>);
};

const Splash = () =>{
 return (<NavigationContainer>
 <Stack.Navigator>
    <Stack.Screen name="SS_Introduction" component={Home}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Notifications" component={Home}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Storage" component={Home}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Authentication" component={Home} options={{ headerShown: false }} />
  </Stack.Navigator>
  </NavigationContainer>);
};

export default Splash;