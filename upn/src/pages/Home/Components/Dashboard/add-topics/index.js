import React, { useState, useEffect } from 'react';
import { ContainerFluid, Row, Col, Button, Icon, Card, Select, UrlAsyncFetch, TextArea, NumRange } from 'e-ui-react';
import TopicRow from './components/topic-row/index.js';

const AddTopicForm = () => {
  const [subjectList, setSubjectList] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState();
  const [selectedNewRows, setSelectedNewRows] = useState();
  const initialize = async() =>{
    const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/subjects/list', 'GET', {});
    let subjects = [];
    response?.data?.map(d=>{
      subjects.push( { id: d?.subject, label: d?.subject, value: d?.subject } );
    });
    setSubjectList( subjects );
  };
  useEffect(()=>{ initialize(); },[]);
 


  return (<Card padding={15}>
    <div><h4 style={{ paddingBottom:15, borderBottom:'1px solid #ccc' }}><b>Add / Update Topics</b></h4></div>
    <div className="mtop15p">
    <ContainerFluid>
      <Row>
        <Col md={6}>
          {subjectList?.length>0 && (<Select
                label="Subject Name"
                placeholder="Select Subject"
                options={subjectList}
                className="navbar-layout"
                fontSize="12"
                onChange={(event) => {
                  setSelectedSubject(event.target.value);
                }}
            />)}
        </Col>
        <Col md={4}></Col>
        <Col md={2}>
          <div className="mtop25p">
            <Select
                placeholder="No. of Rows"
                options={NumRange(1,10)?.map((r)=>{
                  return  { id: r, label: r, value: r };
                })}
                className="navbar-layout"
                fontSize="12"
                onChange={(event) => {
                  setSelectedNewRows(event.target.value);
                }} />
          </div>
        </Col>
      </Row>
    </ContainerFluid>
    </div>
    {selectedSubject && <TopicRow subject={selectedSubject} selectedNewRows={selectedNewRows} />}
  </Card>);
};

export default AddTopicForm;
