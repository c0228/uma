import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { StringModalViewer } from '@AppComponent/StringModalViewer/index.js';

const OptSubjects = () =>{
 const optSubTbl = ["Agriculture", "Animal Husbandry and Veterinary Science", "Anthropology", "Botany", "Chemistry", "Civil Engineering",
    "Commerce and Accountancy", "Economics", "Electrical Engineering", "Geography", "Geology", "History", "Law", "Management", "Mathematics",
    "Mechanical Engineering", "Medical Science", "Philosophy", "Physics", "Political Science and International Relations", "Psychology",
    "Public Administration", "Sociology", "Statistics", "Zoology"];

    return (<View>
        <StringModalViewer clickLabel="See Optional Subjects Available" modalTitle="Optional Subjects">
        <ScrollView style={{ marginBottom: 70 }}>
            <View style={{ paddingLeft:8, paddingRight:15 }}>
        <Text style={OptSubjectStyles.desc}>
            List of Optional Subjects for Main Examination -
            </Text>
            <View style={OptSubjectStyles.tblHead}>
                <View style={OptSubjectStyles.tblCol1}><Text style={OptSubjectStyles.tblHeadText}>##</Text></View>
                <View style={OptSubjectStyles.tblCol2}><Text style={OptSubjectStyles.tblHeadText}>Optional Subjects</Text></View>
            </View>
            {optSubTbl?.map((optSub,index)=>{
                return (<View key={index} style={OptSubjectStyles.tblHead}>
                    <View style={OptSubjectStyles.tblCol1}><Text style={OptSubjectStyles.tblBodyText}>{index<9?('0'+(index+1)):(index+1)}</Text></View>
                    <View style={OptSubjectStyles.tblCol2}><Text style={OptSubjectStyles.tblBodyText}>{optSub}</Text></View>
                </View>);
            })}
            <View style={OptSubjectStyles.tblHead}>
                <Text style={OptSubjectStyles.hglText}>Note:</Text>
                <Text style={OptSubjectStyles.simpleDesc}>We have to choose two Subjects as an Optional for Main Examination for 
                Paper - VI and Paper - VII.</Text>
            </View>
         </View>
         </ScrollView>
         </StringModalViewer>
    </View>);
};

const OptSubjectStyles = StyleSheet.create({ 
 desc:{ color: '#333', lineHeight: 22 },
 simpleDesc:{ lineHeight: 22 },
 tblHead:{ flexDirection:'row', marginTop: 10, flexWrap: 'wrap' },
 tblCol1:{ width:'20%' },
 tblCol2:{ width:'70%' },
 tblHeadText:{ fontWeight: 'bold', color: '#333' },
 tblBodyText:{ color: '#333', lineHeight: 22 },
 hglText:{ color:'#333', fontWeight:'bold',  marginRight:5 }
});

export default React.memo(OptSubjects);