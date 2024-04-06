import React from "react";
import { View, Text, ScrollView , StyleSheet } from 'react-native';
import { HamburgerIcon } from './../../../../Navigation/Drawer/index.js';
import { Order, Li } from "e-ui-react-native";

const data = [{
 title: "1. Civil Services Examination (CSE)",
 desc: "The exam consists of three stages: Preliminary Examination (Objective Type), Main Examination (Descriptive Type), and Personality Test (Interview).",
 notificationDate: "14 Feb 2024",
 applyLastDate: "05 Mar 2024",
 exams:[{
    title: "Preliminary Examination",
    info:{
        "Exam Date": "26 May 2024",
        "Exam Duration": "1 Day"
    }
 },{
    title: "Mains Examination",
    info:{
        "Exam Date": "20 Sep 2024",
        "Exam Duration": "5 Day"
    }
 },{
    title: "Personality Test (Interview)",
    info:{
        "Exam Date": "-",
        "Exam Duration": "1 Day"
    }
 }]
},{
    title: "2. Indian Forest Service Examination (IFoSE)",
    desc: "The exam consists of three stages: Preliminary Examination (Objective Type), Main Examination (Descriptive Type), and Personality Test (Interview).",
    notificationDate: "14 Feb 2024",
    applyLastDate: "05 Mar 2024",
    exams:[{
       title: "Preliminary Examination",
       info:{
           "Exam Date": "26 May 2024",
           "Exam Duration": "1 Day"
       }
    },{
       title: "Mains Examination",
       info:{
           "Exam Date": "24 Nov 2024",
           "Exam Duration": "7 Days"
       }
    },{
       title: "Personality Test (Interview)",
       info:{
           "Exam Date": "-",
           "Exam Duration": "1 Day"
       }
    }]
   },{
    title: "3. Engineering Services Examination (ESE)",
    desc: "The exam consists of three stages: Preliminary Examination (Objective Type), Main Examination (Descriptive Type), and Personality Test (Interview).",
    notificationDate: "06 Sep 2023",
    applyLastDate: "26 Sep 2023",
    exams:[{
       title: "Preliminary Examination",
       info:{
           "Exam Date": "18 Feb 2024",
           "Exam Duration": "1 Day"
       }
    },{
       title: "Mains Examination",
       info:{
           "Exam Date": "23 Jun 2024",
           "Exam Duration": "1 Days"
       }
    },{
       title: "Personality Test (Interview)",
       info:{
           "Exam Date": "-",
           "Exam Duration": "1 Day"
       }
    }]
   }];

const Calendar = (props) =>{
 return (<View style={{ flex:1, backgroundColor:'#fff'  }}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={{ paddingLeft:15, paddingRight: 15 }}>
    <Text style={[CalendarStyle.mainTitle, CalendarStyle.textCenter]}>UPSC Examination Calendar 2023/24</Text>
    {data?.map((d)=>{
        return (<View style={{ paddingTop: 15 }}>
            <Text style={CalendarStyle.title}>{d?.title}</Text>
            <Text style={CalendarStyle.desc}>{d?.desc}</Text>
            <View style={{marginTop:15, marginBottom:15, padding:15, borderWidth: 1, borderColor:'#555', borderRadius:8 }}>
            <View style={[CalendarStyle.row]}>
                <Text style={[CalendarStyle.leftCol, CalendarStyle.bold]}>Notification Date:</Text>
                <Text style={CalendarStyle.rightCol}>{d?.notificationDate}</Text>
            </View>
            <View style={[CalendarStyle.row, CalendarStyle.mtop15p]}>
                <Text style={[CalendarStyle.leftCol, CalendarStyle.bold]}>Last Date for receipt of Applications:</Text>
                <Text style={CalendarStyle.rightCol}>{d?.applyLastDate}</Text>
            </View>
            </View>
            {d?.exams?.map((exam)=>{
                return (<>
                    <Text style={[CalendarStyle.subTitle, CalendarStyle.textCenter]}>{exam?.title}</Text>
                    <View style={{ paddingTop:15, paddingLeft: 15, paddingRight:15 }}>
                    {Object.entries(exam?.info).map(([key, value]) =>{
                        return ( <View style={[CalendarStyle.row, CalendarStyle.mbot15p]}>
                            <Text style={[CalendarStyle.leftCol, CalendarStyle.bold]}>{key}:</Text>
                            <Text style={CalendarStyle.rightCol}>{value}</Text>
                       </View>);
                    })}
                    </View>
                </>);
            })}
            </View>);
    })}
 </ScrollView>
 </View>);
};

const CalendarStyle = StyleSheet.create({ 
    bold:{ fontWeight: 'bold' },
    row: { flex:1, flexDirection:'row' },
    leftCol: { width:'60%', color:'#333', lineHeight: 20 },
    rightCol: { width:'40%', color:'#333', lineHeight: 20 },
    mtop15p: { marginTop:15 },
    mbot15p: { marginBottom:15 },
    textCenter: { textAlign: 'center' },
    mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22 },
    title: { fontSize:16, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22 },
    desc: {  color:'#333', lineHeight: 20 },
    subTitle: { fontSize:13, paddingTop:5, paddingBottom:5, backgroundColor:'#ffcebe', color:'#000', lineHeight: 20, textTransform:'uppercase', fontWeight:'bold' }
 });

export default Calendar;