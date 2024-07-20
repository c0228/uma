import React, { useEffect } from 'react';
import { View, Text, ScrollView, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAppContext } from '@AdvancedTopics/ReactContext/index.js';
import { Select } from '@AppFormElement/Select/index.js';
import AlertModal from '@AppComponent/AlertModal/index.js';
import { Range } from '@AppUtils/ArrayManagement.js';
import BEHeader, { HeaderTitle } from './../BEHeader.js';
import BEFooter from './../BEFooter.js';

const TimeTable = () =>{
 const { contextData, setContextData } = getAppContext();
 const accountInfo = contextData?.userDetails?.accountInfo;
 const navigation = useNavigation();
 const backButton = () =>{
  const backHandler = BackHandler.addEventListener('hardwareBackPress',  () => { // onBack Press
    setContextData({ displayScreen: 'PREPSUBJ' }); // Move to Introduction
    return true; // Prevent default back action
  });
  return () => backHandler.remove();
 }; 
 useEffect(() => { backButton(); }, []);
 const Header = () =>{
  return (<View style={{ flexDirection:'row', backgroundColor:'#f1f1f1', paddingTop:10,  paddingBottom:10, borderTopColor:'#ccc', borderTopWidth:1, borderBottomColor:'#ccc', borderBottomWidth:1 }}>
  <View style={{ width:'50%' }}>
    <Text style={{ color:'#000', paddingLeft:10,  fontWeight:'bold', fontSize:14, textTransform: 'uppercase' }}>Weekday</Text>
  </View>
  <View style={{ width:'50%' }}>
    <Text style={{ color:'#000', fontWeight:'bold', fontSize:14, textTransform: 'uppercase' }}>Time you can Spend</Text>
  </View>
</View>);
 };

 const Body = ({ day }) =>{
  const duration =[{ id:'1 hour', label:'1 hour', value:'1 hour' }, ...Range(2, 16)?.map((deg)=>{ return { id:deg+' hours', label:deg+' hours', value: deg+' hours' }; })];
  return (<View style={{ flexDirection:'row', paddingTop:10 }}>
  <View style={{ width:'50%', justifyContent:'center' }}>
    <Text style={{ color:'#000', paddingLeft:10, fontWeight:'bold', fontSize:14 }}>{day}</Text>
  </View>
  <View style={{ width:'50%' }}>
  <Select name="spentHours" 
     label="" 
     popupTitle="Choose your Duration"
     placeholder="Time Duration" 
     value={[]} 
     options={duration} 
     onSelect={(value)=>{
      
     }} />
  </View>
</View>);
 };

 return ( <View style={{ flex:1, backgroundColor:'#fff' }}>
    <BEHeader name={accountInfo?.surname+" "+accountInfo?.name} formSize={5} activeForm={4} />
    <HeaderTitle 
            title="Set your Weekly Availability" 
            subTitle="Please specify your available study hours per week so that we can effectively plan your study timetable." />
    <ScrollView style={{ paddingLeft:5, marginBottom:5, paddingRight:5 }}>
      <View style={{ padding: 15 }}>
          <Header />
          <Body day="Sunday" />
          <Body day="Monday" />
          <Body day="Tuesday" />
          <Body day="Wednesday" />
          <Body day="Thursday" />
          <Body day="Friday" />
          <Body day="Saturday" />
      </View>
    </ScrollView>
    <BEFooter 
        label={{ previous:'Previous', next:'Submit' }}
        previousForm={()=>{
          setContextData({ displayScreen: 'PREPSUBJ' });
        }} 
        nextForm={()=>{
         navigation?.navigate('SS_Main', { from: 'SS_Extra' });
        }} />
    </View>);
};

export default TimeTable;