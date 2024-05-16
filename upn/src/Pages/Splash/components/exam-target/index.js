import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from '@AppFormElement/Button/index.js';
import { Select } from '@AppFormElement/Select/index.js';
import AlertModal from '@AppComponent/AlertModal/index.js';
import BEHeader, { HeaderTitle } from './../../utils/BEHeader.js';
import BEFooter from './../../utils/BEFooter.js';

const ExamTarget = () =>{
 const navigation = useNavigation();
 const exams= ['Civil Service Examination (CSE)','Indian Forest Service Examination (IFoSE)','Engineering Services Examination (ESE)',
    'Combined Defence Services (CDS) Examination', 'National Defence Academy (NDA) Examination','Indian Economic Service (IES) Examination',
    'Indian Statistical Service (ISS) Examination','Combined Medical Services (CMS) Examination','Naval Academy (NA) Examination',
    'Combined Geoscientist and Geologist (CGG) Examination', 'Central Armed Police Forces (CAPF) Examination'];
 const [examList, setExamList] = useState([]);
 const [alertMessage, setAlertMessage] = useState("");

 useEffect(()=>{
    console.log("alertMessage", alertMessage);
  },[alertMessage]);

 useEffect(()=>{
   console.log("examList", examList);
 },[examList]);

 const selectedExam= (value)=>{
    // Check if the object exists in the array
    const index = examList.findIndex(item => item?.exam === value);
    const sOptions = [...examList];
    console.log("sOptions", sOptions, "index", index);
    if (index !== -1) { // Object exists, so remove it from the array
        sOptions.splice(index, 1);
    } else { // Object doesn't exist, so add it to the array
        sOptions.push({ exam: value });
    }
    setExamList(sOptions);
    console.log("sOptions [out]", sOptions);
 };

 const addExpectedYear = (examName, year) =>{
  const eList = examList.map(list => {
    if (list.exam === examName) {
      return { ...list, year };
    } else {
        return list;
    }
  });
  setExamList(eList);
 };

 const [modalVisible, setModalVisible] = useState(false);

 const AlertDisplayView = () =>{
  return (<View>
    {<AlertModal title="Alert Message" visible={modalVisible} onClose={(isVisible) => setModalVisible(isVisible)}>
       <View style={{ paddingLeft:5, paddingRight:5, paddingBottom:15 }}>
        <Text style={{ lineHeight:22 }}>{alertMessage}</Text>
        </View>
    </AlertModal>}
  </View>);
 };

 return (
    <View style={{ flex:1, backgroundColor:'#fff' }}>
        <BEHeader formSize={4} activeForm={1} />
        <HeaderTitle 
            title="Choose your Targeted Exams" 
            subTitle="Specify the Examinations that you are planning to pursue in the Upcoming Years -" />
    
 <ScrollView style={{ paddingLeft:5, marginBottom:5, paddingRight:5 }}>
    {exams?.map((exam,index)=>{
        const isSelected = examList?.some((selected) => selected?.exam === exam);
        return (<View key={index}>
        <View style={ExamTargetStyle.examList}>
            <View style={{ width:'15%' }}>
              <Switch value={isSelected} onValueChange={() =>selectedExam(exam)} />
            </View>
            <View style={{ width:'85%' } }>
                <View>
                    <TouchableOpacity onPress={()=>selectedExam(exam)}>
                    <Text style={ExamTargetStyle.examTitle}>{exam}</Text>
                    </TouchableOpacity>
                </View>
                {(isSelected) && <View style={ExamTargetStyle.examParams}>
                    <View style={ExamTargetStyle.examRequired}>
                        <Text style={ExamTargetStyle.fontBold}>Required Bachelor's Degree for Exam</Text>
                    </View>
                    <View style={ExamTargetStyle.examExpected1}>
                        <View style={ExamTargetStyle.examExpectedCol1}>
                            <Text style={ExamTargetStyle.examExpectedCol1Title}>Tell us the year, you are planning to take the Exam.</Text>
                        </View>
                        <View style={ExamTargetStyle.examExpectedCol2}>
                        <Select name="expectedYear"
                        label="Expected Year"
                    placeholder="Year" 
                    options={[{ id: '2024', label: '2024', value: '2024' },
                                { id: '2025', label: '2025', value: '2025' }]} 
                    onSelect={(year)=>{
                        addExpectedYear(exam, year)
                    }} />
                    </View>
                    
                    </View>
                    <View style={ExamTargetStyle.examExpected2}>
                        <Text style={ExamTargetStyle.examExpected2Title}>This helps the App to plan your Study Time table accordingly.</Text>
                    </View>
                </View>}
            </View>
            </View>
            </View>);
    })}
</ScrollView>
 <BEFooter previousForm={()=>navigation?.navigate('SS_EduStatus', { })} nextForm={()=>{
                const undefinedList = examList?.filter(exam => exam?.year === undefined).map((list)=>list?.exam);
                console.log("undefinedList", undefinedList);
                if(undefinedList?.length>0){
                    setAlertMessage("You have not specified \"Expected Year\" for "+undefinedList.join(", ")+
                        ". Please mention it, so that App plans your \"Study Timetable\".");
                    setModalVisible(true);
                } else if(examList?.length === 0) {
                    setAlertMessage("Please Select an Exam");
                    setModalVisible(true);
                } else {
                    navigation?.navigate('SS_PrepSubj', { });
                }
            }} />

    <AlertDisplayView />
</View>);
};

const ExamTargetStyle = StyleSheet.create({ 
 mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22, textAlign: 'center' },
 examList:{ flex:1, paddingTop:10, paddingBottom:8, flexDirection:'row' },
 examTargetDesc: { marginTop:5, marginBottom:2, fontStyle:'italic', lineHeight:22, paddingLeft:10, paddingRight:10, color:'#333', textAlign:'center' },
 examTitle:{ fontSize:15, lineHeight:22, color:'#555', fontWeight:'bold', fontStyle:'italic' },
 examParams:{ width:'90%', marginTop:6, borderWidth:1, borderRadius:5, borderColor:'#ccc', 
 padding:10, backgroundColor:'#fcfcfc' },
 examRequired:{ width:'100%', justifyContent:'center', flexDirection:'row', paddingBottom:10 },
 fontBold:{ fontWeight:'bold' },
 examExpected1:{ flexDirection:'row', paddingBottom:10 },
 examExpectedCol1:{ width:'50%', paddingRight:10, borderRightWidth:1, borderColor:'#ccc'  },
 examExpectedCol1Title:{ lineHeight:22, fontSize:14, flex:1 },
 examExpectedCol2:{ width:'50%', paddingLeft:10  },
 examExpected2:{ width:'100%', flexDirection:'row' },
 examExpected2Title:{ lineHeight:22, fontStyle:'italic' }
});

export default ExamTarget;