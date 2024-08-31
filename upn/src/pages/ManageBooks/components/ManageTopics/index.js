import React, { useEffect, useState } from "react";
import { Row, Col, Select, Button, UrlAsyncFetch, NumRange } from "e-ui-react";
import ViewTopics from './components/view-topics/index.js';

const ManageTopics = () =>{
 const [mode, setMode] = useState('View');
 const [subjectList, setSubjectList] = useState([]);
 const [selectedSubject, setSelectedSubject] = useState('');
 const [selectedNewRows, setSelectedNewRows] = useState();
 const [topicsData, setTopicsData] = useState([]);
 const Header = ({ title }) =>{
  return (<div><h4 style={{ paddingBottom:15, borderBottom:'1px solid #ccc' }}><b>{title}</b></h4></div>);
 };
 /* useEffect(()=>{
    subject/topic/list
 },[]); */
 const initialize = async() =>{
    const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/subjects/list/all', 'GET', {});
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
 return (<div>
  <Row>
    <Col md={12}><Header title="List of Topics" /></Col>
  </Row>
  <Row>
       <Col md={4}>
        {subjectList?.length>0 && (<Select 
         label="Subject Name"
         placeholder="Select Subject"
         options={subjectList}
         fontSize="12"
         onChange={(event) =>handleTopicsOfSubject(event.target.value)} />)}
       </Col>
       <Col md={4}></Col>
       <Col md={4}>
        {selectedSubject?.length>0 && 
         (<div className="mtop25p" style={{ display:'flex', flexDirection:'row', justifyContent:'flex-end' }}>
            <div>
                <Select
                    options={[{id:'View', label:'View', value:'View'},
                        {id:'Sorting', label:'Sorting', value:'Sorting'},
                        {id:'Update', label:'Update', value:'Update'},
                        {id:'Add New', label:'Add New', value:'Add New'}]}
                    width="110"
                    value={mode}
                    fontSize="12"
                    onChange={(event) =>setMode(event.target.value)} />
            </div>
            {mode==='Add New' && (<div style={{ marginLeft:'5px' }}>
                <Select
                    placeholder="No. of New Topics"
                    options={NumRange(1,10)?.map((r)=>{
                    return  { id: r, label: r, value: r };
                    })}
                    width="150"
                    fontSize="12"
                    onChange={(event) => {
                    setSelectedNewRows(event.target.value);
                    }} />
            </div>)}
          </div>)}
       </Col>
  </Row>
  <Row>
    <Col md={12}>
    {selectedSubject?.length>0 && 
        (<ViewTopics mode={mode} subjectName={selectedSubject} selectedNewRows={selectedNewRows} topicsData={topicsData} />)}
    </Col>
  </Row>
 </div>);
};

export default ManageTopics;