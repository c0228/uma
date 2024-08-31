import React, { useState, useEffect } from 'react';
import { ContainerFluid, Row, Col, UrlParams, Colors, Pill } from 'e-ui-react';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import ManageSubjects from './components/ManageSubjects/index.js';
// import AddUpdateTopics from './components/AddUpdateTopics/index.js';
import ManageTopics from './components/ManageTopics/index.js';

const AddUpdateSubTopics = () =>{
 return (<div>AddUpdateSubTopics</div>);
};

const Hierarchy = () =>{
 return (<div>Hierarchy</div>);
};

const ManageBooks = () =>{
 const url = UrlParams().baseUrl;
 return (<div>
  <Header menulinks={HeaderMenu} activeId="AdminDashboard" />
  <div className="mtop15p">
<ContainerFluid>
 <Row>
    <Col mds={12}>
 <div>
 <Pill mode="vertical" 
 layout={{
    menu:{ xs:'2', sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
    content:{  xs:'10', sm:'10', md:'10', lg:'10', xl:'10', xxl:'10' }
 }}
 menulinks={[
     { id:'add-subjects', url:'#', label:'Manage Subjects', content:(<ManageSubjects />) },
     { id:'add-update-topics', url:'#', label:'Manage Topics', content:(<ManageTopics />) },
     { id:'add-update-subtopics', url:'#', label:'Manage SubTopics', content:(<AddUpdateSubTopics />) },
     { id:'hierarchy', url:'#', label:'View Hierarchy', content:(<Hierarchy />) }]} 
 activeId="add-subjects" 
 colorConfig={{
    active: { color: Colors.light, backgroundColor: Colors.danger },
    default: { color: Colors.secondary, backgroundColor: '' }
 }} />
 </div>
    </Col>
 </Row>
 </ContainerFluid>
 </div>
 </div>);
};

export default ManageBooks;