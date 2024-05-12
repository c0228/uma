import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Select } from '@AppFormElement/Select/index.js';

const Header = (props) =>{
 const [imageUrl, setImgUrl] = useState();
 const loadImage = async () => {  
    let imageModule;
    if(props?.color==='voilet'){ imageModule = await require('@Assets/img/logo-voilet.png'); }
    if(props?.color==='indigo'){ imageModule = await require('@Assets/img/logo-indigo.png'); }
    if(props?.color==='blue'){ imageModule = await require('@Assets/img/logo-blue.png'); }
    if(props?.color==='green'){ imageModule = await require('@Assets/img/logo-green.png'); }
    setImgUrl(imageModule);
  };

 useEffect(() => {
    loadImage();
  }, [props?.color]);

 return (<View>
    {imageUrl && (<View style={styles.titleView}>
        <Text style={styles.title}>{props?.title}</Text>
        <Image style={styles.img} source={imageUrl} />
    </View>)}
    <View style={styles.langView}>
    <View style={styles.langPartition1}></View>
    <View style={styles.langPartition2}>
    <Select name="language" 
        style={{ backgroundColor:'white' }}
              placeholder="Language" 
              popupTitle="Choose your Language"
              value={props?.lang} 
              options={[{ id: 'en', label: 'English', value: 'en' },
                        { id: 'hi', label: 'हिन्दी', value: 'hi' }]} 
              onSelect={props?.handleSelect} />
    </View>
    </View>

 </View>);
};

const styles= StyleSheet.create({
 titleView:{ alignItems:'center', paddingTop:10, paddingBottom:20 },
 title:{ color:'#ffffc6', fontWeight:'bold', paddingBottom:15 },
 img:{  width:190, height:20 },
 langView:{ flexDirection:'row', paddingLeft:20, paddingRight:20 },
 langPartition1:{ width:'65%' },
 langPartition2:{ width:'35%' }
});

export default Header;