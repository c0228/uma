import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export const Layout = ({ children }) =>{

    const [fontsLoaded] = useFonts({
        'HandycheeraRegular': require('@AppAssets/fonts/HandycheeraRegular.otf'),
      });
    
    return (<View>{children}</View>);
};
