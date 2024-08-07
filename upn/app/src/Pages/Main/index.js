import React, { useEffect } from 'react';
import { Button, BackHandler } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DrawerNavigation from './Drawer/index.js';
import Home from '@AppPage/Main/Home/index.js';
import About from '@AppPage/Main/About/index.js';
import Dashboard from '@AppPage/Main/Dashboard/index.js';
import ExamDates from '@AppPage/Main/ExamDates/index.js';
import PrevQP from '@AppPage/Main/PrevQP/index.js';
import MyProfile from '@AppPage/Main/MyProfile/index.js';
import Settings from '@AppPage/Main/Settings/index.js';
import StudyTT from '@AppPage/Main/StudyTT/index.js';
import LogoutButton from '@AppPage/Main/Logout/index.js';
import { CommonActions } from '@react-navigation/native';

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
  return ( <DrawerNavigation initialRouteName="MM_Home" screens={screens} /> );
};

export default Main;
