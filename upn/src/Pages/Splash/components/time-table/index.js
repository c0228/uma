import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AlertModal from '@AppComponent/AlertModal/index.js';
import BEHeader, { HeaderTitle } from './../../utils/BEHeader.js';
import BEFooter from './../../utils/BEFooter.js';

const TimeTable = () =>{
 const navigation = useNavigation();
 return ( <View style={{ flex:1, backgroundColor:'#fff' }}>
    <BEHeader formSize={4} activeForm={3} />
    <HeaderTitle 
            title="Set your Weekly Availability" 
            subTitle="Specify the Examinations that you are planning to pursue in the Upcoming Years -" />
    <ScrollView style={{ paddingLeft:5, marginBottom:5, paddingRight:5 }}>
      <View style={{ padding: 15 }}>
        <View style={{ flexDirection:'row' }}>
          <View style={{ width:'30%' }}>
            <Text style={{ color:'#000', fontWeight:'bold', fontSize:15 }}>Monday</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    <BEFooter 
        previousForm={()=>{
          navigation?.navigate('SS_PrepSubj', { });
        }} 
        nextForm={()=>{
         // navigation?.navigate('SS_TimeTable', { });
        }} />
    </View>);
};

export default TimeTable;