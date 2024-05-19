import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StringModalViewer } from '@AppComponent/StringModalViewer/index.js';

const LangDisplay = () =>{
    const lngTbl = [{ language: "Assamese", script: "Assamese" },
    { language: "Bengali", script: "Bengali" },
    { language: "Gujarati", script: "Gujarati" },
    { language: "Hindi", script: "Devanagari" },
    { language: "Kannada", script: "Kannada" },
    { language: "Kashmiri", script: "Kashmiri" },
    { language: "Konkani", script: "Devanagari" },
    { language: "Malayalam", script: "Malayalam" },
    { language: "Manipuri", script: "Bengali" },
    { language: "Marathi", script: "Devanagari" },
    { language: "Nepali", script: "Devanagari" },
    { language: "Odia", script: "Odia" },
    { language: "Punjabi", script: "Gurumukhi" },
    { language: "Sanskrit", script: "Devanagari" },
    { language: "Sindhi", script: "Devanagari or Arabic" },
    { language: "Tamil", script: "Tamil" },
    { language: "Telugu", script: "Telugu" },
    { language: "Urdu", script: "Persian" },
    { language: "Bodo", script: "Devanagari" },
    { language: "Dogri", script: "Devanagari" },
    { language: "Maithilli", script: "Devanagari" },
    { language: "Santhali", script: "Devanagari or Olchiki" }];

    return (<View>
        <StringModalViewer clickLabel="See Indian Languages Available" modalTitle="Indian Languages">
        <ScrollView style={{ marginBottom: 70 }}>
            <View style={{ paddingLeft:8, paddingRight:15 }}>
        <Text style={LangDisplayStyles.desc}>
            For the Language medium/literature of languages, the scripts to be used by the candidates will be as under -
            </Text>
            <View style={LangDisplayStyles.tblHead}>
                <View style={LangDisplayStyles.tblCol1}><Text style={LangDisplayStyles.tblHeadText}>##</Text></View>
                <View style={LangDisplayStyles.tblCol2}><Text style={LangDisplayStyles.tblHeadText}>Language</Text></View>
                <View style={LangDisplayStyles.tblCol3}><Text style={LangDisplayStyles.tblHeadText}>Script</Text></View>
            </View>
            {lngTbl?.map((lngDetails,index)=>{
                return (<View key={index} style={LangDisplayStyles.tblHead}>
                    <View style={LangDisplayStyles.tblCol1}><Text style={LangDisplayStyles.tblBodyText}>{index<9?('0'+(index+1)):(index+1)}</Text></View>
                    <View style={LangDisplayStyles.tblCol2}><Text style={LangDisplayStyles.tblBodyText}>{lngDetails?.language}</Text></View>
                    <View style={LangDisplayStyles.tblCol3}><Text style={LangDisplayStyles.tblBodyText}>{lngDetails?.script}</Text></View>
                </View>);
            })}
            <View style={LangDisplayStyles.tblHead}>
                <Text style={LangDisplayStyles.hglText}>Note:</Text>
                <Text style={LangDisplayStyles.simpleDesc}>For Santhali language, question paper will be printed in 
                Devanagari script; but candidates will be free to answer either in Devanagari script or in Olchiki.</Text>
            </View>
            </View>
         </ScrollView>
         </StringModalViewer>
    </View>);
};

const LangDisplayStyles = StyleSheet.create({ 
 desc:{ color: '#333', lineHeight: 22 },
 simpleDesc:{ lineHeight: 22 },
 tblHead:{ flexDirection:'row', marginTop: 10, flexWrap: 'wrap' },
 tblCol1:{ width:'20%' },
 tblCol2:{ width:'40%' },
 tblCol3:{ width:'40%' },
 tblHeadText:{ fontWeight: 'bold', color: '#333' },
 tblBodyText:{ color: '#333', lineHeight: 22 },
 hglText:{ color:'#333', fontWeight:'bold',  marginRight:5 }
});

export default LangDisplay;