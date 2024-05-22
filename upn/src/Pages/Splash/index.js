import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Introduction from './components/intro/index.js';
import Notify from './components/notify/index.js';
import Storage from './components/store/index.js';
import Auth from './components/auth/index.js';
import Avatar from './components/avatar/index.js';
import EduStatus from './components/edu-status/index.js';
import ExamTarget from './components/exam-target/index.js';
import PrepareSubjects from './components/prep-subj/index.js';
import TimeTable from './components/time-table/index.js';
import Main from '@AppPage/Main/index.js';
import Test1 from './components/test1/index.js';
import Test2 from './components/test2/index.js';
import Test3 from './components/test3/index.js';

const Stack = createStackNavigator();

const Splash = () =>{
 return (<NavigationContainer>
 <Stack.Navigator>
    <Stack.Screen name="SS_Test2" component={Test2}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Test1" component={Test1}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Test3" component={Test3}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Introduction" component={Introduction}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Notifications" component={Notify}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Storage" component={Storage}  options={{ headerShown: false }} />
    <Stack.Screen name="SS_Authentication" component={Auth} options={{ headerShown: false }} />
    <Stack.Screen name="SS_Avatar" component={Avatar} options={{ headerShown: false }} />
    <Stack.Screen name="SS_EduStatus" component={EduStatus} options={{ headerShown: false }} />
    <Stack.Screen name="SS_ExamTarget" component={ExamTarget} options={{ headerShown: false }} />
    <Stack.Screen name="SS_PrepSubj" component={PrepareSubjects} options={{ headerShown: false }} />
    <Stack.Screen name="SS_TimeTable" component={TimeTable} options={{ headerShown: false }} />
    <Stack.Screen name="SS_Main" component={Main} options={{ headerShown: false }} />
  </Stack.Navigator>
  </NavigationContainer>);
};

export default Splash;