import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BackHandler, StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getAppContext } from '@AppAdvancedTopics/ReactContext/index.js';


export const HomeScreen = ({ navigation }) =>{
 return (<ImageBackground source={require('@AppAssets/images/bg.jpg')} style={styles.backgroundImage}>
 <StatusBar translucent backgroundColor="#fff" style="auto" height="5%"  />
 <View style={{ flex: 3 }}>
    <View style={styles.container}>
        <Text style={styles.title}>LED</Text>
        <Text style={styles.subTitle}>AlphaNumeric Game</Text>
        <View style={styles.gamePlay}>
            <View style={styles.gamePlayTitle}>
                <Text style={styles.gamePlayTitleText}>CHOOSE YOUR GAME</Text>
            </View>     
            <View style={styles.gamePlayBtn}>
                <Text style={styles.gamePlayBtnText}>Alphabets Play</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('NumberPlay')}>
            <View style={styles.gamePlayBtn}>
                <Text style={styles.gamePlayBtnText}>Numbers Play</Text>
            </View>
            </TouchableOpacity>
        </View>
        <View style={styles.gamePlayBtn}>
            <Text style={styles.gamePlayBtnText}>Game Credits</Text>
        </View>  
        <TouchableOpacity onPress={()=>BackHandler.exitApp()}>
        <View style={styles.gamePlayBtn}>
            <Text style={styles.gamePlayBtnText}>Exit Game</Text>
        </View>
        </TouchableOpacity>
    </View>
 </View>
</ImageBackground>);
};

const styles = StyleSheet.create({
    backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'flex-start' },
    settings: { marginVertical:45, marginHorizontal: 20, flexDirection: 'row', justifyContent:'flex-end' },
    container: { marginVertical:160, marginHorizontal: 20 },
    title: { fontFamily:'QutcoyTrial', fontSize: 28, color: 'brown' },
    subTitle: { fontFamily:'CasualChance', fontSize: 38, color: 'brown' },
    gamePlay: {  marginTop: 55, borderWidth:1, borderColor:'#000', borderRadius: 8, padding: 10 },
    gamePlayTitle: { justifyContent:'center', alignItems: 'center', borderRadius: 8 },
    gamePlayTitleText: { fontFamily:'QutcoyTrial' },
    gamePlayBtn: { marginTop: 8, backgroundColor:'brown', justifyContent:'center', alignItems: 'center', borderRadius: 8 },
    gamePlayBtnText: { fontFamily:'QutcoyTrial', padding: 10, color:'#fff', fontSize: 15 }
});