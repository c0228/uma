import React, { useEffect, useState } from "react";
import { Card, Row, Col, Icon, Form, Select, TextBox, Button, UrlAsyncFetch } from "e-ui-react";

const AddTopicForm = () =>{
 const [subjectList, setSubjectList] = useState([]);
 const initialize = async() =>{
  const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/subjects/list', 'GET', {});
  let subjects = [];
     response?.data?.map(d=>{
        subjects.push( { id: d?.subject, label: d?.subject, value: d?.subject } );
     });
     setSubjectList( subjects );
 };
 useEffect(()=>{ initialize(); },[]);
 const FormItemTopic = () =>{
  return (<Row>
    <Col md={1}>
        <div align="center"  className="mtop15p">
            <Icon type="FontAwesome" name="fa-bars" size={14} style={{ paddingRight:'5px', color:'#ccc', paddingTop:'8px' }} />
            1.
        </div>
    </Col>
    <Col md={10}>
        <div className="mtop15p">
            <TextBox name="topicName" placeholder="Enter your Topic Name" />
        </div>
    </Col>
    
    <Col md={1}></Col>
</Row>);
 };
 const FormItemSubTopic = () =>{
    return (<Row>
      <Col md={1}></Col>
      <Col md={1}>
          <div align="center"  className="mtop15p">
              <Icon type="FontAwesome" name="fa-ellipsis-v" size={14} style={{ color:'#ccc', paddingTop:'8px' }} />
              <Icon type="FontAwesome" name="fa-ellipsis-h" size={14} style={{ paddingLeft:'5px', color:'#ccc', paddingTop:'8px' }} />
          </div>
      </Col>
      <Col md={9}>
          <div className="mtop15p">
              <TextBox name="topicName" placeholder="Enter your Sub-topic Name" />
          </div>
      </Col>
      <Col md={1}>
        <div className="mtop15p">
            <Button type="primary" label={<div>S</div>} size={11} />
        </div>
      </Col>
  </Row>);
   };
 return (<Card padding={15}>
    <div><h4 style={{ paddingBottom:15, borderBottom:'1px solid #ccc' }}><b>Add New Topic</b></h4></div>
    <Form name="testForm" btnSubmit={{
          align: 'center',
          btnType:'success',
          label:'Add New Topic',
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
        <Row>
            <Col md={11}>
                    {subjectList?.length>0 && (<Select
                label="Subject Name"
                placeholder="Select Subject"
                options={subjectList}
                className="navbar-layout"
                fontSize="12"
                onChange={(event) => {
                    let option = event.target.value;
                    let bgColor = (option === 'Dark') ? '#282a36' : '#fff';
                    let color = (option === 'Dark') ? '#fff' : '#282a36';
                    document.body.style.backgroundColor = bgColor;
                    document.body.style.color = color;
                }}
            />)}
            </Col>
            <Col md={1}>
                <div className="mtop25p">
                    <Button type="primary" label={<div>T</div>} size={11} />
                </div>
            </Col>
        </Row>
        <FormItemTopic/>
        <FormItemTopic />
        <FormItemSubTopic />
    </div>
    </Form>
    </Card>);
};
export default AddTopicForm;