import React, { useState, useEffect} from "react";
import { Text, TouchableOpacity, ToastAndroid, View, StyleSheet } from "react-native";
import { getAppContext, ContextProvider } from '@AppAdvancedTopics/ReactContext/index.js';
import { DigitGroup } from './DigitGroup';

export const DisplayProblem = ({ part1, part2, result })=>{
    const appContext = getAppContext();

    const totalMoves = 1;

    const initialPickedItem = '';
    const initialMoveCounter = 0;
  
    const [pickedItem, setPickedItem] = useState(initialPickedItem);
    const [moveCounter, setMoveCounter] = useState(initialMoveCounter);

    const [p1,setP1] = useState(part1);
    const [p2,setP2] = useState(part2);
    const [r,setR] = useState(result);

    const reset = () => {
      setPickedItem(initialPickedItem);
      setMoveCounter(initialMoveCounter);
    };

    const move = async(display, currentDigit, segmentId) => {
        ToastAndroid.show(display+""+currentDigit+""+segmentId, ToastAndroid.LONG);
        if (moveCounter < totalMoves) {
            if (display[currentDigit][segmentId] && pickedItem?.length === 0) {
              setPickedItem(currentDigit + '|' + segmentId);
            } else if (!display[currentDigit][segmentId] && pickedItem?.length > 0) {
              setPickedItem('');
              setMoveCounter((prev) => prev + 1);
            }
            
        }
    };
    
    useEffect(()=>{
      if( parseInt(p1) + parseInt(p2) === parseInt(r) ){
        ToastAndroid.show("Problem Solved", ToastAndroid.LONG);
      }
      console.log(p1+"+"+p2+"="+r);
    },[p1,p2, r]);

    return ( <ContextProvider variables={{  }}>
    <View style={{ marginTop: 15, justifyContent:'center', alignItems:'center' }}>
    <View style={{  flexDirection:'row' }}>
      <DigitGroup number={part1} setNumber={setP1} move={move} />
    </View>
    <View style={{ flexDirection:'row' }}>
      <Text style={{ fontSize:58, color:'#000' }}>+</Text>
    </View>
    <View style={{ marginTop:5, flexDirection:'row' }}>
      <DigitGroup number={part2} setNumber={setP2} move={move} />
    </View>
    <View style={{ marginTop:30, width:'45%', height: 10, backgroundColor:'#000', borderRadius: 5 }}></View>
    <View style={{ marginTop:15, flexDirection:'row' }}>
      <DigitGroup number={result} setNumber={setR} move={move} />
    </View>
    <View style={{ marginTop:15, width:'45%', height: 10, backgroundColor:'#000', borderRadius: 5 }}></View>
  </View>
  </ContextProvider>);
  };