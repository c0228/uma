import React, { useState, useEffect } from 'react';
import { Platform, NativeModules, View, Image, StyleSheet } from 'react-native';
import { LogBox } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Preset from '@AppPage/Splash/components/preset/index.js';
import Extra from '@AppPage/Splash/components/extra/index.js';
import Auth from '@AppPage/Splash/components/auth/index.js';
import Main from '@AppPage/Main/index.js';
import Test1 from '@AppPage/Splash/components/test1/index.js';
import Test2 from '@AppPage/Splash/components/test2/index.js';
import Test3 from '@AppPage/Splash/components/test3/index.js';
import { initializeFCM } from '@AppUtils/FCM.js';
import 'react-native-gesture-handler';

// Temporary Fix: Ignore warnings containing the word "defaultProps"
LogBox.ignoreLogs([/defaultProps/]);

const Stack = createStackNavigator();

const App = ()=>{
 
  const [loading, setLoading] = useState(false);
  const initialize = async()=>{
   await initializeFCM();
   setLoading(true);
  };
  useEffect(()=>{ initialize(); },[]);
  if(!loading){
    return (<View style={styles.loadingView}>
     <Image source={require('@Assets/img/loading.gif')} style={styles.loadingImg} />
    </View>);
  } else {
    return (<NavigationContainer>
      <Stack.Navigator>
        {/* Splash Screen ::: START */}
        <Stack.Screen name="SS_Preset" component={Preset}  options={{ headerShown: false }} />
        <Stack.Screen name="SS_Authentication" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="SS_Extra" component={Extra}  options={{ headerShown: false }} />
        {/* Splash Screen ::: END */}
        <Stack.Screen name="SS_Main" component={Main} options={{ headerShown: false }} />

        <Stack.Screen name="SS_Test3" component={Test3}  options={{ headerShown: false }} />
        <Stack.Screen name="SS_Test2" component={Test2}  options={{ headerShown: false }} />
        <Stack.Screen name="SS_Test1" component={Test1}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>);
  };
};

const styles = StyleSheet.create({
  loadingView: { marginTop:'55%', justifyContent:'center', alignItems:'center' },
  loadingImg: { width:100, height: 100 }
});

export default App;
