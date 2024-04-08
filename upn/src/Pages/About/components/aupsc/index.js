import React from "react";
import { View, Text, ScrollView , StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../../../Navigation/Drawer/index.js';
import { Order, Li } from "e-ui-react-native";

const data = {
 title: "About UPSC Examination",
 desc: "Union Public Service Commission (UPSC) is a Constitutional Body which is responsible for \
    conducting various exams to recruit individuals for various positions in the Government of India. Some of \
    the important exams conducted by UPSC include:",
 exams:{
    "Civil Services Examination (CSE)":"This is one of the most prestigious exams in India. It is conducted annually to recruit candidates for the Indian Administrative Service (IAS), Indian Foreign Service (IFS), Indian Police Service (IPS), and other central services.",
    "Indian Forest Service Examination (IFoSE)":"This exam is also conducted by UPSC but in conjunction with the Civil Services Examination. Successful candidates are recruited for the Indian Forest Service.",
    "Engineering Services Examination (ESE)":"Engineering Services Examination (ESE), formerly known as the Indian Engineering Services (IES) exam, it is conducted to recruit engineers for various government departments.",
    "Combined Defence Services (CDS) Examination":"This exam is conducted for recruitment into the Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), and Officers Training Academy (OTA).",
    "National Defence Academy (NDA) Examination":"This exam is conducted for admission to the Army, Navy, and Air Force wings of the National Defence Academy. It is a gateway for young men to join the defence forces as officers.",
    "Indian Economic Service (IES) Examination":"Indian Economic Service (IES) Examination is conducted by the Union Public Service Commission (UPSC) to recruit economists to various government departments and ministries in India.",
    "Indian Statistical Service (ISS) Examination":"Indian Statistical Service (ISS) Examination is conducted by the Union Public Service Commission (UPSC) to recruit statisticians to various government departments and ministries in India.",
    "Combined Medical Services (CMS) Examination":"This exam is conducted for the recruitment of medical officers in various government organizations like the Indian Railways, Indian Ordnance Factories, Municipal Corporation of Delhi, New Delhi Municipal Council, etc.",
    "Naval Academy (NA) Examination":"This exam is conducted for admission to the Indian Naval Academy, alongside the NDA examination, but specifically for candidates aspiring to join the Indian Navy.",
    "Combined Geoscientist and Geologist (CGG) Examination":"The Combined Geoscientist and Geologist (CGG) Examination is conducted by the Union Public Service Commission (UPSC) to recruit geologists, geophysicists, and hydrogeologists for various government departments and ministries in India.",
    "Central Armed Police Forces (CAPF) Examination":"The Central Armed Police Forces (CAPF) Examination is conducted by the Union Public Service Commission (UPSC) to recruit Assistant Commandants in various paramilitary forces in India.",
    "Special Class Railway Apprentice (SCRA)":"It was conducted for the recruitment of officers in the Mechanical Engineering department of the Indian Railways."
 }
};

const Aupsc = (props)=>{
    return (<View style={{ flex:1, backgroundColor:'#fff'  }}>
    <HamburgerIcon {...props}/>      
    <ScrollView style={{ paddingLeft:15, paddingRight: 15 }}> 
       <Text style={[AupscStyle.mainTitle, AupscStyle.textCenter]}>{data?.title}</Text>
       <Text style={AupscStyle.desc}>{data?.desc}</Text>
       <View>
          <Order style={AupscStyle.list}>
            {Object.keys(data?.exams).map((key, index)=>{
              return (<Li key={index} style={AupscStyle.list}>{key}</Li>);
            })}
          </Order>
       </View>
       <View style={{ paddingBottom: 35 }}>
       {Object.entries(data?.exams).map(([key, val], index)=>{
         return (<View key={index} style={{ paddingTop: 15 }}>
            <Text style={AupscStyle.title}>{key}</Text>
            <Text style={AupscStyle.desc}>{val}</Text>
            </View>);
       })}
       </View>
    
    </ScrollView>
    </View>);
};

const AupscStyle = StyleSheet.create({ 
    textCenter: { textAlign: 'center' },
    mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22 },
    title: { fontSize:16, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22 },
    desc: { color:'#333', lineHeight: 20 },
    list:{ paddingTop:2, color:'#333', lineHeight: 20 }
 });

 export default Aupsc;