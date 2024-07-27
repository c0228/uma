import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Switch, TouchableOpacity, BackHandler, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getAppContext } from '@AdvancedTopics/ReactContext/index.js';
import { Button } from '@AppFormElement/Button/index.js';
import { Select } from '@AppFormElement/Select/index.js';
import { Alert } from '@AppComponent/Alert/index.js';
import AlertModal from '@AppComponent/AlertModal/index.js';
import { AddToSPStore, getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import BEHeader, { HeaderTitle } from './../BEHeader.js';
import BEFooter from './../BEFooter.js';
import { Order, Li } from "e-ui-react-native";

const exams= [{ name:"Civil Service Examination (CSE)",
    desc: (<View><Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a graduate degree from a 
        recognized university or an equivalent qualification.</Text></View>) },
   { name:"Indian Forest Service Examination (IFoSE)",
     desc:(<View><Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a graduate degree from a recognized university 
        with at least one of the subjects - Animal Husbandry & Veterinary Science, Botany, Chemistry, Geology, Mathematics, 
        Physics, Statistics, Zoology, Agriculture, Forestry, Engineering (any discipline).</Text></View>)
   },{ name:"Engineering Services Examination (ESE)",
       desc:(<View><Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have  graduate degree from a recognized university 
        who was specialized in one of the stream - Civil Engineering, Mechanical Engineering, Electrical Engineering and 
        Electronics & Telecommunication Engineering</Text></View>) },
   { name:"Combined Defence Services (CDS) Examination",
       desc: (<View><Text style={{ lineHeight:22 }}>Combined Defence Services (CDS) Exam is conducted for recruitment into </Text>
        <View style={{ paddingTop:5 }}>
            <Text style={{ fontWeight:'bold' }}>1. Indian Military Academy (IMA)</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a graduate degree from a recognized university or equivalent.</Text>
        </View>
        <View style={{ paddingTop:5 }}>
            <Text style={{ fontWeight:'bold' }}>2. Indian Naval Academy (INA)</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a graduate degree in Engineering 
                from a recognized university or equivalent.</Text>
        </View>
        <View style={{ paddingTop:5 }}>
            <Text style={{ fontWeight:'bold' }}>3. Air Force Academy (AFA)</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a graduate degree
                from a recognized university (with Physics and Mathematics at 10+2 level) or a Bachelor of Engineering degree.</Text>
        </View>
        <View style={{ paddingTop:5 }}>
            <Text style={{ fontWeight:'bold' }}>4. Officers Training Academy (OTA)</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a graduate degree
                from a recognized university or equivalent.</Text>
        </View>
       </View>)
   },
   { name:"National Defence Academy (NDA) Examination",
       desc: (<View><Text style={{ lineHeight:22 }}>National Defence Academy (NDA) Exam is conducted for recruitment into </Text>
        <View style={{ paddingTop:5 }}>
            <Text style={{ lineHeight:22, fontWeight:'bold' }}>1. For Army Wing of National Defence Academy</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have passed the 12th class 
                (10+2) of the 10+2 pattern of School Education or equivalent examination conducted by a State Education Board 
                or a University.</Text>
        </View>
        <View style={{ paddingTop:5 }}>
            <Text style={{ lineHeight:22, fontWeight:'bold' }}>2. For Air Force and Naval Wings of National Defence Academy and 
                for the 10+2 Cadet Entry Scheme at the Indian Naval Academy</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have passed the 12th class 
                (10+2) of the 10+2 pattern of School Education or equivalent with Physics and Mathematics conducted by a State 
                Education Board or a University.</Text>
        </View>
       </View>)
   },
   { name:"Indian Economic Service (IES) Examination",
       desc: (<View><Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a Post-Graduate Degree 
       in Economics/Applied Economics/Business Economics/Econometrics from a recognized university or institution.</Text></View>)
   },
   { name:"Indian Statistical Service (ISS) Examination",
       desc: (<View><Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a Bachelor's / Master's Degree 
       with Statistics/Mathematical Statistics/Applied Statistics as one of the subjects  from a recognized university.</Text></View>)
   },
   { name:"Combined Medical Services (CMS) Examination",
       desc: (<View><Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have passed the written 
       and practical parts of the final MBBS Examination.</Text></View>)
   },
   { name:"Naval Academy (NA) Examination",
       desc: (<View><Text style={{ lineHeight:22 }}>The Naval Academy (NA) Examination is conducted by the Union Public Service 
       Commission (UPSC) as part of the National Defence Academy (NDA) & Naval Academy (NA) Examination. It is held for admission 
       to the Indian Naval Academy for the 10+2 Cadet Entry Scheme.A candidate should satisfy Age Limit and he/she must have 
       passed the 12th Class (10+2) or equivalent with Physics and Mathematics from a recognized board or university.</Text></View>)
   },
   { name:"Combined Geoscientist and Geologist (CGG) Examination",
       desc: (<View>
        <Text style={{ lineHeight:22 }}>Combined Geoscientist and Geologist (CGG) Exam is conducted for recruitment into </Text>
        <View>
            <Text style={{ lineHeight:22, fontWeight:'bold' }}>1. Geologist</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a Master’s degree in Geological 
                Science or Geology or Applied Geology or Geo-Exploration or Mineral Exploration or Engineering Geology or Marine Geology 
                or Earth Science and Resource Management or Oceanography and Coastal Area Studies or Petroleum Geosciences or 
                Geochemistry or Geophysics or M.Sc. (Technology) in Geological Technology or M.Sc. (Technology) in Hydrogeology 
                from a recognized university.</Text>
        </View>
        <View>
            <Text style={{ lineHeight:22, fontWeight:'bold' }}>2. Geophysicist</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a M.Sc. in Physics or 
                Applied Physics or M.Sc. (Geophysics) or Integrated M.Sc. (Exploration Geophysics) or M.Sc (Applied Geophysics) 
                or M.Sc. (Marine Geophysics) or M.Sc. (Tech.) in Applied Geophysics from a recognized university.</Text>
        </View>
        <View>
            <Text style={{ lineHeight:22, fontWeight:'bold' }}>3. Chemist</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a M.Sc. in Chemistry 
                or Applied Chemistry or Analytical Chemistry from a recognized university.</Text>
        </View>
        <View>
            <Text style={{ lineHeight:22, fontWeight:'bold' }}>4. Scientist "B" (Hydrogeology)</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a Master’s degree in 
                Geology or Applied Geology or Marine Geology from a recognized university.</Text>
        </View>
        <View>
            <Text style={{ lineHeight:22, fontWeight:'bold' }}>5. Scientist "B" (Chemical)</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a M.Sc. in Chemistry 
                from a recognized university.</Text>
        </View>
        <View>
            <Text style={{ lineHeight:22, fontWeight:'bold' }}>6. Scientist "B" (Geophysics)</Text>
            <Text style={{ lineHeight:22 }}>A candidate should satisfy Age Limit and he/she must have a M.Sc. in Physics or 
                Applied Physics or Geophysics or Marine Geophysics or Exploration Geophysics from a recognized university.</Text>
        </View>
      </View>)
   },
   { name:"Central Armed Police Forces (CAPF) Examination",
       desc: (<View><Text style={{ lineHeight:22 }}>Central Armed Police Forces (CAPF) Examination is conducted for recruitment 
       to the various Central Armed Police Forces (CAPFs) in India that includes Border Security Force (BSF), 
       Central Reserve Police Force (CRPF), Central Industrial Security Force (CISF), Indo-Tibetan Border Police (ITBP), 
       Sashastra Seema Bal (SSB). A candidate should satisfy Age Limit and he/she must hold a Bachelor's degree from a 
       recognized university or equivalent.</Text></View>)
   }];

const ExamTarget = () =>{
 const { contextData, setContextData } = getAppContext();
 const accountInfo = contextData?.userDetails?.accountInfo;
 const navigation = useNavigation();
 const [examList, setExamList] = useState([]);
 const [alertMessage, setAlertMessage] = useState("");
 const backButton = () =>{
    const backHandler = BackHandler.addEventListener('hardwareBackPress',  () => { // onBack Press
      setContextData({ displayScreen: 'EDUSTATUS' }); // Move to Introduction
      return true; // Prevent default back action
    });
    return () => backHandler.remove();
 }; 
 useEffect(() => { backButton(); }, []);
 useEffect(()=>{
    console.log("alertMessage", alertMessage);
  },[alertMessage]);
 useEffect(()=>{
   console.log("examList", examList);
 },[examList]);
 const initialize = async() =>{
  const details = await getFromSPStore("USER_DETAILS");
  console.log("details: ", details);
 };
 useEffect(()=>{
  initialize();
 },[]);
 const selectedExam= (exam)=>{
    // Check if the object exists in the array
    const index = examList.findIndex(item => item?.exam === exam?.name);
    const sOptions = [...examList];
    console.log("sOptions", sOptions, "index", index);
    if (index !== -1) { // Object exists, so remove it from the array
        sOptions.splice(index, 1);
    } else { // Object doesn't exist, so add it to the array
        sOptions.push({ exam: exam?.name });
    }
    setExamList(sOptions);
    console.log("sOptions [out]", sOptions);
 };

 const addExpectedYear = (examName, year) =>{
  const eList = examList.map(list => {
    if (list.exam === examName) {
      return { ...list, year };
    } else {
        return list;
    }
  });
  setExamList(eList);
 };

 const [modalVisible, setModalVisible] = useState(false);

 const AlertDisplayView = () =>{
  return (<View>
    {<AlertModal title="Alert Message" visible={modalVisible} onClose={(isVisible) => setModalVisible(isVisible)}>
       <View style={{ paddingLeft:5, paddingRight:5, paddingBottom:15 }}>
        <Text style={{ lineHeight:22 }}>{alertMessage}</Text>
        </View>
    </AlertModal>}
  </View>);
 };

 return (
    <View style={{ flex:1, backgroundColor:'#fff' }}>
        <BEHeader name={accountInfo?.surname+" "+accountInfo?.name} formSize={3} activeForm={1} />
        <HeaderTitle 
            title="Choose your Targeted Exams" 
            subTitle="Specify the Examinations that you are planning to pursue in the Upcoming Years -" />
    
 <ScrollView style={{ paddingLeft:5, marginBottom:5, paddingRight:5 }}>
    {exams?.map((exam,index)=>{
        const isSelected = examList?.some((selected) => selected?.exam === exam);
        return (<View key={index}>
        <View style={ExamTargetStyle.examList}>
            <View style={{ width:'15%' }}>
              <Switch value={isSelected} onValueChange={() =>selectedExam(exam)} />
            </View>
            <View style={{ width:'85%' } }>
                <View>
                    <TouchableOpacity onPress={()=>selectedExam(exam)}>
                    <Text style={ExamTargetStyle.examTitle}>{exam?.name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop:5, marginRight:10, paddingTop:6, paddingBottom:6, paddingLeft:8,paddingRight:6, borderRadius:8, borderWidth:1, borderColor:'#ccc' }}>
                    {exam?.desc}
                </View>
            </View>
            </View>
            </View>);
    })}
</ScrollView>
 <BEFooter 
    label={{ previous:'Previous', next:'Next' }}
    previousForm={()=>{
        setContextData({ displayScreen: 'AVATAR' });
    }} 
    nextForm={()=>{
        setContextData({ displayScreen: 'TIMETABLE' });
    }} />

    <AlertDisplayView />
</View>);
};

const ExamTargetStyle = StyleSheet.create({ 
 mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22, textAlign: 'center' },
 examList:{ flex:1, paddingTop:10, paddingBottom:8, flexDirection:'row' },
 examTargetDesc: { marginTop:5, marginBottom:2, fontStyle:'italic', lineHeight:22, paddingLeft:10, paddingRight:10, color:'#333', textAlign:'center' },
 examTitle:{ marginLeft:2, paddingRight:6, fontSize:15, lineHeight:22, color:'#555', fontWeight:'bold', fontStyle:'italic' },
 examParams:{ width:'90%', marginTop:6, borderWidth:1, borderRadius:5, borderColor:'#ccc', 
 padding:10, backgroundColor:'#fcfcfc' },
 examRequired:{ width:'100%', justifyContent:'center', flexDirection:'row', paddingBottom:10 },
 fontBold:{ fontWeight:'bold' },
 examExpected1:{ flexDirection:'row', paddingBottom:10 },
 examExpectedCol1:{ width:'50%', paddingRight:10, borderRightWidth:1, borderColor:'#ccc'  },
 examExpectedCol1Title:{ lineHeight:22, fontSize:14, flex:1 },
 examExpectedCol2:{ width:'50%', paddingLeft:10  },
 examExpected2:{ width:'100%', flexDirection:'row' },
 examExpected2Title:{ lineHeight:22, fontStyle:'italic' }
});

export default ExamTarget;