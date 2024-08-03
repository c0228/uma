import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Order, Li } from "e-ui-react-native";
import { StringModalViewer } from '@AppComponent/StringModalViewer/index.js';

const MainExam = ()=>{
 const data = {
    "Paper - A":{
        "title": "Indian Language",
        "marks": 250,
        "syllabus":["Comprehension of given passages", "Precis Writing", "Usage and Vocabulary", "Short Essays", 
            "Translation from English to the Indian Language and vice-versa"],
         "scoringTipsList":["It is advised that you should choose the language wisely. Choose the one which you have a more grip on.",
         "Don’t compromise on your other subjects for the language as you just have to score 75 marks to get it cleared",
         "Bring writing and speaking the language into your habit so that you don’t fall behind at the time of giving the paper"]
    },
    "Paper - B":{
        "title": "English",
        "marks": 250,
        "syllabus":["Comprehension of given passages", "Precis Writing", "Usage and Vocabulary", "Short Essays"],
        "scoringTipsList":["Even if you are confident about your English, you have to brush up the grammar rules.",
            "Make sure that you practice the English paper from the previous year Paper B for UPSC.",
            "Time your paper well so that you don’t miss out on any answer."]
    }
 }

 return (<View style={MainExamStyles.examView}>
    <Text style={MainExamStyles.mainTitle}>Part B : Main Examination</Text>
    {Object.entries(data).map(([key, value],index) =>{
          return (<View key={index} style={MainExamStyles.padBot15}>
          <View style={MainExamStyles.examPaperView}>
            <View style={MainExamStyles.examSubTitle}>
              <Text style={[MainExamStyles.title, MainExamStyles.fs14]}>{key}</Text>
              <Text style={[MainExamStyles.subTitle, MainExamStyles.fs14]}>{value?.title}</Text>
            </View>
            <View style={MainExamStyles.examSubTitle}>
             <Text style={[MainExamStyles.title, MainExamStyles.fs14, MainExamStyles.textAlignRight]}>{value?.marks} Marks</Text>
            </View>
         </View>
         <Order>{value?.syllabus?.map((v,i)=>(<Li key={i} style={MainExamStyles.examList}>{v}</Li>))}</Order>
         {value?.scoringTipsList?.length>0 && (<StringModalViewer clickLabel={"Scoring Tips for "+key} modalTitle={"Scoring Tips ("+key+")"}>
            <ScrollView style={{ paddingBottom: 15 }}>
         <Order style={{ paddingRight: 15 }}>
            {value?.scoringTipsList?.map((st,i)=>(<Li key={i} style={MainExamStyles.examList}>{st}</Li>))}
         </Order>
         </ScrollView>
         </StringModalViewer>)}
         </View>);
    })}
 </View>);
};

const MainExamStyles = StyleSheet.create({ 
 examView:{ paddingLeft:6, paddingRight: 8 },
 examPaperView:{ flexDirection:'row', paddingBottom:15 },
 examSubTitle: { width:'50%' },
 examList:{ marginBottom: 8, color:'#000', lineHeight: 22 },
 mainTitle:{ textAlign:'center', fontWeight:'bold', color:'#333', paddingTop:15, paddingBottom:15, fontSize: 16 },
 padBot15:{ paddingBottom:15 },
 textAlignRight:{ textAlign:'right' },
 fs14:{ fontSize: 14 },
 title:{ fontWeight:'bold', color:'#333' },
 subTitle:{ color:'#333' }
});

export default MainExam;