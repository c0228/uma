import React, { useState } from "react";
import { View, Text,TouchableOpacity, StyleSheet } from "react-native";
import { Order, Li } from "e-ui-react-native";
import LangDisplay from "./components/LangDisplay/index.js";
import OptSubjects from "./components/OptSubjects/index.js";

const ExamPaperPlan = () => {

    const PreliminaryExam = () =>{
        
        const data = {
            "Preliminary Examination": ["This Exam is comprised of two compulsory Papers of 200 marks each.",
                "Both the question papers will be of the objective type (multiple choice questions) and each will be of 2 hours duration.",
                "The General Studies Paper-II of the Civil Services (Preliminary) Examination will be a qualifying paper with minimum qualifying marks fixed at 33%.",
                "The question papers will be set both the languages in Hindi and English."]
        };

        return (<View>
            <Text style={ExamPaperPlanStyles.minTitle}>Preliminary Examination</Text>
            <Order style={ExamPaperPlanStyles.mtop15p}>
            {data?.["Preliminary Examination"].map((val,index) => {
                return (<Li key={index} style={ExamPaperPlanStyles.listText}>{val}</Li>);
            })}
            </Order>
        </View>);
    };

    const MainExamination = () =>{
       
        return (<View style={{ marginBottom:15 }}>
            <Text style={ExamPaperPlanStyles.minTitle}>Mains Examination</Text>
            <Text style={ExamPaperPlanStyles.paraDesc}>The Written Examination will consist of the following papers:</Text>
            <Text style={ExamPaperPlanStyles.subTitle}>Qualifying Papers</Text>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle1}>Paper - A</Text>
                    <Text style={ExamPaperPlanStyles.tblSimpleDesc}>
                        (One of the Indian Languages to be selected by the candidate from the Languages included in the
                        Eighth Schedule to the Constitution)
                    </Text>
                    <LangDisplay />
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>300 Marks</Text>
                </View>
            </View>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle1}>Paper - B</Text>
                    <Text style={ExamPaperPlanStyles.tblDesc}>English</Text>
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>300 Marks</Text>
                </View>
            </View>
            <Text style={[ExamPaperPlanStyles.subTitle, ExamPaperPlanStyles.mtop15p]}>Papers to be counted for merit</Text>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle1}>Paper - I</Text>
                    <Text style={ExamPaperPlanStyles.tblDesc}>Essay</Text>
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>250 Marks</Text>
                </View>
            </View>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle1}>Paper - II</Text>
                    <Text style={ExamPaperPlanStyles.tblDesc}>General Studies - I</Text>
                    <Text style={ExamPaperPlanStyles.tblSimpleDesc}>
                    (Indian Heritage and Culture, History and Geography of the World and Society) 
                    </Text>
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>250 Marks</Text>
                </View>
            </View>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle1}>Paper - III</Text>
                    <Text style={ExamPaperPlanStyles.tblDesc}>General Studies - II</Text>
                    <Text style={ExamPaperPlanStyles.tblSimpleDesc}>
                    (Governance, Constitution, Polity, Social Justice and International relations)
                    </Text>
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>250 Marks</Text>
                </View>
            </View>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle1}>Paper - IV</Text>
                    <Text style={ExamPaperPlanStyles.tblDesc}>General Studies - III</Text>
                    <Text style={ExamPaperPlanStyles.tblSimpleDesc}>
                    (Technology, Economic Development, Bio-diversity, Environment, Security and Disaster Management)
                    </Text>
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>250 Marks</Text>
                </View>
            </View>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle1}>Paper - V</Text>
                    <Text style={ExamPaperPlanStyles.tblDesc}>General Studies - IV</Text>
                    <Text style={ExamPaperPlanStyles.tblSimpleDesc}>
                    (Ethics, Integrity and Aptitude) 
                    </Text>
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>250 Marks</Text>
                </View>
            </View>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle1}>Paper - VI</Text>
                    <Text style={ExamPaperPlanStyles.tblDesc}>Optional Subject - Paper 1</Text>
                    <OptSubjects />
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>250 Marks</Text>
                </View>
            </View>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle1}>Paper - VII</Text>
                    <Text style={ExamPaperPlanStyles.tblDesc}>Optional Subject - Paper 2</Text>
                    <OptSubjects />
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>250 Marks</Text>
                </View>
            </View>
            <View style={[ExamPaperPlanStyles.tblFormat, { borderColor:'#777', borderStyle:'dashed', borderTopWidth:2, paddingTop:8, borderBottomWidth:2, paddingBottom:8 }]}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={[ExamPaperPlanStyles.tblDesc, { fontWeight:'bold', color:'#777' }]}>Written Test (Total Marks)</Text>
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={[ExamPaperPlanStyles.tblSubTitle2, { color:'#777' }]}>1750 Marks</Text>
                </View>
            </View>
            <View style={ExamPaperPlanStyles.tblFormat}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={ExamPaperPlanStyles.tblDesc}>Personality Test</Text>
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={ExamPaperPlanStyles.tblSubTitle2}>275 Marks</Text>
                </View>
            </View>
            <View style={[ExamPaperPlanStyles.tblFormat, { borderColor:'#777', borderTopWidth:2, paddingTop:8, borderBottomWidth:2, paddingBottom:8 }]}>
                <View style={ExamPaperPlanStyles.tblLeftCol}>
                    <Text style={[ExamPaperPlanStyles.tblDesc, { fontWeight:'bold', color:'#777' }]}>Grand Total</Text>
                </View>
                <View style={[ExamPaperPlanStyles.tblRightCol, { backgroundColor:'none' }]}>
                    <Text style={[ExamPaperPlanStyles.tblSubTitle2, { color:'#777' }]}>2025 Marks</Text>
                </View>
            </View>
        </View>);
    };

    
    return (<View>
        <View>
            <PreliminaryExam />
            <MainExamination />
        </View>
    </View>);
};

const ExamPaperPlanStyles = StyleSheet.create({
    mtop15p: { marginTop: 15 },
    minTitle: { marginTop: 10, color: '#333', fontSize: 13, textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' },
    subTitle: { color: '#333', fontSize: 14, textAlign: 'center', fontWeight: 'bold' },
    listText: { marginBottom: 10, lineHeight: 22, fontSize: 14, color: '#333' },
    paraDesc: { marginTop: 15, marginBottom: 10, lineHeight: 22, fontSize: 14, color: '#333' },
    tblFormat: { flex: 1, flexDirection: 'row', marginTop: 10, flexWrap: 'wrap' },
    tblLeftCol: { width: '75%',  },
    tblRightCol: { width: '25%', alignItems: 'flex-end' },
    tblSubTitle1: { fontWeight: 'bold', color: '#333', textTransform: 'uppercase' },
    tblSubTitle2: { fontWeight: 'bold', color: '#333' },
    tblSimpleDesc: { lineHeight: 22 },
    tblDesc: { color: '#333', lineHeight: 22 }
});

export default React.memo(ExamPaperPlan);