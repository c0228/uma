import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BEHeader, { HeaderTitle } from './../../utils/BEHeader.js';
import BEFooter from './../../utils/BEFooter.js';

const Avatar = () =>{
 const navigation = useNavigation();
 return (<View style={{ flex:1, backgroundColor:'#fff' }}>
 <BEHeader formSize={5} activeForm={0} />
 <HeaderTitle 
         title="Choose your Avatar" 
         subTitle="Please Select your Perfect Avatar for a Unique Social Media Experience -" />
 <ScrollView style={{ paddingLeft:5, marginBottom:5, paddingRight:5 }}>
   <View style={{ padding:15 }}>
    
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