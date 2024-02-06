import React, { useState, useEffect } from 'react';
import { Text, TouchableWithoutFeedback , ToastAndroid, View, StyleSheet } from 'react-native';

 const display = {
    0:{ a: true, b: true, c: true, d: false, e: true, f: true, g: true },
    1:{ a: false, b: false, c: true, d: false, e: false, f: true, g: false },
    2:{ a: true, b: false, c: true, d: true, e: true, f: false, g: true },
    3:{ a: true, b: false, c: true, d: true, e: false, f: true, g: true },
    4:{ a: false, b: true, c: true, d: true, e: false, f: true, g: false },
    5:{ a: true, b: true, c: false, d: true, e: false, f: true, g: true },
    6:{ a: true, b: true, c: false, d: true, e: true, f: true, g: true },
    7:{ a: true, b: false, c: true, d: false, e: false, f: true, g: false },
    8:{ a: true, b: true, c: true, d: true, e: true, f: true, g: true },
    9:{ a: true, b: true, c: true, d: true, e:false, f: true, g: true }
};

export const Digit = ({ number }) => {
  const [activeSegments, setActiveSegments] = useState(number?display[number]:display[0]);

  useEffect(()=>{
    console.log("activeSegments", activeSegments);
    
    ToastAndroid.show("commonKeys["+number+"]: "+findKeyByValue(display, activeSegments), ToastAndroid.LONG);
  },[activeSegments]);

  const findKeyByValue = (object, value) => {
    return Object.keys(object).find(key => {
      const segment = object[key];
      return Object.keys(segment).every(prop => segment[prop] === value[prop]);
    });
  }

  const toggleSegment = (segmentId) => {
    setActiveSegments((prev)=>({ ...prev, [segmentId]: !prev[segmentId] }));
  };

  return (
    <View style={styles.digit}>
      <TouchableWithoutFeedback onPress={()=>toggleSegment('a')}>
        <Text style={[ styles.horizontal, styles.segment, styles.a, activeSegments.a && styles.active ]}></Text>
      </TouchableWithoutFeedback >
      <TouchableWithoutFeedback  onPress={()=>toggleSegment('b')}>
        <Text style={[styles.vertical, styles.segment, styles.b, activeSegments.b && styles.active ]}></Text>
      </TouchableWithoutFeedback >
      <TouchableWithoutFeedback  onPress={()=>toggleSegment('c')}>
        <Text style={[ styles.vertical, styles.segment, styles.c, activeSegments.c && styles.active ]}></Text>
      </TouchableWithoutFeedback >
      <TouchableWithoutFeedback  onPress={()=>toggleSegment('d')}>
        <Text style={[ styles.horizontal, styles.segment, styles.d, activeSegments.d && styles.active ]}></Text>
      </TouchableWithoutFeedback >
      <TouchableWithoutFeedback  onPress={()=>toggleSegment('e')}>
        <Text style={[ styles.vertical, styles.segment, styles.e, activeSegments.e && styles.active ]}></Text>
      </TouchableWithoutFeedback >
      <TouchableWithoutFeedback  onPress={()=>toggleSegment('f')}>
        <Text style={[ styles.vertical, styles.segment, styles.f, activeSegments.f && styles.active ]}></Text>
      </TouchableWithoutFeedback >
      <TouchableWithoutFeedback  onPress={()=>toggleSegment('g')}>
        <Text style={[ styles.horizontal, styles.segment, styles.g, activeSegments.g && styles.active ]}></Text>
      </TouchableWithoutFeedback >
    </View>
  );
};

const styles = StyleSheet.create({
  digit: {
    // position: 'relative',
    margin: 5,
    width: 60,
    height: 110,
    float: 'left',
  },
  horizontal: {
    width: 40,
    height: 10,
    backgroundColor: '#333',
    position: 'absolute',
    borderRadius: 5,
  },
  vertical: {
    width: 10,
    height: 40,
    backgroundColor: '#333',
    position: 'absolute',
    borderRadius: 5,
  },
  segment: {
    backgroundColor: '#ddd',
    zIndex: 2
  },
  active: {
    backgroundColor: 'brown',
  },
  a: { top: 0, left: 10 },
  b: { top: 10, left: 0 },
  c: { top: 10, left: 50 },
  d: { top: 50, left: 10 },
  e: { top: 60, left: 0 },
  f: { top: 60, left: 50 },
  g: { top: 100, left: 10 },
  h: { top: 50, left: 10 },
  i: { top: 36, left: 25 },
});
