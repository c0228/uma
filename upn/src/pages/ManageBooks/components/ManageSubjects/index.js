import React, { useEffect, useState } from "react";
import { ContainerFluid, Row, Col, Card, Form, TextBox, Switch, UrlAsyncFetch, ModalAlert } from "e-ui-react";

const ManageSubjects = () =>{
 const [showAlert, setShowAlert] = useState({ status:false, type:'', message:'' });
 const [examList, setExamList] = useState([]);
 const initialize = async() =>{
  const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/exams/list', 'GET', {});
  let exams = [];
     response?.data?.map(d=>{
       exams.push( { id: d?.exam_id, label: d?.exam, value: d?.exam_id } );
     });
  setExamList( exams );
 };
 useEffect(()=>{ initialize(); },[]);
 return (
    <div>
    <Row>
        <Col md={6}>
        <ModalAlert title={showAlert?.message} type={showAlert?.type} show={showAlert?.status} 
      onClose={(show)=>{ setShowAlert({ type:'', message:'', status: show }); }} />
        <Card padding={15}>
    <div><h4 style={{ paddingBottom:15, borderBottom:'1px solid #ccc' }}><b>Add New Subject</b></h4></div>
    <Form name="testForm" btnSubmit={{
          align: 'center',
          btnType:'success',
          label:'Add New Subject',
          size: 12,
          style:{ fontWeight:'bold' }
        }} 
        btnReset={{ 
            align: 'center',
            btnType:'danger',
            label:'Reset',
            size: 12,
            style:{ fontWeight:'bold' }
        }}
        onSubmit={async(form, isValidForm, triggerReset)=>{
          console.log("Form Result:", form);
          if(isValidForm){
            const subject = form?.['testForm']?.subjectName?.value;
            const exams = form?.['testForm']?.SelectedExams?.value?.map((exam)=>exam.id).join('|');
            const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/add/new/subject', 
              'POST', { subject: subject, exams: exams });
            console.log("response: ", response);
            setShowAlert({ message:response?.message, status:true, type:response?.status?.toLowerCase() });
            triggerReset();
          }
        }}
        onReset={(triggerReset)=>{
          triggerReset();
        }}
        >
    <div>
        <TextBox name="subjectName" label="Subject Name" placeholder="Enter your Subject Name" />
    </div>
    {examList?.length>0 && (<div className="mtop15p">
        <Switch type="checkbox" id="SelectedExams" name="SelectedExams" label="Select Examinations" 
                value={examList} 
                disabled={false} />
    </div>)}
    </Form>
    </Card>
        </Col>
    </Row>
    </div>);
};
export default ManageSubjects;