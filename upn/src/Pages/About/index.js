import React from "react";
import { View, Text, ScrollView , StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../Navigation/Drawer/index.js';

const About = (props)=>{
    return (<View>
      <HamburgerIcon {...props}/>
      <ScrollView style={{ padding:15 }}>
         <Text style={{ fontSize:16, paddingBottom:6, fontWeight:'bold' }}>About UPSC Examination</Text>
         <Text>Union Public Service Commission (UPSC) is a Constitutional Body which is responsible for conducting various exams 
               to recruit individuals for various positions in the Government of India. Some of the important exams conducted by 
               UPSC include:</Text>
         <View style={{ paddingLeft:15, paddingTop:5 }}>
            <Text style={{ paddingTop:2}}>Civil Services Examination (CSE)</Text>
            <Text style={{ paddingTop:2}}>Indian Forest Service Examination (IFoSE)</Text>
            <Text style={{ paddingTop:2}}>Engineering Services Examination (ESE)</Text>
            <Text style={{ paddingTop:2}}>Combined Defence Services Examination (CDS)</Text>
            <Text style={{ paddingTop:2}}>National Defence Academy Examination (NDA)</Text>
            <Text style={{ paddingTop:2}}>Indian Economic Service Examination (IES)</Text>
            <Text style={{ paddingTop:2}}>Indian Statistical Service Examination (ISS)</Text>
            <Text style={{ paddingTop:2}}>Combined Medical Services Examination (CMS)</Text>
            <Text style={{ paddingTop:2}}>Naval Academy Examination (NA)</Text>
            <Text style={{ paddingTop:2}}>Combined Geoscientist and Geologist Examination (CGG)</Text>
            <Text style={{ paddingTop:2}}>Central Armed Police Forces Examination (CAPF)</Text>
            <Text style={{ paddingTop:2}}>Special Class Railway Apprentice (SCRA)</Text>
         </View>
      </ScrollView>
      </View>);
   };

const AboutStyle = StyleSheet.create({ 
   
});

export default About;