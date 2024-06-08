import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Select } from '@AppFormElement/Select/index.js';
import { Form } from '@AppFormElement/Form/index.js';
import { RadioSwitch } from '@AppFormElement/RadioSwitch/index.js';
import AlertModal from '@AppComponent/AlertModal/index.js';
import BEHeader, { HeaderTitle } from './../../utils/BEHeader.js';
import BEFooter from './../../utils/BEFooter.js';
import EduDegrees from '@StaticData/en/edu-degrees.json';

const EduStatus = () =>{
 const navigation = useNavigation();
 const eduDegreeData = Object.keys(EduDegrees);
 const initialValues = { status: '', educationLevel: '', specialization: '' };
 const [educationDetails, setEducationDetails] = useState( initialValues );
 const [specialization, setSpecialization] = useState([]);
 const options = [{ label: 'Still Studying', value: 'STUDYING' },
                    { label: 'Completed', value: 'COMPLETED' }];
      
 const setEduStatus = (val) => {
    console.log("setEduStatus", val);
  setEducationDetails({ ...initialValues, status: val });
  setSpecialization([]);
 };

 useEffect(()=>{
  console.log("educationDetails: ", educationDetails);
 },[educationDetails]);


 return (<View style={{ flex:1, backgroundColor:'#fff' }}>
    <BEHeader formSize={5} activeForm={1} />
    <HeaderTitle 
            title="Share your Education Details" 
            subTitle="It helps App to understand your background and Customize resources to prepare effectively for their exams and academic challenges -" />
    <ScrollView style={{ paddingLeft:5, marginBottom:5, paddingRight:5 }}>
      <View style={{ padding:15 }}>
        <RadioSwitch label="Mention your Education Status" options={options} value="value2" onSelect={(val)=>setEduStatus(val)} />
        {(educationDetails?.status==='STUDYING') && (<View>
            <Text style={{ marginTop:5, color:'#777', lineHeight:22 }}>
            Thanks for letting us know, you are still studying. Please let us know following things to understand about you in better.</Text>
            <View style={{ paddingTop:15 }}>
    <Select name="highestDegree" 
      label="Mention your Current Education" 
      popupTitle="Select your Education"
      placeholder="Select your Education" 
      value={educationDetails?.educationLevel} 
      options={['Class 06', 'Class 07', 'Class 08', 'Class 09', 'Class 10', 'Class 11', 'Class 12', ...eduDegreeData]?.map((deg)=>{ return { id:deg, label:deg, value: deg }; })} 
      onSelect={(value)=>{
        if(value){
          const degree = value?.[0];
          setEducationDetails({ ...educationDetails, educationLevel: value, specialization:'' });
          if(degree?.toLowerCase().startsWith("bachelor") || degree?.toLowerCase()?.startsWith("master")){
            setSpecialization(EduDegrees?.[degree]);
          }
        }
      }} />
  </View>
  {specialization?.length>0 && (<View style={{ paddingTop: 15 }}>
    <Select name="eduSpecialization" 
     label="Mention Specialization in Highest Degree" 
     popupTitle="Select your Specialization"
     placeholder="Choose your Specialization" 
     value={educationDetails?.specialization} 
     options={specialization?.map((deg)=>{ return { id:deg, label:deg, value: deg }; })} 
     onSelect={(value)=>{
      if(value){
        setEducationDetails({ ...educationDetails, specialization: value });
      }
     }} />
  </View>)}
        </View>)}


        {(educationDetails?.status==='COMPLETED') && ( <View>
    <Text style={{ marginTop:8, marginBottom:8,  color:'#777', lineHeight:22 }}>
        It's good to hear that you have completed your Education. Please let us know following things to understand about you in better.</Text>
    <Select name="highestDegree2" 
        label="What is your Highest Degree?" 
        popupTitle="Choose your Highest Degree"
        placeholder="Choose your Highest Degree" 
        value={educationDetails?.educationLevel} 
        options={eduDegreeData?.map((deg)=>{
            return { id:deg, label:deg, value: deg };
        })} 
        onSelect={(value)=>{
         if(value){
            const degree = value?.[0];
            setEducationDetails({ ...educationDetails, educationLevel: value, specialization:'' });
            setSpecialization(EduDegrees?.[degree]);
         }
        }} />
    {specialization?.length>0 && (<View style={{ paddingTop: 15 }}>
        <Select name="eduSpecialization" 
        label="Mention Specialization in Highest Degree" 
        popupTitle="Select your Specialization"
        placeholder="Choose your Specialization" 
        value={educationDetails?.specialization} 
        options={specialization?.map((deg)=>{ return { id:deg, label:deg, value: deg }; })} 
        onSelect={(value)=>{
        if(value){
          setEducationDetails({ ...educationDetails, specialization: value });
        }
        }} />
    </View>)}
</View>)}
      </View>
    </ScrollView>
    <BEFooter 
        label={{ previous:'Previous', next:'Next' }}
        previousForm={()=>{
          navigation?.navigate('SS_Avatar', { });
        }} 
        nextForm={()=>{
         navigation?.navigate('SS_ExamTarget', { });
        }} />
    </View>);
};

export default EduStatus;