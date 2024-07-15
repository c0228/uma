import React, { useState, useEffect } from 'react';
import { BannerAd, TestIds, BannerAdSize } from "react-native-google-mobile-ads";
import { InterstitialAd, AdEventType } from "react-native-google-mobile-ads";
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useNavigation } from '@react-navigation/native';

const Test1 = ()=>{
 {/*const [loadedInterstitialAd, setLoadedInterstitialAd] = useState();
 const invokeAd = async() =>{
    const ad  = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, { keywords: ['fashion', 'clothing'] });
    ad.addAdEventListener(AdEventType.LOADED, ()=>{
        console.log("InterstitialAd [LOADED]");
        setLoadedInterstitialAd(ad);
    });
    ad.addAdEventListener(AdEventType.OPENED, ()=>{
        console.log("InterstitialAd [OPENED]");
    });
    ad.addAdEventListener(AdEventType.CLOSED, ()=>{
        console.log("InterstitialAd [CLOSED]");
        invokeAd();
    });
   await ad.load();
 };
 useEffect(()=>{
    invokeAd();
 },[]);
 const navigation = useNavigation();
 const handleLogin = async() =>{
    try {
        await EncryptedStorage.setItem('auth_status', JSON.stringify({ authenticated: true }));
        console.log('Auth status stored successfully');
    } catch (error) {
        console.error('Error storing auth status:', error);
    } finally {
        navigation?.navigate('SS_Test1',{});
    }
 }; */}
 const handleFolder = async()=>{
    try {
        await RNFS.mkdir(RNFS.ExternalDirectoryPath+'/my-testA-folder');
        const exists = await RNFS.exists(RNFS.ExternalDirectoryPath+'/my-testA-folder');
        console.log('Directory created successfully: ', exists);
        const result = await RNFS.readDir(RNFS.ExternalDirectoryPath);
        console.log('Results', result);
      } catch (error) {
        console.log(`Failed to create directory: ${error.message}`);
      } 
 };
 
 return (<View>
    <TouchableOpacity onPress={()=>handleFolder()}>
        <Text style={{ padding:15 }}>{RNFS.ExternalDirectoryPath}</Text>
    </TouchableOpacity>
    {/*<TouchableOpacity onPress={()=>requestPermission()}>
        <Text style={{ textAlign:'center', padding:10, fontWeight:'bold', backgroundColor:'tomato', color:'#fff', borderRadius:8 }}>
            Ask Permission
        </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
        loadedInterstitialAd.show();
    }}>
        <Text style={{ textAlign:'center', padding:10 }}>Interstial Ad</Text>
    </TouchableOpacity>
    <ScrollView>
    <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.BANNER} />
    <Text>Banner</Text>
    <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
    <Text>Full Banner</Text>
    <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.LARGE_BANNER} />
    <Text>Large Banner</Text>
    <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.MEDIUM_RECTANGLE} />
    <Text>Medium Rectangle</Text>
    <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    <Text>Anchor Adaptive Banner</Text>
    <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.INLINE_ADAPTIVE_BANNER} />
    <Text>Inline Adaptive Banner</Text>
    <View style={{ flexDirection:'row', justifyContent:'center' }}>
        <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.WIDE_SKYSCRAPER} />
        <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.WIDE_SKYSCRAPER} />
    </View>
    <Text>Wide Skyscraper</Text>
    </ScrollView>
    <TouchableOpacity onPress={()=>handleFolder()}>
        <Text style={{ padding:30, textAlign:'center' }}>{RNFS.DocumentDirectoryPath} Hello Test1 Page</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handleLogin()}>
        <Text style={{ padding:30, textAlign:'center' }}>Login to Page</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation?.navigate('SS_Test2',{})}>
        <Text style={{ padding:30, textAlign:'center' }}>Go to Test2 Page</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation?.navigate('SS_Test3',{})}>
        <Text style={{ padding:30, textAlign:'center' }}>Go to Test3 Page</Text>
</TouchableOpacity>*/}
 </View>);
};

export default Test1;
