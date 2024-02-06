import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, ToastAndroid, View, StyleSheet } from "react-native";
import { Digit } from './Digit';

export const DigitGroup = ({ number }) =>{
    const numberArray = number.toString().split('').map(Number);

    useEffect(()=>{
       // ToastAndroid.show("numberArray: "+numberArray,ToastAndroid.LONG);
      },[]);

  return (<>
   {numberArray?.map((num, i)=>{
    return (<Digit key={i} number={num} />);
   })}
  </>);
};