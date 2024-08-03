import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Order, Li } from "e-ui-react-native";

const PreliminaryExam = () =>{
 const data = {
    "Paper-I":{
        "marks": 200,
        "duration": 2,
        "syllabus":["Current events of national and international importance.",
                "History of India and Indian National Movement.",
                "Indian and World Geography-Physical, Social, Economic Geography of India and the World.",
                "Indian Polity and Governance-Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc. ",
                "Economic and Social Development-Sustainable Development, Poverty, Inclusion, Demographics, Social Sector Initiatives, etc.",
                "General issues on Environmental ecology, Bio-diversity and Climate Change - that do not require subject specialization",
                "General Science."]
    },
    "Paper-II":{
        "marks": 200,
        "duration": 2,
        "syllabus":["Comprehension", "Interpersonal skills including communication skills", "Logical reasoning and analytical ability",
            "Decision making and problem solving","General mental ability",
            "Basic numeracy (numbers and their relations, orders of magnitude, etc.) (Class X level), Data interpretation (charts, graphs, tables, data sufficiency etc. — Class X level)"]
        }
 };
 const note = ["The questions will be of multiple choice, objective type.",
            "It is mandatory for the candidate to appear in both the Papers of Civil Services (Prelim) Examination for the purpose of evaluation. Therefore a candidate will be disqualified in case he/she does not appear in both the papers of Civil Services (Prelim) Examination.",
            "Paper-II of the Civil Services (Preliminary) Examination will be a qualifying paper with minimum qualifying marks fixed at 33%."];
 
 const Paper = ()=>{
    return (<View style={PreliminaryExamStyles.examView}>
        <Text style={PreliminaryExamStyles.mainTitle}>Part A : Preliminary Examination</Text>
        {Object.entries(data).map(([key, value],index) =>{
          return (<View key={index} style={PreliminaryExamStyles.padBot15}>
          <View style={PreliminaryExamStyles.examPaperView}>
            <View style={PreliminaryExamStyles.examSubTitle}>
              <Text style={[PreliminaryExamStyles.title, PreliminaryExamStyles.fs14]}>{key} ({value?.marks} Marks)</Text>
            </View>
            <View style={PreliminaryExamStyles.examSubTitle}>
             <Text style={[PreliminaryExamStyles.title, PreliminaryExamStyles.fs14, PreliminaryExamStyles.textAlignRight]}>Duration: {value?.duration} hours</Text>
            </View>
         </View>
         <Order>{value?.syllabus?.map((v,i)=>(<Li key={i} style={PreliminaryExamStyles.examList}>{v}</Li>))}</Order>
         </View>);
        })}
        <View style={PreliminaryExamStyles.padBot15}>
        <Text style={PreliminaryExamStyles.note}>Note:</Text>
         <Order>{note?.map((n,i)=>(<Li key={i} style={PreliminaryExamStyles.examList}>{n}</Li>))}</Order>
         </View>
        </View>);
 };
 return (<View>
    <Paper />
 </View>);
};

const PreliminaryExamStyles = StyleSheet.create({
 examView:{ paddingLeft:6, paddingRight: 8 },
 examPaperView:{ flexDirection:'row', paddingBottom:15 },
 examSubTitle: { width:'50%' },
 examList:{ marginBottom: 8, color:'#000', lineHeight: 22 },
 mainTitle:{ textAlign:'center', fontWeight:'bold', color:'#333', paddingTop:15, paddingBottom:15, fontSize: 16 },
 textAlignRight:{ textAlign:'right' },
 padBot15:{ paddingBottom:15 },
 fs14:{ fontSize: 14 },
 title:{ fontWeight:'bold', color:'#333' },
 note:{ paddingBottom:5, fontWeight:'bold', color:'#333' }
});

export default PreliminaryExam;