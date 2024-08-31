import React, { useEffect, useState }  from 'react';
import { ContainerFluid, Alert, Row, Col, Card, Form, TextBox, Switch, UrlAsyncFetch, ModalAlert } from "e-ui-react";

const AddSubject = ({ examList, reset }) =>{
 const [showAlert, setShowAlert] = useState({ status:false, type:'', message:'' });
 return (<div>
    {showAlert?.status && 
      (<Alert type={showAlert?.type} show={showAlert?.status} body={<div>{showAlert?.message}</div>} />)}
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
            reset();
          } else {
            setShowAlert({ message:'Please Enter Valid Details in the Form', status:true, type:'danger' });
          }
        }}
        onReset={(triggerReset)=>{
          triggerReset();
          setShowAlert({ status:false, type:'', message:'' });
        }}
        >
    <div>
        <TextBox name="subjectName" label="Subject Name" placeholder="Enter your Subject Name" validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 2,
                errorMessage:"Message should be greator than 2"
            }
        }} />
    </div>
    {examList?.length>0 && (<div className="mtop15p">
        <Switch type="checkbox" id="SelectedExams" name="SelectedExams" label="Select Examinations" 
                value={examList} 
                validation={{
                  required:{
                      value: true,
                      errorMessage : ""
                  },
                  minSelect:{
                      value: 1,
                      errorMessage: ""
                  }
                 }} />
    </div>)}
    </Form>
 </div>);
};

export default AddSubject;