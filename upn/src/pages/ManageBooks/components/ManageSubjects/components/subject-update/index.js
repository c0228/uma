import React, { useEffect, useState }  from 'react';
import { ContainerFluid, Alert, Row, Col, Card, Form, TextBox, Switch, UrlAsyncFetch, ModalAlert } from "e-ui-react";

const UpdateSubject = ({ data, reset }) =>{
 const [showAlert, setShowAlert] = useState({ status:false, type:'', message:'' });
 const [formValues, setFormValues] = useState({ subject:'', exams:[] });
 useEffect(()=>{ setFormValues(data); 
  setShowAlert({ status:false, type:'', message:'' });
 },[data]);
 return (<div>
    {showAlert?.status && 
      (<Alert type={showAlert?.type} show={showAlert?.status} body={<div>{showAlert?.message}</div>} />)}
    <Form name="testForm" btnSubmit={{
          align: 'center',
          btnType:'success',
          label:'Update Subject',
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
          if(isValidForm){
            const subject = form?.['testForm']?.subjectName?.value;
            const exams = form?.['testForm']?.SelectedExams?.value?.map((exam)=>exam.id).join('|');
            const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/subject/update', 
              'POST', { newSubjectName: subject, oldSubjectName: data?.subject, exams: exams });
            setShowAlert({ message:response?.message, status:true, type:'success' });
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
    {formValues?.subject?.length>0 && (<div>
        <TextBox name="subjectName" label="Subject Name" placeholder="Enter your Subject Name" 
        value={formValues?.subject}
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 2,
                errorMessage:"Message should be greator than 2"
            }
        }} />
    </div>)}
    {formValues?.exams?.length>0 && (<div className="mtop15p">
        <Switch type="checkbox" id="SelectedExams" name="SelectedExams" label="Select Examinations" 
                value={formValues?.exams} 
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

export default UpdateSubject;