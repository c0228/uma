import React, { useEffect } from "react";
import { View, Text, BackHandler, ScrollView, StyleSheet } from "react-native";
import { getAppContext } from '@AdvancedTopics/ReactContext/index.js';
import EduDetails from './components/EduDetails/index.js';
import BEHeader, { HeaderTitle } from './../BEHeader.js';
import BEFooter from './../BEFooter.js';

const EduStatus = () =>{
 const { contextData, setContextData } = getAppContext();
 const accountInfo = contextData?.userDetails?.accountInfo;
 const backButton = () =>{
    const backHandler = BackHandler.addEventListener('hardwareBackPress',  () => { // onBack Press
      setContextData({ displayScreen: 'AVATAR' }); // Move to Introduction
      return true; // Prevent default back action
    });
    return () => backHandler.remove();
   }; 
 useEffect(() => { backButton(); }, []);
 return (<View style={styles.eduStatusView}>
    <BEHeader name={accountInfo?.surname+" "+accountInfo?.name} formSize={5} activeForm={1} />
    <HeaderTitle 
            title="Share your Education Details" 
            subTitle="It helps App to understand your background and Customize resources to prepare effectively for their exams and academic challenges -" />
    <ScrollView style={styles.eduStatusPage}>
     <EduDetails />
    </ScrollView>
    <BEFooter 
        label={{ previous:'Previous', next:'Next' }}
        previousForm={()=>{ setContextData({ displayScreen: 'AVATAR' }); }} 
        nextForm={()=>{ setContextData({ displayScreen: 'EXAMTARGET' }); }} />
 </View>);
};

const styles = StyleSheet.create({
 eduStatusView: { flex:1, backgroundColor:'#fff' },
 eduStatusPage: { paddingLeft:5, marginTop:5, marginBottom:5, paddingRight:5 }
});

export default EduStatus;