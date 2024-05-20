import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';
import BEHeader, { HeaderTitle } from './../../utils/BEHeader.js';
import BEFooter from './../../utils/BEFooter.js';

const Avatar = () =>{
    const route = useRoute();
    const { gender } = route?.params;
    const images = {
        "Male":{
            "1": require('@Assets/avatar/male1.jpg'),
            "2": require('@Assets/avatar/male2.jpg'),
            "3": require('@Assets/avatar/male3.jpg'),
            "4": require('@Assets/avatar/male4.jpg'),
            "5": require('@Assets/avatar/male5.jpg'),
            "6": require('@Assets/avatar/male6.jpg'),
            "7": require('@Assets/avatar/male7.jpg'),
            "8": require('@Assets/avatar/male8.jpg')
        },
        "Female":{
            "1": require('@Assets/avatar/female1.jpg'),
            "2": require('@Assets/avatar/female2.jpg'),
            "3": require('@Assets/avatar/female3.jpg'),
            "4": require('@Assets/avatar/female4.jpg'),
            "5": require('@Assets/avatar/female5.jpg'),
        }
      };
    const getImage = (gender, imageName) => images?.[gender]?.[imageName];

 const navigation = useNavigation();
 return (<View style={{ flex:1, backgroundColor:'#fff' }}>
 <BEHeader formSize={5} activeForm={0} />
 <HeaderTitle 
         title="Choose your Avatar" 
         subTitle="Please Select your Perfect Avatar for a Unique Social Media Experience -" />
 <ScrollView style={{ paddingLeft:5, marginBottom:5, paddingRight:5 }}>
   <View style={{ flexDirection:'row', flexWrap:'wrap' }}>
        {gender && Object.keys(images?.[gender])?.map((img, index)=>{
            return (<View key={index} style={{ padding:15 }}>
             <Image source={getImage(gender, img)} style={{ borderRadius:50, borderColor:'#ccc', 
                borderWidth:1, width:75, height:75 }} />
            </View>);
        })}
    </View>
    </ScrollView>
    <BEFooter 
        label={{ previous:'Previous', next:'Next' }}
        previousForm={()=>{
          navigation?.navigate('SS_Authentication', { });
        }} 
        nextForm={()=>{
         navigation?.navigate('SS_EduStatus', { });
        }} />
    </View>);
};

export default Avatar;