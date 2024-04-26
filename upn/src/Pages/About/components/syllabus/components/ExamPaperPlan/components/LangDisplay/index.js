import React, { useState } from "react";
import { View, Text,TouchableOpacity, StyleSheet } from "react-native";
import Modal from './../../../../../../../../Components/Modal/index.js';

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

const [openModal, setOpenModal] = useState(false);

    return (<View>
        <TouchableOpacity>
            <Text style={LangDisplayStyles.hyperlink} onPress={()=>setOpenModal(true)}>See Indian Languages Available</Text>
        </TouchableOpacity>
        <Modal title="Indian Languages" visible={openModal}
        onClose={(isVisible) => setOpenModal(isVisible)}>
        <View>
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
         </Modal>
    </View>);
};

const LangDisplayStyles = StyleSheet.create({ 
 hyperlink :{ color:'red', textDecorationLine:'underline', paddingTop:5, paddingBottom:5 },
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