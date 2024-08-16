import React, { useEffect, useState } from "react";
import { Card, Form, TextBox, Switch, UrlAsyncFetch } from "e-ui-react";

const AddSubjectForm = () =>{
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
 return (<Card padding={15}>
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
        onSubmit={(form, isValidForm, triggerReset)=>{
          console.log("Form Result:", form);
          triggerReset();
        }}>
    <div>
        <TextBox name="subjectName" label="Subject Name" placeholder="Enter your Subject Name" />
    </div>
    {examList?.length>0 && (<div className="mtop15p">
        <Switch type="radio" id="SelectedExams" name="SelectedExams" label="Select Examinations" 
                value={examList} 
                disabled={false} />
    </div>)}
    </Form>
    </Card>);
};
export default AddSubjectForm;