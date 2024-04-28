import React from "react";
import { View, Text, StyleSheet  } from 'react-native';
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { HorizontalStaticMenu } from '@AppComponent/HorizontalStaticMenu/index.js';
import { Tooltip } from "e-ui-react-native";
import ExamPaperPlan from './components/ExamPaperPlan/index.js';
import ExamSyllabus from './components/ExamSyllabus/index.js';

const MenuListData = [{ id:'paper-pattern', label:'Paper Pattern', component: <ExamPaperPlan /> },
                     { id:'syllabus', label:'Syllabus', component:(<ExamSyllabus />) }];

const Syllabus = (props) =>{
    return (<View style={{ flex:1, backgroundColor:'#fff'  }}>
    <HamburgerIcon {...props}/>      
    <Text style={[SyllabusStyle.mainTitle, SyllabusStyle.textCenter, SyllabusStyle.mbot15p]}>Civil Service Examination (CSE)</Text>
    <HorizontalStaticMenu activeId="paper-pattern" data={MenuListData} />
    </View>);
};

const SyllabusStyle = StyleSheet.create({ 
 mbot15p: { marginBottom:15 },
 textCenter: { textAlign: 'center' },
 mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22 }
});

export default React.memo(Syllabus);
