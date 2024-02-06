import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground, ToastAndroid } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { AppRouting } from '@AppFeature/AppRouting/index.js';
import { HomeScreen } from "@AppPage/Home/index.js"; 
import { LEDGame } from "@AppPage/LEDGame_V2/index.js";
import { ContextProvider } from '@AppAdvancedTopics/ReactContext/index.js';
import { Sound } from '@AppUtils/GameSound/sound.js';
import { GameSound } from '@AppUtils/GameSound/index.js';
import logger from '@AppAdvancedTopics/Logger/index.js';

const App = () =>{
   const play = true;
  //  const { sound, playSound, pauseSound } = Sound('');

   /* Fonts ::: START */
   const [fontsLoaded] = useFonts({
    "HandycheeraRegular": require('./assets/fonts/HandycheeraRegular.otf'),
    "CasualChance": require('./assets/fonts/HandycheeraRegular.otf'),
    "QutcoyTrial": require('./assets/fonts/QutcoyTrial.otf'),
   });

   const [isReady, setIsReady] = useState(false);
    
   async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      setIsReady(true);
   }

   useEffect(() => {
    prepare();
   }, []);

   if (!isReady || !fontsLoaded) {
    return null; // or some loading indicator
   } else {
    SplashScreen.hideAsync();
   }
   /* Fonts ::: END */

   return (
    <>
    <ContextProvider variables={{  }}>
     <AppRouting 
        initialRouteName="Home" 
        data={[{ name:"Home", component: HomeScreen },
            { name:"AlphabetPlay", component: HomeScreen },
            { name:"NumberPlay", component: LEDGame },
            { name:"GameCredits", component: HomeScreen }]} />
    </ContextProvider>
    <GameSound />
    </>);
    
};

export default App;