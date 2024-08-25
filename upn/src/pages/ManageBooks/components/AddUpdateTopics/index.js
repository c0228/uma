import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Select, UrlAsyncFetch, NumRange } from "e-ui-react";
import TopicRow from './components/topic-row/index.js';

const AddUpdateTopics = () =>{
 const [subjectList, setSubjectList] = useState([]);
 const [selectedSubject, setSelectedSubject] = useState('');
 const [selectedNewRows, setSelectedNewRows] = useState();
 const [topicsData, setTopicsData] = useState([]);

 const initialize = async() =>{
   const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/subjects/list', 'GET', {});
   let subjects = [];
   response?.data?.map(d=>{
    subjects.push( { id: d?.subject, label: d?.subject, value: d?.subject } );
   });
   setSubjectList( subjects );
  };

  useEffect(()=>{ initialize(); },[]);
  
  const handleTopicsOfSubject = async(subject) =>{
    setSelectedSubject( subject );
    const data = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/topics/list', 'POST', { subject: subject });
    setTopicsData(  data?.topics );
  };
  
  const Header = ({ title }) =>{
   return (<div><h4 style={{ paddingBottom:15, borderBottom:'1px solid #ccc' }}><b>{title}</b></h4></div>);
  };

  return (<div>
   <Row>
    <Col md={12}>
     <Card padding={15}>
      <Header title="Add / Update Topics" />
      <Row>
       <Col md={4}>
        {subjectList?.length>0 && (<Select 
         label="Subject Name"
         placeholder="Select Subject"
         options={subjectList}
         className="navbar-layout"
         fontSize="12"
         onChange={(event) =>handleTopicsOfSubject(event.target.value)} />)}
       </Col>
       <Col md={6}></Col>
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
      {selectedSubject?.length>0 && 
        (<TopicRow subjectName={selectedSubject} selectedNewRows={selectedNewRows} topicsData={topicsData} />)}
    </Card>
   </Col>
  </Row>
 </div>);
};

export default AddUpdateTopics;
