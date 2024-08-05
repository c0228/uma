import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GetWeekOfDays } from '@AppUtils/DateTime.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const WeekDatesComponent = () => {
  const [weekDates, setWeekDates] = useState([]);
  const [todayDateView, setTodayDateView] = useState('');
  const [selectedDateView, setSelectedDateView] = useState('');

 


  useEffect(() => {
    const data = GetWeekOfDays();
    setWeekDates(data?.weekDates);
    setTodayDateView(data?.today?.week+', '+data?.today?.date+' '+data?.today?.month+' '+data?.today?.year);
    setSelectedDateView(data?.today?.week+', '+data?.today?.date+' '+data?.today?.month+' '+data?.today?.year);
    /*const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const today = new Date();
    const todayWeek = daysOfWeek[today.getDay()];
    const todayDate = today.getDate();
    const todayMonth = monthsOfYear[today.getMonth()];
    const todayYear = today.getFullYear();

    setTodayDateView(todayWeek+', '+todayDate+' '+todayMonth+' '+todayYear);
    setSelectedDateView(todayWeek+', '+todayDate+' '+todayMonth+' '+todayYear);

    const currentDay = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - currentDay); // Set start date to Sunday of the current week
    
    let dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const day = daysOfWeek[date.getDay()];
      const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit' });
      dates.push({
        day: day,
        date: day+", "+date.getDate()+" "+monthsOfYear[date.getMonth()]+" "+date.getFullYear(),
        formattedDate: formattedDate
      });
    }
    
    setWeekDates(dates); */
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.todayDateView}>
        <FontAwesome name="calendar" size={20} color="black" style={styles.todayDateIcon}/>
        <Text style={styles.todayText1}>{(todayDateView === selectedDateView)?'Today':'Weekday'} -</Text>
        <Text style={styles.todayText2}>{selectedDateView}</Text>
      </View>
      <View style={styles.flexContainer}>
        {weekDates.map((item, index) => (
          <View key={index} style={[styles.flexItem, ((item?.date===selectedDateView) ? styles.flexItemActive : null)]}>
             <TouchableOpacity onPress={()=>{
                setSelectedDateView(item?.date);
              }}>
            <Text style={styles.flexItemDay}>{item.day?.substring(0, 3)}</Text>
            <Text style={styles.flexItemDate}>{item.formattedDate}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingLeft:15, paddingTop:15, paddingRight:15 },
  todayDateView:{ flexDirection:'row', marginBottom: 10, justifyContent:'center' },
  todayDateIcon:{ marginTop:-2 },
  todayText1:{ fontWeight: 'bold', marginBottom: 5, fontSize:14, color:'#333', marginLeft: 5, marginRight:5, color:'black'  },
  todayText2:{ fontSize:14, color:'#555', marginLeft: 5 },
  flexContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  flexItem: { alignItems:'center', flex: 1, padding: 5, marginTop: 5, marginRight: 5, backgroundColor: '#f5f5f5', borderRadius: 8 },
  flexItemActive: { borderColor: '#000', borderWidth: 2 },
  flexItemDay: { textTransform: 'uppercase', fontSize:11, color:'#333', fontWeight:'bold' },
  flexItemDate:{ color:'#555' }
});

