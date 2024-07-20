import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrawerNavigation from './Drawer/index.js';
import Home from '@AppPage/Main/Home/index.js';
import About from '@AppPage/Main/About/index.js';
import Dashboard from '@AppPage/Main/Dashboard/index.js';
import ExamDates from '@AppPage/Main/ExamDates/index.js';
import PrevQP from '@AppPage/Main/PrevQP/index.js';
import MyProfile from '@AppPage/Main/MyProfile/index.js';
import Settings from '@AppPage/Main/Settings/index.js';
import StudyTT from '@AppPage/Main/StudyTT/index.js';

const Main = () => {
  const screens = [{ id:'MM_Home', name:'Home', icon:'',component: Home },
  { id:'MM_AboutUPSC', name:'About UPSC Examination', icon:'',component: About },
  { id:'MM_Dashboard', name:'Dashboard', icon:'',component: Dashboard },
  { id:'MM_UPSCExamDates', name:'UPSC Exam Dates', icon:'',component: ExamDates },
  { id:'MM_PrevQP', name:'Previous Question Papers', icon:'',component: PrevQP },
  { id:'MM_StudyTimeTable', name:'Study Timetable', icon:'',component: StudyTT },
  { id:'MM_MyProfile', name:'My Profile', icon:'',component: MyProfile },
  { id:'MM_Settings', name:'Settings', icon:'',component: Settings },
  { id: 'MM_Signout', name: 'Signout', icon: '', component: LogoutButton }];

    return ( <DrawerNavigation screens={screens} /> );
};


const LogoutButton = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    // Reset User Details to Empty over here
    navigation.navigate('SS_Preset');
  });
  return (<></>); // Replace Button with your UI component
};
export default Main;
