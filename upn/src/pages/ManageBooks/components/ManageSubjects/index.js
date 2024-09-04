import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Select, Card, Form, TextBox, Switch, UrlAsyncFetch, ModalAlert } from "e-ui-react";
import AddSubject from "./components/subject-add/index.js";
import ViewAllSubjects from './components/subjects-view-all/index.js';
import SortByExams from './components/subjects-sortby-exam/index.js';

const ManageSubjects = () =>{
 const [ showModel, setShowModal ] = useState(false);
 const [selectedListView, setSelectedListView] = useState('View All');
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
 const Header = ({ title, rightItem }) =>{
  return (<div><h4 style={{ paddingBottom:15, borderBottom:'1px solid #ccc' }}><b>{title}</b>
  <span className="pull-right">{rightItem}</span>
  </h4></div>);
 };
 const SubjectListSort = () =>{
  const options = [{ id: 'View All', label: 'View All', value: 'View All' },
                  { id: 'Sort By Exam', label: 'Sort By Exam', value: 'Sort By Exam' }];
  return (<Select
    value={selectedListView}
    options={options}
    className="navbar-layout"
    width="120"
    fontSize="12"
    onChange={(event) =>setSelectedListView( event.target.value )} />);
 };
 return (
    <div>
    <Row>
      {/*<Col md={6}>
        <Header title="Add New Subject" />
        
      </Col> */}
      <Col md={12}>
        <Modal title="Add New Subject" 
          show={showModel} 
          onClose={setShowModal}>
          <AddSubject examList={examList} reset={initialize} />
        </Modal>
        <Header title="List of Subjects" rightItem={<div style={{ display:'flex', flexDirection:'row' }}>
          <Button type="primary" size={11} style={{ marginRight:'15px' }} onClick={()=>setShowModal(true)}>
          <b>Add New Subject</b>
          </Button>
          <SubjectListSort />
        </div>} />
        {selectedListView==='View All' && (<ViewAllSubjects examList={examList} />)}
        {selectedListView==='Sort By Exam' && (<SortByExams examList={examList} />)}
      </Col>
    </Row>
    </div>);
};
export default ManageSubjects;