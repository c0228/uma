import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Order, Li } from "e-ui-react-native";

const MainExam = ()=>{
 const data = {
    "Paper - A":{
        "title": "Indian Language",
        "marks": 250,
        "syllabus":["Comprehension of given passages", "Precis Writing", "Usage and Vocabulary", "Short Essays", 
            "Translation from English to the Indian Language and vice-versa"]
    },
    "Paper - B":{
        "title": "English",
        "marks": 250,
        "syllabus":["Comprehension of given passages", "Precis Writing", "Usage and Vocabulary", "Short Essays"]
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