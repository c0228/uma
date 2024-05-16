import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AlertModal from '@AppComponent/AlertModal/index.js';
import BEHeader, { HeaderTitle } from './../../utils/BEHeader.js';
import BEFooter from './../../utils/BEFooter.js';

const PrepareSubjects = () =>{
 const navigation = useNavigation();
 return ( <View style={{ flex:1, backgroundColor:'#fff' }}>
    <BEHeader formSize={4} activeForm={2} />
    <HeaderTitle 
            title="Subjects to Prepare" 
            subTitle="Specify the Examinations that you are planning to pursue in the Upcoming Years -" />
    <BEFooter 
        previousForm={()=>{
          navigation?.navigate('SS_ExamTarget', { });
        }} 
        nextForm={()=>{
         navigation?.navigate('SS_TimeTable', { });
        }} />
    </View>);
};

export default PrepareSubjects;