import React, { useState, useEffect } from 'react';
import { Text, TouchableWithoutFeedback, ToastAndroid, View, StyleSheet } from 'react-native';

const alphabetDisplay = {
  A: { a: true, b: true, c: true, d: false, e: true, f: true, g: false, h: false, i: false, j: false, k: false, l: false, m: false, n: false },
  B: { a: false, b: true, c: true, d: true, e: true, f: true, g: true, h: false, i: false, j: false, k: false, l: false, m: false, n: false },
  C: { a: true, b: false, c: false, d: true, e: true, f: false, g: true, h: false, i: false, j: false, k: false, l: false, m: false, n: false },
  // Add more letters here
};

export const Alpha = ({ letter }) => {
  const [activeSegments, setActiveSegments] = useState(alphabetDisplay[letter] || {});

  useEffect(() => {
    console.log("activeSegments", activeSegments);
    ToastAndroid.show("commonKeys[" + letter + "]: " + findKeyByValue(alphabetDisplay, activeSegments), ToastAndroid.LONG);
  }, [activeSegments]);

  const findKeyByValue = (object, value) => {
    return Object.keys(object).find(key => {
      const segment = object[key];
      return Object.keys(segment).every(prop => segment[prop] === value[prop]);
    });
  };

  const toggleSegment = (segmentId) => {
    setActiveSegments((prev) => ({ ...prev, [segmentId]: !prev[segmentId] }));
  };

  return (
    <View style={styles.digit}>
      <TouchableWithoutFeedback onPress={() => toggleSegment('a')}>
        <Text style={[styles.horizontal, styles.segment, styles.a, activeSegments.a && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('b')}>
        <Text style={[styles.vertical, styles.segment, styles.b, activeSegments.b && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('c')}>
        <Text style={[styles.vertical, styles.segment, styles.c, activeSegments.c && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('d')}>
        <Text style={[styles.horizontal, styles.segment, styles.d, activeSegments.d && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('e')}>
        <Text style={[styles.vertical, styles.segment, styles.e, activeSegments.e && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('f')}>
        <Text style={[styles.vertical, styles.segment, styles.f, activeSegments.f && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('g')}>
        <Text style={[styles.horizontal, styles.segment, styles.g, activeSegments.g && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('h')}>
        <Text style={[styles.horizontal, styles.segment, styles.h, activeSegments.h && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('i')}>
        <Text style={[styles.vertical, styles.segment, styles.i, activeSegments.i && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('j')}>
        <Text style={[styles.vertical, styles.segment, styles.j, activeSegments.j && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('k')}>
        <Text style={[styles.horizontal, styles.segment, styles.k, activeSegments.k && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('l')}>
        <Text style={[styles.horizontal, styles.segment, styles.l, activeSegments.l && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('m')}>
        <Text style={[styles.horizontal, styles.segment, styles.m, activeSegments.m && styles.active]}></Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleSegment('n')}>
        <Text style={[styles.vertical, styles.segment, styles.n, activeSegments.n && styles.active]}></Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  digit: { margin: 5, width: 100, height: 180, float: 'left' },
  horizontal: { width: 60, height: 15, backgroundColor: '#333', position: 'absolute', borderRadius: 5, },
  vertical: { width: 15, height: 60, backgroundColor: '#333', position: 'absolute', borderRadius: 5, },
  segment: { backgroundColor: '#ddd', zIndex: 2 },
  active: { backgroundColor: 'brown' },
  a: { top: 0, left: 20 },
  b: { top: 15, left: 0 },
  c: { top: 15, left: 80 },
  d: { top: 75, left: 20 },
  e: { top: 90, left: 0 },
  f: { top: 90, left: 80 },
  g: { top: 160, left: 20 },
  h: { top: 25, left: 60 },
  i: { top: 40, left: 80 },
  j: { top: 100, left: 60 },
  k: { top: 115, left: 20 },
  l: { top: 130, left: 60 },
  m: { top: 130, left: 100 },
  n: { top: 175, left: 80 },
});

