import React, { useState } from "react";
import { View, Text, StyleSheet  } from 'react-native';
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { HorizontalStaticMenu } from '@AppComponent/HorizontalStaticMenu/index.js';
import { Tooltip } from "e-ui-react-native";
import ExamPaperPlan from './components/ExamPaperPlan/index.js';
import ExamSyllabus from './components/ExamSyllabus/index.js';
import { Select } from '@AppFormElement/Select/index.js';
import { InputGroup } from '@AppFormElement/InputGroup/index.js';

const MenuListData = [{ id:'paper-pattern', label:'Paper Pattern', component: <ExamPaperPlan /> },
                     { id:'syllabus', label:'Syllabus', component:(<ExamSyllabus />) }];

const Syllabus = (props) =>{
  const [selectExam, setSelectExam] = useState("Civil Service Examination (CSE)");
    const handleSelect = (option) => {
      console.log("selectExam", option);
      setSelectExam(option);
    };

    return (<View style={{ flex:1, backgroundColor:'#fff'  }}>
    <HamburgerIcon {...props}/>      
    <View style={{ paddingLeft: 10, paddingRight:15 }}>
      <Select name="examination" 
      label="Choose an Examination"
      placeholder="Select Examination"
      value={["Civil Service Examination (CSE)"]}
      options={[{ id: 'CSE', label: 'Civil Service Examination (CSE)', value: 'Civil Service Examination (CSE)' },
      { id: 'IFoSE', label: 'Indian Forest Service Examination (IFoSE)', value: 'Indian Forest Service Examination (IFoSE)' },
      { id: 'ESE', label: 'Engineering Services Examination (ESE)', value: 'Engineering Services Examination (ESE)' },
      { id: 'CDS', label: 'Combined Defence Services (CDS) Examination', value: 'Combined Defence Services (CDS) Examination' },
      { id: 'NDA', label: 'National Defence Academy (NDA) Examination', value: 'National Defence Academy (NDA) Examination' },
      { id: 'IES', label: 'Indian Economic Service (IES) Examination', value: 'Indian Economic Service (IES) Examination' },
      { id: 'ISS', label: 'Indian Statistical Service (ISS) Examination', value: 'Indian Statistical Service (ISS) Examination' },
      { id: 'CMS', label: 'Combined Medical Services (CMS) Examination', value: 'Combined Medical Services (CMS) Examination' },
      { id: 'NA', label: 'Naval Academy (NA) Examination', value: 'Naval Academy (NA) Examination' },
      { id: 'CGG', label: 'Combined Geoscientist and Geologist (CGG) Examination', value: 'Combined Geoscientist and Geologist (CGG) Examination' },
      { id: 'CAPF', label: 'Central Armed Police Forces (CAPF) Examination', value: 'Central Armed Police Forces (CAPF) Examination' }]}
      onSelect={handleSelect} />
    </View>
    <View style={{ marginTop:12,  marginBottom:15, justifyContent:'center', alignItems:'center', backgroundColor:'#df0d55'  }}>
      <Text style={SyllabusStyle.mainTitle}>{selectExam}</Text>
    </View>
    <HorizontalStaticMenu activeId="paper-pattern" data={MenuListData} />
    </View>);
};

const SyllabusStyle = StyleSheet.create({ 
 mainTitle: { fontSize:14, letterSpacing:0.4, textTransform:'uppercase', paddingLeft:10, 
 textAlign: 'center', paddingTop:8, paddingRight:10,paddingBottom:8, fontWeight:'bold', color:'#fff', lineHeight: 22 }
});

export default React.memo(Syllabus);
