import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Select } from '@AppFormElement/Select/index.js';
import { Form } from '@AppFormElement/Form/index.js';
import AlertModal from '@AppComponent/AlertModal/index.js';
import BEHeader, { HeaderTitle } from './../../utils/BEHeader.js';
import BEFooter from './../../utils/BEFooter.js';
import EduDegrees from '@StaticData/en/edu-degrees.json';

const EduStatus = () =>{
 const navigation = useNavigation();
 const [educationDetails, setEducationDetails] = useState({});
 const [test, setTest] = useState('');

 useEffect(()=>{
  console.log("educationDetails", educationDetails);
 },[educationDetails]);

 const EducationStatus = () =>{
  const handleChange = (value, status) =>{
    console.log("handleChange", value);
    if (value) {
      setEducationDetails({ status: status });
    } else {
      const { status, ...newEducationDetails} = educationDetails;
      setEducationDetails(newEducationDetails);
    }
  };
  const SwitchOption = ({ label, value }) =>{
    return (<View style={{ width:'50%', flexDirection:'row' }}>
    <Switch value={educationDetails?.status === value} onValueChange={(val) =>handleChange(val, value)} />
    <TouchableOpacity onPress={()=>handleChange(!(educationDetails?.status === value), value)}>
      <Text style={{ color:'#333' }}>{label}</Text>
    </TouchableOpacity>
  </View>);
  };

  return (<View>
          <Text style={{ fontSize:15, fontWeight:'bold', color:'#333' }}>Mention your Education Status</Text>
          <View style={{ flexDirection:'row', paddingTop:8 }}>
            <SwitchOption label="Still Studying" value="STUDYING" />
            <SwitchOption label="Completed" value="COMPLETED" />
          </View>
  </View>);
 };

 const EduStudyingView = () =>{
  return (<View>
    <Select name="highestDegree" 
      label="Mention your Current Education" 
      popupTitle="Select your Education"
      placeholder="Select your Education" 
      value={educationDetails?.educationLevel} 
      options={['Class 06', 'Class 07', 'Class 08', 'Class 09', 'Class 10', 'Class 11', 
        'Class 12', 'Bachelor Degree', 'Master Degree']?.map((deg)=>{ return { id:deg, label:deg, value: deg }; })} 
      onSelect={(value)=>{
        console.log("value", value);
        setEducationDetails({ ...educationDetails, educationLevel: value });
      }} />
  </View>);
 };

 const EduCompletedView = () =>{
  return (<View>
    <Select name="highestDegree2" 
      label="What is your highest Degree?" 
      popupTitle="Choose your Highest Degree"
      placeholder="Choose your Highest Degree" 
      value={[]} 
      options={Object.keys(EduDegrees)?.map((deg)=>{
        return { id:deg, label:deg, value: deg };
      })} 
      onSelect={()=>{
       
      }} />
  </View>);
 };

 return ( <View style={{ flex:1, backgroundColor:'#fff' }}>
    <BEHeader formSize={4} activeForm={0} />
    <HeaderTitle 
            title="Share your Education Details" 
            subTitle="It helps App to understand your background and Customize resources to prepare effectively for their exams and academic challenges -" />
    <ScrollView style={{ paddingLeft:5, marginBottom:5, paddingRight:5 }}>
      <View style={{ padding:15 }}>
         <EducationStatus />
         <View style={{ paddingTop: 15 }}>
          {educationDetails?.status === "STUDYING" && (<EduStudyingView />)}
          {educationDetails?.status === "COMPLETED" && (<EduCompletedView />)}
         </View>
      </View>
    </ScrollView>
    <BEFooter 
        previousForm={()=>{
          navigation?.navigate('SS_Authentication', { });
        }} 
        nextForm={()=>{
         navigation?.navigate('SS_ExamTarget', { });
        }} />
    </View>);
};

export default EduStatus;