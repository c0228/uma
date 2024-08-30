import React, { useState, useEffect } from "react";
import { Modal, Button, Icon, Card, Select, UrlAsyncFetch, ContainerFluid, Row, Col  } from "e-ui-react";
import AddSubject from './../add-subject/index.js';

const ViewAllSubjects = ({ examList }) =>{
 const [showModel,setShowModal] = useState(false);
 const [subjectList, setSubjectList] = useState();
 const initialize = async() =>{
    const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/subjects/list/all', 'GET', { });
    console.log("response ", response);
    setSubjectList(response?.data);
 };
 useEffect(()=>{
   initialize(); 
 },[]);
 // http://localhost/projects/uma/upn/nexus/subjects/list/all
 return (<div>
<Modal title="Update Existing Subject" show={showModel} 
    onClose={setShowModal} 
    content={<AddSubject examList={examList} />} />
<div class="table-responsive">
  <table class="table">
  <thead>
      <tr style={{ backgroundColor:'#eee' }}>
        <th>#</th>
        <th>Subject</th>
        <th>Examination</th>
        <th align="center" style={{ width:'10%'}}>Actions</th>
      </tr>
    </thead>
    <tbody>
    {subjectList?.map((data, index)=>{
     return (<tr>
        <td>{index+1}</td>
        <td>{data?.subject}</td>
        <td>{data?.exam.replaceAll('|',', ')}</td>
        <td align="center" style={{ width:'10%'}}>
            <span style={{ marginRight:'5px', cursor:'pointer' }} onClick={()=>setShowModal(true)}>
                <Icon type="FontAwesome" name="fa-edit" size={18} />
            </span>
            <Icon type="FontAwesome" name="fa-trash" size={18} />
        </td>
    </tr>);
    })}
    </tbody>
  </table>
</div>
 </div>);
};

export default ViewAllSubjects;