import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Select } from '@AppFormElement/Select/index.js';
import { RadioSwitch } from '@AppFormElement/RadioSwitch/index.js';
import EduDegrees from '@StaticData/en/edu-degrees.json';

const EduDetails = () =>{
 const initialValues = { status:'', // STUDYING / COMPLETED
                         current: { degree:[], specialization: [] }, // STUDYING
                         planned: { degree:[], specialization: [] }, // STUDYING
                         completed: { degree:[], specialization: [] } // COMPLETED
                       };
 const eduDegreeData = Object.keys(EduDegrees);
 const [educationDetails, setEducationDetails] = useState( initialValues );
 const [specializationList, setSpecializationList] = useState({ current:[], planned:[], completed:[] });
 const options = [{ label: 'Still Studying', value: 'STUDYING' },
                  { label: 'Completed', value: 'COMPLETED' }];
 const handleEduStatus = (val) =>{
  setEducationDetails({...initialValues, status: val });
 };
 const Studying = ({ label, mode }) =>{
    const schooling = ['Class 06', 'Class 07', 'Class 08', 'Class 09', 'Class 10', 'Class 11', 'Class 12'];
    const handleStudy = (val)=>{
        const degree = val?.[0];
        if(degree?.toLowerCase()?.startsWith("bachelor") || degree?.toLowerCase()?.startsWith("master")){
          setSpecializationList({...specializationList, [mode]: EduDegrees?.[degree] });
        }
        setEducationDetails({...educationDetails, [mode]: { degree: val, specialization: '' } });
    }
    return (<View style={{ paddingTop: 15 }}>
        <Select name={mode+"Degree"} 
      label={label?.degree}
      popupTitle="Select your Education"
      placeholder="Select your Education" 
      value={educationDetails?.[mode]?.degree}
      options={[...schooling, ...eduDegreeData]?.map((deg)=>{ return { id:deg, label:deg, value: deg }; })} 
      onSelect={(value)=>handleStudy(value)} />
      {specializationList?.[mode]?.length>0 && 
      (educationDetails?.[mode]?.degree?.[0]?.toLowerCase().startsWith("bachelor") || 
      educationDetails?.[mode]?.degree?.[0]?.toLowerCase()?.startsWith("master"))
      &&(<View style={{ paddingTop: 15 }}>
    <Select name={mode+"Specialization"}
     label={label?.specialization}
     popupTitle="Select your Specialization"
     placeholder="Choose your Specialization" 
     value={educationDetails?.[mode]?.specialization} 
     options={specializationList?.[mode]?.map((deg)=>{ return { id:deg, label:deg, value: deg }; })} 
     onSelect={(value)=>{
        setEducationDetails({ ...educationDetails, [mode]: {...educationDetails?.[mode], specialization: value } });
     }} />
  </View>)}
    </View>);
 };
 return (<View style={styles.pad15}>
  <RadioSwitch label="Mention your Education Status" options={options} onSelect={(val)=>handleEduStatus(val)} />
  {educationDetails?.status==='STUDYING' && (<View>
    <Text style={styles.eduTitle}>
        Thanks for letting us know, you are still studying. Please let us know following 
        things to understand about you in better.
    </Text>
    <Studying mode="current" label={{ degree: "Mention your Current Education", specialization: "Mention Specialization in Current Degree" }} />
    <Studying mode="planned" label={{ degree: "What you are planning to do?", specialization: "Mention Specialization in Planned Degree" }} />
  </View>)}
  {(educationDetails?.status==='COMPLETED') && (<View>
    <Text style={styles.eduTitle}>
        It's good to hear that you have completed your Education. Please let us know following 
        things to understand about you in better.
    </Text>
    <Studying mode="completed" label={{ degree: "Mention your Highest Degree", specialization: "Mention Specialization in Highest Degree" }}  />
    </View>)}
</View>);
};

const styles = StyleSheet.create({
 pad15: { padding:15, backgroundColor:'#fbfbfb' },
 eduTitle: { marginTop:5, color:'#777', lineHeight:22 }
});

export default EduDetails;