import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ToastAndroid, ImageBackground } from "react-native";
import { getAppContext, ContextProvider } from '@AppAdvancedTopics/ReactContext/index.js';
import { DigitGroup } from './DigitGroup';

const DisplayProblem = (props, ref) =>{
 const { contextData, setContextData, deleteContextData  } = getAppContext();
 const { part1, part2, result, pickedItem, moveCounter, totalMoves } = contextData;
 const [p1, setP1] = useState(part1);
 const [p2, setP2] = useState(part2);
 const [r, setR] = useState(result);

 useImperativeHandle(ref, ()=>{
    return {
        reset: reset
    }    
 });
 const reset = ()=>{
    console.log("Reset Test");
   setP1(part1);
   setP2(part2);
   setR(result);
   setContextData({ pickedItem:{}, moveCounter: 0, reset: true });
   setTimeout(()=>{ setContextData({ pickedItem:{}, moveCounter: 0, reset: false }); }, 1000);
 };

 useEffect(()=>{
    if(p1+p2===r){
        console.log("Problem Solved");
    }
    console.log("p1: "+p1+" p2: "+p2+" r: "+r);
 },[p1,p2, r]);

 const appContext = getAppContext(); 

 return (
 <View style={{ marginTop: 15, justifyContent:'center', alignItems:'center' }}>
    <View style={{  flexDirection:'row' }}>
      <DigitGroup id="part1" number={{ currentDigit: p1, setCurrentDigit: setP1 }} />
    </View>
    <View style={{ flexDirection:'row' }}>
      <Text style={{ fontSize:38, color:'#000' }}>+</Text>
    </View>
    <View style={{ marginTop:5, flexDirection:'row' }}>
      <DigitGroup id="part2" number={{ currentDigit: p2, setCurrentDigit: setP2 }} />
    </View>
    <View style={{ marginTop:33, width:'45%', height: 5, backgroundColor:'#000', borderRadius: 5 }}></View>
    <View style={{ marginTop:15, flexDirection:'row' }}>
      <DigitGroup id="part3" number={{ currentDigit: r, setCurrentDigit: setR }} />
    </View>
  </View>);
};

export default forwardRef(DisplayProblem);