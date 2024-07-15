import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Select } from '@AppFormElement/Select/index.js';
import { Button } from '@AppFormElement/Button/index.js';
import Intro from './components/intro/index.js';
import Notify from './components/notify/index.js';
import { dialogue } from './static-data/dialogue.js';
/*
 blue - #31338f
 voilet - #890e2a
 indigo - #4a3a02
 green - #115300
*/

const bgs = {
    "blue": "#31338f",
    "voilet": "#890e2a",
    "indigo": "#4a3a02",
    "green": "#115300"
}

const Splash = (props) =>{
 const [display, setDisplay] = useState('introduction');
 const [color, setColor] = useState('voilet');
 const [lang, setLang] = useState(['en']);
 const [imageUrl, setImgUrl] = useState();

 const loadImage = async () => {  
    let imageModule;
    if(color==='voilet'){ imageModule = await require('@Assets/img/logo-voilet.png'); }
    if(color==='indigo'){ imageModule = await require('@Assets/img/logo-indigo.png'); }
    if(color==='blue'){ imageModule = await require('@Assets/img/logo-blue.png'); }
    if(color==='green'){ imageModule = await require('@Assets/img/logo-green.png'); }
    setImgUrl(imageModule);
  };

 useEffect(() => {
    loadImage();
  }, [color]);

 const handleSelect = (option) =>{
    console.log("handleSelect", option);
    setLang(option);
 };

 const handleIntroduction = ()=>{
    setColor('indigo');
    setDisplay('notification');
 };

 const handleNotification = () =>{
    setColor('blue');
    setDisplay('storage');
 };

 return (
 <View style={[styles.view,{ backgroundColor: bgs[color] }]}>
    
    {imageUrl && (<View style={styles.titleView}>
        <Text style={styles.title}>{dialogue?.["d1"]?.[lang]}</Text>
        <Image style={styles.img} source={imageUrl} />
    </View>)}
    
    <View style={styles.langView}>
    <View style={styles.langPartition1}></View>
    <View style={styles.langPartition2}>
    <Select name="language" 
        style={{ backgroundColor:'white' }}
              placeholder="Language" 
              popupTitle="Choose your Language"
              value={lang} 
              options={[{ id: 'en', label: 'English', value: 'en' },
                        { id: 'hi', label: 'हिन्दी', value: 'hi' }]} 
              onSelect={handleSelect} />
    </View>
    </View>
   
    {display==='introduction' && (<Intro lang={lang} dialogue={dialogue} handleIntroduction={handleIntroduction} />)}
    {display==='notification' && (<Notify lang={lang} dialogue={dialogue} handleIntroduction={handleNotification} />)}
 </View>);
};

const styles = StyleSheet.create({
 view:{ flex:1, paddingTop: 8 },
 titleView:{ alignItems:'center', paddingTop:10, paddingBottom:20 },
 title:{ color:'#ffffc6', fontWeight:'bold', paddingBottom:15 },
 img:{  width:190, height:20 },
 langView:{ flexDirection:'row', paddingLeft:20, paddingRight:20 },
 langPartition1:{ width:'65%' },
 langPartition2:{ width:'35%' }
});

export default Splash;