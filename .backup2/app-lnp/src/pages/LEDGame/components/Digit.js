import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity , ToastAndroid, View, StyleSheet } from 'react-native';

export const Digit = ({ number, setNumber, move }) => {
  const [display, setDisplay] = useState({
    0:{ a: true, b: true, c: true, d: false, e: true, f: true, g: true },
    1:{ a: false, b: false, c: true, d: false, e: false, f: true, g: false },
    2:{ a: true, b: false, c: true, d: true, e: true, f: false, g: true },
    3:{ a: true, b: false, c: true, d: true, e: false, f: true, g: true },
    4:{ a: false, b: true, c: true, d: true, e: false, f: true, g: false },
    5:{ a: true, b: true, c: false, d: true, e: false, f: true, g: true },
    6:{ a: true, b: true, c: false, d: true, e: true, f: true, g: true },
    7:{ a: true, b: false, c: true, d: false, e: false, f: true, g: false },
    8:{ a: true, b: true, c: true, d: true, e: true, f: true, g: true },
    9:{ a: true, b: true, c: true, d: true, e: false, f: true, g: true }
});
  const [currentDigit, setCurrentDigit] = useState(number); // Stores Current Digit
  const [activeSegments, setActiveSegments] = useState(currentDigit?display[currentDigit]:display[0]); 
  // Contains Segments related to Current Digit

  
  useEffect(()=>{
    console.log("activeSegments", activeSegments);
    const digit = findKeyByValue(display, activeSegments);
    setNumber( digit );
    setCurrentDigit( digit );
  },[activeSegments]);

  const findKeyByValue = (object, value) => {
    return Object.keys(object).find(key => {
      const segment = object[key];
      return Object.keys(segment).every(prop => segment[prop] === value[prop]);
    });
  }

  const toggleSegment = async(segmentId) => {
    const ele = { ...display };
    console.log("currentDigit: "+currentDigit+" segmentId: "+segmentId);
      ele[currentDigit][segmentId] = !ele?.[currentDigit]?.[segmentId];
      setDisplay(ele);
      setActiveSegments((prev)=>({ ...prev, [segmentId]: !ele[currentDigit] }));
      move(ele, currentDigit, segmentId);
    /* const activeSegments = display[currentDigit];
    const digit = findKeyByValue(display, activeSegments);
    setNumber( digit );
    setCurrentDigit( digit ); */
  };

  return (
    <View style={{ padding:10, backgroundColor:'#000', borderRadius: 5, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    
    elevation: 15 }}>
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
    <View style={{ position: 'absolute', color:'#000', zIndex:4, bottom: 0, right: -40 }}>
      <Text style={{ fontSize: 22 }}>({currentDigit})</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
