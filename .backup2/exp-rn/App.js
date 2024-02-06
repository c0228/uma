import React, { useEffect } from 'react';
import { StyleSheet, View, ToastAndroid, Text } from 'react-native';
import { AppRouting } from '@AppFeature/AppRouting/index.js';
import { HomeScreen } from "@AppPage/HomeScreen.js";
import { Page2Screen } from "@AppPage/Page2.js"; 
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import 'react-native-gesture-handler';

export default function App(){
  /* Loading Fonts ::: START */
  const [fontsLoaded] = useFonts({
    "HandycheeraRegular": require('./assets/fonts/HandycheeraRegular.otf')
  });
  useEffect(()=>{
    async function prepare() {
        await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[]);


  
  if(!fontsLoaded){
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  /* Loading Fonts ::: END */

  return (
    <>
      {fontsLoaded && <AppRouting initialRouteName="Page2Screen" 
            data={[{ name:"Home", component: HomeScreen },
  { name:"Page2Screen", component: Page2Screen }]} />}
    </>);
};

const styles = StyleSheet.create({
  content: {
    marginTop: '5%',
    backgroundColor: '#fff',
    paddingTop: '5%',
    paddingLeft:'2%',
    paddingRight:'2%'
  },
});

