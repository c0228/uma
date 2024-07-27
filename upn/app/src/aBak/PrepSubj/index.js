import React, { useEffect } from 'react';
import { View, Text, ScrollView, Switch, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAppContext } from '@AdvancedTopics/ReactContext/index.js';
import { Select } from '@AppFormElement/Select/index.js';
import AlertModal from '@AppComponent/AlertModal/index.js';
import { Accordian } from '@AppComponent/Accordian/index.js';
import BEHeader, { HeaderTitle } from './../BEHeader.js';
import BEFooter from './../BEFooter.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PrepareSubjects = () =>{
 const { contextData, setContextData } = getAppContext();
 const accountInfo = contextData?.userDetails?.accountInfo;
 const navigation = useNavigation();
 const backButton = () =>{
  const backHandler = BackHandler.addEventListener('hardwareBackPress',  () => { // onBack Press
    setContextData({ displayScreen: 'EXAMTARGET' }); // Move to Introduction
    return true; // Prevent default back action
  });
  return () => backHandler.remove();
 }; 
 useEffect(() => { backButton(); }, []);
 const MandatorySubjects = () =>{

  const accordianData = [{ id:"geography", title: "Geography", desc: "Learning this Subject will help you to score marks in Union Public Service Commission (UPSC)," },
    { id:"history", title: "History", desc: "Learning this Subject will help you to score marks in Union Public Service Commission (UPSC)," }];

  const MandatoryHeader = ({ title }) =>{
    return (<View style={{ flexDirection:'row'}}><Switch value={true} /> 
    <Text style={{ fontWeight:'bold', fontSize:16, color:'#555', paddingTop:2, paddingLeft:10, paddingBottom:6 }}>{title}</Text>
    </View>);
   };
  
   const MandatoryBody = ({ desc}) =>{
    return (<View style={{ paddingLeft:15 }}>
      <Text style={{ lineHeight:22, fontSize:14 }}>{desc}</Text>
     </View>);
   };
   return (<View>
    <Text style={{ color:'#333', textAlign:'center',  fontSize:15, fontWeight:'bold', textTransform:'uppercase', letterSpacing:1  }}>Mandatory Subjects</Text>
    {accordianData?.map((acc,index)=>{
      return (<View key={index} style={{ paddingTop:15 }}>
      <Accordian
        id={"mandatorySubjects"+index}
        data={[{ id: acc?.id, 
                 title: (<MandatoryHeader title={acc?.title} />), 
                 component:(<MandatoryBody desc={acc?.desc} />)
               }]} 
        defaultOpen={acc?.id} />
       </View>);
    })}
  </View>);
 };

 const OptionalSubjects = () =>{

  const accordianData = [{ id:"geography", title: "Geography", desc: "Learning this Subject will help you to score marks in Union Public Service Commission (UPSC)," },
    { id:"history", title: "History", desc: "Learning this Subject will help you to score marks in Union Public Service Commission (UPSC)," }];

  const OptionalHeader = ({ title }) =>{
    return (<View style={{ flexDirection:'row'}}><Switch value={true} /> 
    <Text style={{ fontWeight:'bold', fontSize:16, color:'#555', paddingTop:2, paddingLeft:10, paddingBottom:6 }}>{title}</Text>
    </View>);
   };
  
   const OptionalBody = ({ desc}) =>{
    return (<View style={{ paddingLeft:15 }}>
      <Text style={{ lineHeight:22, fontSize:14 }}>{desc}</Text>
     </View>);
   };
   return (<View style={{ paddingTop:15 }}>
    <Text style={{ color:'#333', textAlign:'center',  fontSize:15, fontWeight:'bold', textTransform:'uppercase', letterSpacing:1  }}>Optional Subjects</Text>
    <View style={{ paddingTop:15 }}>
      <Text style={{ lineHeight:22, fontSize:14 }}>By default, We are displaying the subjects which you can score marks in UPSC Examinations. If you want to choose other subjects and prepare 
      for the Examinations using App, please select your Subjects you want to gohead with -</Text>
    </View>
    <View style={{ paddingTop:15, flexDirection:'row' }}>
      <View style={{ width:'25%' }}></View>
      <View style={{ width:'75%' }}>
        <Select name="optionalSubjectView"
        popupTitle="Choose your Option"
        placeholder="Choose your Option" 
        value={["Only My Academic Subjects"]}
        options={['Show All Subjects', 'Only My Academic Subjects']?.map((subjMode)=>{
          return { id:subjMode, label:subjMode, value: subjMode };
        })} 
        onSelect={(value)=>{}} />
      </View>
    </View>
    {accordianData?.map((acc,index)=>{
      return (<View key={index} style={{ paddingTop:15 }}>
      <Accordian
        id={"mandatorySubjects"+index}
        data={[{ id: acc?.id, 
                 title: (<OptionalHeader title={acc?.title} />), 
                 component:(<OptionalBody desc={acc?.desc} />)
               }]} 
        defaultOpen={acc?.id} />
       </View>);
    })}
  </View>);
 };

 return ( <View style={{ flex:1, backgroundColor:'#fff' }}>
    <BEHeader name={accountInfo?.surname+" "+accountInfo?.name} formSize={5} activeForm={3} />
    <HeaderTitle 
            title="List of Subjects to Prepare" 
            subTitle="Specify the Examinations that you are planning to pursue in the Upcoming Years -" />
    <ScrollView style={{ paddingLeft:5, marginBottom:5, paddingRight:5 }}>
      <View style={{ padding:15 }}>
        <MandatorySubjects />
        <OptionalSubjects />
      </View>
    </ScrollView>
    <BEFooter 
        label={{ previous:'Previous', next:'Next' }}
        previousForm={()=>{
          setContextData({ displayScreen: 'EXAMTARGET' });
        }} 
        nextForm={()=>{
          setContextData({ displayScreen: 'TIMETABLE' });
        }} />
    </View>);
};

export default PrepareSubjects;