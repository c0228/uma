import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Icon } from "e-ui-react-native";
import Page from '@AppUtils/Page.js';
import { GetWeekOfDays } from '@AppUtils/DateTime.js';
import { ProgressBar } from 'react-native-paper';

const progressData={
  '2024-08-04':{
    'Agriculture':{
      progress: 0.75,
      data:[{
          title:'Ecology and its relevance to man, natural resources, their sustainable management and conservation.',
          duration:'2.0 hrs',
          studied: true
        },{
          title:'Physical and social environment as factors of crop distribution and production.',
          duration:'1.5 hrs',
          studied: true
        },{
          title:'Agroecology, cropping pattern as indicators of environments.',
          duration:'1.0 hrs',
          studied: false
        }]
      },
      'Animal Husbandry and Veterinary Science':{
      progress: 0.5,
      data:[{
          title:'Partitioning of food and energy within the animal.',
          duration:'2.0 hrs',
          studied: true
        },{
          title:'Direct and indirect Calorimetry.',
          duration:'1.5 hrs',
          studied: false
        }]
      },
  },
  '2024-08-05':{
    'Agriculture':{
      progress: 1,
      data:[{
          title:'Ecology and its relevance to man, natural resources, their sustainable management and conservation.',
          duration:'2.0 hrs',
          studied: true
        },{
          title:'Physical and social environment as factors of crop distribution and production.',
          duration:'1.5 hrs',
          studied: true
        },{
          title:'Agroecology, cropping pattern as indicators of environments.',
          duration:'1.0 hrs',
          studied: true
        },{
          title:'Environmental pollution and associated hazards to crops, animals and humans.',
          duration:'45 min',
          studied: true
        }]
      },
      'Animal Husbandry and Veterinary Science':{
      progress: 0.25,
      data:[{
          title:'Partitioning of food and energy within the animal.',
          duration:'2.0 hrs',
          studied: true
        },{
          title:'Direct and indirect Calorimetry.',
          duration:'1.5 hrs',
          studied: false
        },{
          title:'Carbon and Nitrogen Balance and comparative slaughter methods.',
          duration:'1.0 hrs',
          studied: false
        },{
          title:'System for expressing energy value of foods in ruminants, pigs and poultry.',
          duration:'45 min',
          studied: false
        }]
      },
  }
};

const MyProgress = () =>{
  const [weekDates, setWeekDates] = useState([]);
  const [todayDateView, setTodayDateView] = useState('');
  const [selectedDateView, setSelectedDateView] = useState('');
  useEffect(() => {
    const data = GetWeekOfDays();
    setWeekDates(data?.weekDates);
    setTodayDateView(data?.today);
    setSelectedDateView(data?.today);
  },[]);
  const WeekDatesComponent = ()=>{
    const today = todayDateView?.day+', '+todayDateView?.date+' '+todayDateView?.month+' '+todayDateView?.year;
    const selDate = selectedDateView?.day+', '+selectedDateView?.date+' '+selectedDateView?.month+' '+selectedDateView?.year;
    return (
      <View style={styles.weekDatesContainer}>
        <View style={styles.todayDateView}>
          <View style={styles.todayDateIcon}>
            <Icon type="FontAwesome" name="calendar" size={20} color="black"/>
          </View>
          <Text style={styles.todayText1}>{(today === selDate)?'Today':'Weekday'} -</Text>
          <Text style={styles.todayText2}>{selDate}</Text>
        </View>
        <View style={styles.daysContainer}>
          {weekDates.map((item, index) =>{ 
            const itemDate = item?.day+', '+item?.date+' '+item?.month+' '+item?.year;
            return (<View key={index} style={[styles.dayItem, ((itemDate===selDate) ? styles.dayItemActive : null)]}>
               <TouchableOpacity onPress={()=>{
                  setSelectedDateView(item);
                }}>
              <Text style={styles.dayItemDay}>{item.day?.substring(0, 3)}</Text>
              <Text style={styles.dayItemDate}>{item.formattedDate}</Text>
              </TouchableOpacity>
            </View>);
          })}
        </View>
      </View>
    );
  };
  const SubjectView = ({ subject, data, progress })=>{
    const progressColor = (progress===1)?'green':'red';
    return (<View style={styles.subjectView}>
      <View style={{ flexDirection:'row'}}>
        <View style={{ width:'66%' }}>
          <Text style={styles.subjectTitle}>{subject}</Text>
        </View>
        <View style={{ width:'34%' }}>
          <View style={{ alignItems:'flex-end', paddingBottom:6 }}>
            <Text style={{ fontWeight:'bold', fontSize:13, color: progressColor }}>{progress*100}% Completed</Text>
          </View>
          <ProgressBar progress={progress} color={progressColor} />
        </View>
      </View>
      {data?.map((d,i)=>{
        const color=(d?.studied)?'green':'#999';
        return (<View key={i} style={styles.topicRow}>
          <View style={styles.studyCheck}>
            {(d?.studied)?(<Icon type="Feather" name="check-square" size={18} color={color} />):
                          (<Icon type="Feather" name="square" size={18} color={color} />)}
          </View>
          <View style={styles.topicTitleView}>
            <Text style={[styles.topicTitle,{ color:color }]}>{d?.title}</Text>
          </View>
          <View style={styles.topicDuration}>
            <Text style={{ color:color }}>{d?.duration}</Text>
          </View>
        </View>);
      })}
     </View>);
  };
  const sDate = selectedDateView?.year+'-'+selectedDateView?.monthIndex+'-'+selectedDateView?.date;
  console.log(sDate);
  const subjects = Object.keys(progressData?.[sDate]);
  return (<Page backgroundColor="#0e7512" title="My Progress">
  <WeekDatesComponent />
  <ScrollView style={styles.scrollView}>
   {subjects?.map((subject,i)=>{
      return (<SubjectView key={i} subject={subject} 
        data={progressData?.[sDate]?.[subject]?.data} 
        progress={progressData?.[sDate]?.[subject]?.progress} />);
   })}
  </ScrollView>
  </Page>);
};

const styles = StyleSheet.create({
 weekDatesContainer: { paddingLeft:15, paddingTop:15, paddingRight:15 },
 todayDateView:{ flexDirection:'row', marginBottom: 10, justifyContent:'center' },
 todayDateIcon:{ marginTop:-2 },
 todayText1:{ fontWeight: 'bold', marginBottom: 5, fontSize:14, color:'#333', marginLeft: 5, marginRight:5, color:'black'  },
 todayText2:{ fontSize:14, color:'#555', marginLeft: 5 },
 daysContainer: { flexDirection: 'row', justifyContent: 'space-between' },
 dayItem: { alignItems:'center', flex: 1, padding: 5, marginTop: 5, marginRight: 5, backgroundColor: '#f5f5f5', borderRadius: 8 },
 dayItemActive: { borderColor: '#000', borderWidth: 2 },
 dayItemDay: { textTransform: 'uppercase', fontSize:11, color:'#333', fontWeight:'bold' },
 dayItemDate:{ color:'#555' },
 scrollView: { paddingLeft:15, marginTop:15, paddingRight: 15 },
 subjectView:{ marginBottom:15, borderWidth:1, borderColor:'#ccc', borderRadius:8, padding:15 },
 subjectTitle:{ color:'#000', fontSize:17, fontWeight:'bold', lineHeight:22 },
 topicRow:{ flexDirection:'row', paddingTop:8 },
 studyCheck:{ width:'9%', paddingTop:3 },
 topicTitleView:{ width:'74%' },
 topicTitle:{ lineHeight:21, fontSize:14 },
 topicDuration:{ width:'17%', alignItems:'flex-end', paddingTop:3 }
});

export default MyProgress;