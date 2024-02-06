import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity , ToastAndroid, View, StyleSheet } from 'react-native';
import { getAppContext } from '@AppAdvancedTopics/ReactContext/index.js';

const initialDisplay = {
  "0":{ a: true, b: true, c: true, d: false, e: true, f: true, g: true },
  "1":{ a: false, b: false, c: true, d: false, e: false, f: true, g: false },
  "2":{ a: true, b: false, c: true, d: true, e: true, f: false, g: true },
  "3":{ a: true, b: false, c: true, d: true, e: false, f: true, g: true },
  "4":{ a: false, b: true, c: true, d: true, e: false, f: true, g: false },
  "5":{ a: true, b: true, c: false, d: true, e: false, f: true, g: true },
  "6":{ a: true, b: true, c: false, d: true, e: true, f: true, g: true },
  "7":{ a: true, b: false, c: true, d: false, e: false, f: true, g: false },
  "8":{ a: true, b: true, c: true, d: true, e: true, f: true, g: true },
  "9":{ a: true, b: true, c: true, d: true, e: false, f: true, g: true },
  "*":{}
};

export const Digit = ({ id, number, updateDigit  }) => {
  const num= isNaN(number)?'*':number;
  const [display, setDisplay] = useState(initialDisplay);
  const [activeSegments, setActiveSegments] = useState(initialDisplay[num]); 
  const { contextData, setContextData, deleteContextData  } = getAppContext();

  useEffect(()=>{
    console.log("activeSegments [updated]: "+JSON.stringify(activeSegments));
  },[activeSegments]);

  useEffect(()=>{
    if(contextData?.reset){
      console.log("RESET Triggered [Digit]:");
      console.log("num: "+num);
      console.log("initialDisplay: "+JSON.stringify(initialDisplay));
      console.log("initialDisplay[num]: "+JSON.stringify(initialDisplay[num]));
      console.log("RESET Triggered [Digit]:");
      setDisplay(initialDisplay);
      setActiveSegments(initialDisplay[num]);
    }
  },[contextData?.reset]);

  const findKeyByValue = (object, value) => {
    return Object.keys(object).find(key => {
      const segment = object[key];
      return Object.keys(segment).every(prop => segment[prop] === value[prop]);
    });
  }

  const touchNdisplaySegment = (segmentId)=>{
      let ele =  {
        ...display,
        [num]: {
          ...display[num],
          [segmentId]: !display?.[num]?.[segmentId],
        },
      };
      let aSeg = ele[num];
      let digit = findKeyByValue(initialDisplay, aSeg);
      if(digit===undefined || digit==='*'){
        digit = '*';
        ele =  { ...display, "*": aSeg };
        aSeg = ele["*"];
      }
      // console.log("digit[pre]: "+digit);
      // console.log("digit[aSeg]: "+JSON.stringify(aSeg));
      setDisplay(ele);
      setActiveSegments(aSeg);
      updateDigit(digit);
  };

  useEffect(()=>{
    // console.log("pickedItem: "+JSON.stringify(contextData));
  },[contextData]);

  const toggleSegment = (segmentId) => {
    const moveCounter = contextData?.moveCounter;
    const totalMoves = contextData?.totalMoves;
    const pickedItem = contextData?.pickedItem;
    let segment = display?.[num]?.[segmentId];
    if (moveCounter < totalMoves) {
      if (segment && pickedItem && Object.keys(pickedItem)?.length === 0) {
        setContextData({ pickedItem: { id: id, number: num, segmentId: segmentId, value: !segment } });
        touchNdisplaySegment(segmentId);
      } else if (!segment && pickedItem && Object.keys(pickedItem)?.length > 0) {
        setContextData({ pickedItem:{}, moveCounter: moveCounter + 1  });
        touchNdisplaySegment(segmentId);
      }
    }
  };
  
  return (
    <View style={styles.digitView}>
    <View style={styles.digit}>
      <TouchableOpacity onPress={()=>toggleSegment('a')}>
        <Text style={[ styles.horizontal, styles.segment, styles.a, activeSegments.a && styles.active ]}></Text>
      </TouchableOpacity >
      <TouchableOpacity  onPress={()=>toggleSegment('b')}>
        <Text style={[styles.vertical, styles.segment, styles.b, activeSegments.b && styles.active ]}></Text>
      </TouchableOpacity >
      <TouchableOpacity  onPress={()=>toggleSegment('c')}>
        <Text style={[ styles.vertical, styles.segment, styles.c, activeSegments.c && styles.active ]}></Text>
      </TouchableOpacity >
      <TouchableOpacity  onPress={()=>toggleSegment('d')}>
        <Text style={[ styles.horizontal, styles.segment, styles.d, activeSegments.d && styles.active ]}></Text>
      </TouchableOpacity >
      <TouchableOpacity  onPress={()=>toggleSegment('e')}>
        <Text style={[ styles.vertical, styles.segment, styles.e, activeSegments.e && styles.active ]}></Text>
      </TouchableOpacity >
      <TouchableOpacity  onPress={()=>toggleSegment('f')}>
        <Text style={[ styles.vertical, styles.segment, styles.f, activeSegments.f && styles.active ]}></Text>
      </TouchableOpacity >
      <TouchableOpacity  onPress={()=>toggleSegment('g')}>
        <Text style={[ styles.horizontal, styles.segment, styles.g, activeSegments.g && styles.active ]}></Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  digitView: { margin: 2, padding:10, backgroundColor:'#01290b', borderRadius: 8, shadowColor: "#000", borderWidth: 8, borderColor:'#fff', 
                shadowOffset: { width: 0, height: 7 }, shadowOpacity: 0.43, shadowRadius: 9.51, elevation: 15 },
  digit: { width: 50, height: 90, float: 'left' },
  horizontal: { width: 30, height: 10, backgroundColor: '#333', position: 'absolute', borderRadius: 5, },
  vertical: { width: 10, height: 30, backgroundColor: '#333', position: 'absolute', borderRadius: 5, },
  segment: { backgroundColor: '#dddeee', zIndex: 2 },
  active: { backgroundColor: 'brown' },
  a: { top: 0, left: 10 },
  b: { top: 10, left: 0 },
  c: { top: 10, left: 40 },
  d: { top: 40, left: 10 },
  e: { top: 50, left: 0 },
  f: { top: 50, left: 40 },
  g: { top: 80, left: 10 },
});
