import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ToastAndroid, ImageBackground, Animated } from "react-native";
import { getAppContext, ContextProvider } from '@AppAdvancedTopics/ReactContext/index.js';

export const OutOfMovesNotification = ({ navigation, reset }) => {
  const { contextData, setContextData, deleteContextData  } = getAppContext();
  const [show, setShow] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(()=>{
    if(contextData?.moveCounter === contextData?.totalMoves){
      setShow(true);
    }
  },[contextData]);

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // 1 second
      useNativeDriver: true,
    }).start();
  }, [show]);

  return (<>
    {show && (<Animated.View
      style={{
        position: 'absolute',
        flex: 1,
        width: '100%',
        padding: 10,
        backgroundColor: '#ffca7c',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 6,
        opacity: fadeAnim,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>You're unsuccessful!</Text>
      <Text style={{ fontWeight: 'bold' }}>(Out of Moves)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text style={{ borderWidth: 2, borderRadius: 6, fontSize:12, fontWeight:'bold', padding: 8, margin: 10, backgroundColor: '#fff' }}>Back to Main Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{reset();setShow(false); }}>
          <Text style={{ borderWidth: 2, borderRadius: 6, fontSize:12, fontWeight:'bold', padding: 8, margin: 10, backgroundColor: '#fff' }}>Retry the Problem</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>)}
  </>);
};
