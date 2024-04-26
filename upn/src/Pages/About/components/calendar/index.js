import React from "react";
import { View, Text, ScrollView , StyleSheet } from 'react-native';
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { Order, Li } from "e-ui-react-native";

const data = [{
 title: "Civil Services Examination (CSE)",
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
    title: "Indian Forest Service Examination (IFoSE)",
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
    title: "Engineering Services Examination (ESE)",
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
   },{
    title: "Combined Defence Services (CDS) Examination",
    desc: "Examination is conducted twice a year and Only unmarried graduates are eligible to sit for the exam. Successful candidates are admitted into the respective Academies after an interview conducted by the Services Selection Board (SSB).",
    exams:[{
       title: "Examination (I)",
       info:{
            "Notification Date":"20 Dec 2023",
            "Last Date for receipt of Applications":"09 Jan 2024",
            "Exam Date": "21 April 2024",
            "Exam Duration": "1 Day"
       }
    },{
       title: "Examination (II)",
       info:{
            "Notification Date":"15 May 2024",
            "Last Date for receipt of Applications":"04 June 2024",
            "Exam Date": "01 Sep 2024",
            "Exam Duration": "1 Day"
       }
    },{
       title: "Personality Test (Interview)",
       info:{
           "Exam Date": "-",
           "Exam Duration": "1 Day"
       }
    }]
   },{
    title: "National Defence Academy (NDA) and Naval Academy (NA) Examination",
    desc: "Examination is conducted twice a year for the admissions into the National Defence Academy (NDA) and Indian Naval Academy (INA). The NDA Exam serves as a gateway for candidates seeking a career in the Indian Army, Navy, and Air Force.",
    exams:[{
       title: "Examination (I)",
       info:{
            "Notification Date":"20 Dec 2023",
            "Last Date for receipt of Applications":"09 Jan 2024",
            "Exam Date": "21 April 2024",
            "Exam Duration": "1 Day"
       }
    },{
       title: "Examination (II)",
       info:{
            "Notification Date":"15 May 2024",
            "Last Date for receipt of Applications":"04 Jun 2024",
            "Exam Date": "01 Sep 2024",
            "Exam Duration": "1 Day"
       }
    },{
       title: "Personality Test (Interview)",
       info:{
           "Exam Date": "-",
           "Exam Duration": "1 Day"
       }
    }]
   },{
    title: "Indian Economic Service (IES) and Indian Statistical Service (ISS) Examination",
    desc: "This competitive examination conducted annually for the recruitment of candidates to the Indian Economic Service and the Indian Statistical Service under the Government of India.",
    exams:[{
       info:{
            "Notification Date":"10 Apr 2024",
            "Last Date for receipt of Applications":"30 Apr 2024",
            "Exam Date": "21 Jun 2024",
            "Exam Duration": "3 Days"
       }
    }]
   },{
    title: "Combined Medical Services (CMS) Examination",
    desc: "This Exam is held annually to recruit medical officers for various government organizations and services, including the Indian Railways, Indian Ordnance Factories Health Service, Central Health Service, Municipal Corporation of Delhi, and New Delhi Municipal Council.",
    exams:[{
       info:{
            "Notification Date":"10 Apr 2024",
            "Last Date for receipt of Applications":"30 Apr 2024",
            "Exam Date": "14 Jul 2024",
            "Exam Duration": "1 Day"
       }
    }]
   },{
    title: "Combined Geoscientist and Geologist (CGG) Examination",
    desc: "This Exam held once a year and consists of three stages - Preliminary Examination, Mains Examination and Personality Test (Interview).",
    notificationDate: "20 Sep 2023",
    applyLastDate: "10 Oct 2023",
    exams:[{
       title: "Preliminary Examination",
       info:{
            "Exam Date": "18 Feb 2024",
            "Exam Duration": "1 Day"
       }
    },{
       title: "Mains Examination",
       info:{
            "Exam Date": "22 Jun 2024",
            "Exam Duration": "2 Days"
       }
    },{
       title: "Personality Test (Interview)",
       info:{
           "Exam Date": "-",
           "Exam Duration": "1 Day"
       }
    }]
   },{
    title: "Central Armed Police Forces (CAPF) Examination",
    desc: "This Exam is held annually to recruit candidates for various paramilitary forces under the Ministry of Home Affairs of the Government of India. The CAPF includes forces such as the Border Security Force (BSF), Central Reserve Police Force (CRPF), Central Industrial Security Force (CISF), Indo-Tibetan Border Police (ITBP), and Sashastra Seema Bal (SSB).",
    exams:[{
       info:{
            "Notification Date":"24 Apr 2024",
            "Last Date for receipt of Applications":"15 May 2024",
            "Exam Date": "04 Aug 2024",
            "Exam Duration": "1 Day"
       }
    }]
   },{
    title: "Special Class Railway Apprentice (SCRA)",
    desc: "SCRA exam was discontinued after the 2015 recruitment cycle due to various reasons, including the changing needs of the Indian Railways and the emergence of other recruitment processes. Instead, the Indian Railways began recruiting engineering graduates through the Indian Engineering Services (IES) examination conducted by the UPSC and through direct recruitment."
   }];

const Calendar = (props) =>{
 return (<View style={{ flex:1, backgroundColor:'#fff'  }}>
 <HamburgerIcon {...props}/>      
 <ScrollView style={{ paddingLeft:15, paddingRight: 15 }}>
    <Text style={[CalendarStyle.mainTitle, CalendarStyle.textCenter]}>UPSC Examination Calendar 2023/24</Text>
    <View style={{ marginBottom:20 }}>
    {data?.map((d, i)=>{
        return (<View key={i} style={{ paddingTop: 15 }}>
            <View style={{ flex:1, flexDirection:'row' }}>
              <Text style={[CalendarStyle.title, { width:'8%' }]}>{i>=9?(i+1):'0'+(i+1)}.</Text>
              <Text style={[CalendarStyle.title, { width:'92%' }]}>{d?.title}</Text>
            </View>
            <Text style={CalendarStyle.desc}>{d?.desc}</Text>
            {(d?.notificationDate || d?.applyLastDate) &&
            (<View style={{ marginBottom:15, padding:15, borderWidth: 1, borderColor:'#555', borderRadius:8 }}>
            {(d?.notificationDate) && <View style={[CalendarStyle.row]}>
                <Text style={[CalendarStyle.leftCol, CalendarStyle.bold]}>Notification Date:</Text>
                <Text style={CalendarStyle.rightCol}>{d?.notificationDate}</Text>
            </View>}
            {(d?.applyLastDate) && <View style={[CalendarStyle.row, CalendarStyle.mtop15p]}>
                <Text style={[CalendarStyle.leftCol, CalendarStyle.bold]}>Last Date for receipt of Applications:</Text>
                <Text style={CalendarStyle.rightCol}>{d?.applyLastDate}</Text>
            </View>}
            </View>)}
            {d?.exams?.map((exam, index)=>{
                return (<View key={index}>
                    {exam?.title && (<Text style={[CalendarStyle.subTitle, CalendarStyle.textCenter]}>{exam?.title}</Text>)}
                    <View style={{ paddingLeft: 15, paddingRight:15 }}>
                    {Object.entries(exam?.info).map(([key, value],index) =>{
                        return ( <View key={index} style={[CalendarStyle.row, CalendarStyle.mbot15p]}>
                            <Text style={[CalendarStyle.leftCol, CalendarStyle.bold]}>{key}:</Text>
                            <Text style={CalendarStyle.rightCol}>{value}</Text>
                       </View>);
                    })}
                    </View>
                </View>);
            })}
            </View>);
    })}  
    </View>
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
    desc: {  marginBottom:15, color:'#333', lineHeight: 20 },
    subTitle: { marginBottom:15, fontSize:13, paddingTop:5, paddingBottom:5, backgroundColor:'#ffcebe', color:'#000', lineHeight: 20, textTransform:'uppercase', fontWeight:'bold' }
 });

export default React.memo(Calendar);