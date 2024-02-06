import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, StyleSheet, ToastAndroid } from "react-native";
import { DigitGroup } from './components/DigitGroup';
export const LEDGame = () => {
  
  return (
<View style={styles.container}>
  <StatusBar translucent backgroundColor="purple" style="auto" height="5%"  />
  <View style={{ alignItems:'flex-end', justifyContent:'flex-end', zIndex: 3, marginTop: 50, marginRight: 15 }}>
    <Text style={{ fontFamily:'HandycheeraRegular' }}>Moves:</Text>
    <Text style={{ padding: 10, borderRadius: 100, backgroundColor:'pink' }}>1</Text>
  </View>
  <View style={{ marginTop: 15, justifyContent:'center', alignItems:'center' }}>
    <View style={{  flexDirection:'row' }}>
      <DigitGroup number={5} />
    </View>
    <View style={{ flexDirection:'row' }}>
      <Text style={{ fontSize:68, color:'#000' }}>+</Text>
    </View>
    <View style={{ marginTop:15, flexDirection:'row' }}>
      <DigitGroup number={9} />
    </View>
    <View style={{ marginTop:30, width:'85%', height: 10, backgroundColor:'#000', borderRadius: 5 }}></View>
    <View style={{ marginTop:15, flexDirection:'row' }}>
      <DigitGroup number={9} />
    </View>
    <View style={{ marginTop:15, width:'85%', height: 10, backgroundColor:'#000', borderRadius: 5 }}></View>
  </View>
</View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    position: 'relative',          
    paddingTop: StatusBar.currentHeight,
  }
});