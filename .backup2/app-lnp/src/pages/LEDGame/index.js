import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, StyleSheet, ToastAndroid, ImageBackground } from "react-native";
import { DisplayProblem } from './components/DisplayProblem';

import { Alpha } from './components/Alpha';

export const LEDGame = () => {

  const GameSummary = () =>{
    return (<View style={styles.gameSummaryView}>
      <View style={styles.indexView}>
        <Text style={styles.index}>PROBLEM</Text><Text>#1</Text>
      </View>
      <View style={styles.indexView}>
        <Text style={styles.index}>SCORE</Text><Text>0</Text>
      </View>
      <View style={styles.indexView}>
        <Text style={styles.index}>MOVES</Text><Text>0</Text>
      </View>
    </View>);
  };

  const ProblemTitle = ()=>{
    return (<View style={styles.problemTitleView}>
      <Text style={styles.problemTitle}>Could you solve the Problem - only in 1 move?</Text>
    </View>);
  };

 
  return (
    <ImageBackground source={require('@AppAssets/images/bg.jpg')} style={styles.backgroundImage}>
      <StatusBar translucent backgroundColor="white" style="auto" height="5%"  />
      <GameSummary />
      <View style={styles.container}>
        <ProblemTitle />
        <DisplayProblem part1={5} part2={9} result={9} />
      </View>
  </ImageBackground>);
};

const styles = StyleSheet.create({
  backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'flex-start' },
  gameSummaryView: { flexDirection:'row' },
  indexView: { alignItems:'center', zIndex: 3, marginTop: 50, marginLeft: 15 },
  index: { fontFamily:'QutcoyTrial' },
  problemTitleView: { alignItems:'center', marginTop: 20 },
  problemTitle: { fontFamily:'HandycheeraRegular', fontSize:18 },
  container:{ flex: 1, width:'100%', position: 'relative', paddingTop: StatusBar.currentHeight }
});