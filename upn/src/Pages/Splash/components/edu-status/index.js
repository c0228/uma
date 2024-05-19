import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Select } from '@AppFormElement/Select/index.js';
import { Form } from '@AppFormElement/Form/index.js';
import AlertModal from '@AppComponent/AlertModal/index.js';
import BEHeader, { HeaderTitle } from './../../utils/BEHeader.js';
import BEFooter from './../../utils/BEFooter.js';
import EduDegrees from '@StaticData/en/edu-degrees.json';
import { Range } from '@AppUtils/ArrayManagement.js';

const EduStatus = () =>{
 const navigation = useNavigation();
 const eduDegreeData = Object.keys(EduDegrees);
 const [educationDetails, setEducationDetails] = useState({
  status: '',
  educationLevel: '',
  specialization: '',
  age: '',
 });
 const [specialization, setSpecialization] = useState([]);

 useEffect(()=>{
  console.log("educationDetails", educationDetails);
 },[educationDetails]);

 const EducationStatus = () =>{
  const handleChange = (value, status) =>{
    console.log("handleChange", value);
    if (value) {
      setEducationDetails({ ...educationDetails, educationLevel:'', specialization:'', status: status });
    } else {
      setEducationDetails({ ...educationDetails, educationLevel:'', specialization:'', status: '' });
    }
    setSpecialization([]);
  };
  const SwitchOption = ({ label, value }) =>{
    return (<View style={{ width:'50%', flexDirection:'row' }}>
    <Switch value={educationDetails?.status === value} onValueChange={(val) =>handleChange(val, value)} />
    <TouchableOpacity onPress={()=>handleChange(!(educationDetails?.status === value), value)}>
      <Text style={{ color:'#333' }}>{label}</Text>
    </TouchableOpacity>
  </View>);
  };

  return (<View style={{ paddingTop:15 }}>
          <Text style={{ fontSize:15, fontWeight:'bold', color:'#333' }}>Mention your Education Status</Text>
          <View style={{ flexDirection:'row', paddingTop:8 }}>
            <SwitchOption label="Still Studying" value="STUDYING" />
            <SwitchOption label="Completed" value="COMPLETED" />
          </View>
  </View>);
 };

 const EduStudyingView = () =>{
  const level = ['Class 06', 'Class 07', 'Class 08', 'Class 09', 'Class 10', 'Class 11', 'Class 12', ...eduDegreeData];
  return (<View style={{ paddingTop:15 }}>
    <Select name="highestDegree" 
      label="Mention your Current Education" 
      popupTitle="Select your Education"
      placeholder="Select your Education" 
      value={educationDetails?.educationLevel} 
      options={level?.map((deg)=>{ return { id:deg, label:deg, value: deg }; })} 
      onSelect={(value)=>{
        const degree = value?.[0];
        setEducationDetails({ ...educationDetails, educationLevel: value, specialization:'' });
        if(degree?.toLowerCase().startsWith("bachelor") || degree?.toLowerCase()?.startsWith("master")){
          setSpecialization(EduDegrees?.[degree]);
        }
      }} />
  </View>);
 };

 const EduCompletedView = () =>{
  return (<View style={{ paddingTop: 15 }}>
    <Select name="highestDegree2" 
      label="What is your Highest Degree?" 
      popupTitle="Choose your Highest Degree"
      placeholder="Choose your Highest Degree" 
      value={educationDetails?.educationLevel} 
      options={eduDegreeData?.map((deg)=>{
        return { id:deg, label:deg, value: deg };
      })} 
      onSelect={(value)=>{
        const degree = value?.[0];
        setEducationDetails({ ...educationDetails, educationLevel: value, specialization:'' });
        setSpecialization(EduDegrees?.[degree]);
      }} />
  </View>);
 };

 const EduSpecialization = () =>{
  return (<View style={{ paddingTop: 15 }}>
    <Select name="eduSpecialization" 
     label="Mention Specialization in Highest Degree" 
     popupTitle="Select your Specialization"
     placeholder="Choose your Specialization" 
     value={educationDetails?.specialization} 
     options={specialization?.map((deg)=>{ return { id:deg, label:deg, value: deg }; })} 
     onSelect={(value)=>{
      setEducationDetails({ ...educationDetails, specialization: value });
     }} />
  </View>);
 };

 const CandiateAge = ()=>{
  return (<View>
   <Select name="candidateAge" 
     label="What's your Age?" 
     popupTitle="Select your Age"
     placeholder="Select your Age" 
     value={educationDetails?.age} 
     options={Range(10, 32)?.map((deg)=>{ return { id:deg+' years', label:deg+' years', value: deg+' years' }; })} 
     onSelect={(value)=>{
       setEducationDetails({ ...educationDetails, age: value });
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
         <CandiateAge />
         <EducationStatus />
         <View>
          {educationDetails?.status === "STUDYING" && (<View>
          <EduStudyingView />
          {specialization?.length>0 && <EduSpecialization />}
          </View>)}
          {educationDetails?.status === "COMPLETED" && (<View>
            <EduCompletedView />
            {specialization?.length>0 && <EduSpecialization />}
            </View>)}
         </View>
      </View>
    </ScrollView>
    <BEFooter 
        label={{ previous:'Previous', next:'Next' }}
        previousForm={()=>{
          navigation?.navigate('SS_Authentication', { });
        }} 
        nextForm={()=>{
         navigation?.navigate('SS_ExamTarget', { });
        }} />
    </View>);
};

export default EduStatus;