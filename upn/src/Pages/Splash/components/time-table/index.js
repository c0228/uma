import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AlertModal from '@AppComponent/AlertModal/index.js';
import BEHeader, { HeaderTitle } from './../../utils/BEHeader.js';
import BEFooter from './../../utils/BEFooter.js';

const TimeTable = () =>{
 const navigation = useNavigation();
 return ( <View style={{ flex:1, backgroundColor:'#fff' }}>
    <BEHeader formSize={4} activeForm={3} />
    <HeaderTitle 
            title="Plan your Time Table" 
            subTitle="Specify the Examinations that you are planning to pursue in the Upcoming Years -" />
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