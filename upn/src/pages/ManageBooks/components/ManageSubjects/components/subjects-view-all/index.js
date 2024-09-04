import React, { useState, useEffect } from "react";
import { Modal, Button, Icon, Card, Select, UrlAsyncFetch, ContainerFluid, Row, Col  } from "e-ui-react";
import UpdateSubject from './../subject-update/index.js';

const ViewAllSubjects = ({ examList }) =>{
 const [showUpdateModal, setShowUpdateModal] = useState(false);
 const [showDeleteModal, setShowDeleteModal] = useState(false);
 const [subjectList, setSubjectList] = useState();
 const [editModalData, setEditModalData] = useState();
 const initialize = async() =>{
    const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/subjects/list/all', 'GET', { });
    console.log("response ", response);
    setSubjectList(response?.data);
 };
 useEffect(()=>{ initialize(); },[]);
 const handleUpdateModalClose = () =>{
  setShowUpdateModal(false);
  setEditModalData(null);
 };
 const handleDeleteModalClose = () =>{
  setShowDeleteModal(false);
  setEditModalData(null);
 };
 const handleDeleteSubject = async() =>{
   const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/subject/delete', 'POST', { 
    subject: editModalData?.subject });
   console.log("response ", response);
   initialize();
   setShowDeleteModal(false);
 };
 return (<div>
  <Modal title="Update Existing Subject" show={showUpdateModal} onClose={handleUpdateModalClose}>
    <UpdateSubject data={editModalData} reset={initialize} />
  </Modal>
  <Modal title="Delete Confirmation" show={showDeleteModal} onClose={handleDeleteModalClose}>
    <div align="center">
      <div style={{ fontSize:'14px' }}>Are you sure to delete a Subject "{editModalData?.subject}"?</div>
      <div style={{ marginTop:'5px' }}>
        <span onClick={handleDeleteSubject}><Button type="danger" size={12}>Yes</Button></span>
        <span onClick={handleDeleteModalClose}><Button type="success" size={12}>No</Button></span>
      </div>
    </div>
  </Modal>
<div className="table-responsive">
  <table className="table">
  <thead>
      <tr style={{ backgroundColor:'#eee' }}>
        <td><b>#</b></td>
        <td><b>Subject</b></td>
        <td><b>Examination</b></td>
        <td align="center" style={{ width:'10%'}}><b>Actions</b></td>
      </tr>
    </thead>
    <tbody>
    {subjectList?.map((data, index)=>{
     return (<tr key={index}>
        <td>{index+1}</td>
        <td>{data?.subject}</td>
        <td>{data?.exam.replaceAll('|',', ')}</td>
        <td align="center" style={{ width:'10%'}}>
            <span style={{ marginRight:'5px', cursor:'pointer' }} onClick={() =>{
                const updatedExamsList = examList.map(exam => ({ ...exam, checked: data?.exam.includes(exam.value) }));
                setEditModalData({ subject: data?.subject, exams: updatedExamsList });
                setShowUpdateModal(true);
              }}>
                <Icon type="FontAwesome" name="fa-edit" size={18} />
            </span>
            <span style={{ marginLeft:'5px', cursor:'pointer' }} onClick={()=>{
              setEditModalData({ subject: data?.subject });
              setShowDeleteModal(true);
            }}>
                <Icon type="FontAwesome" name="fa-trash" size={18} />
            </span>
        </td>
    </tr>);
    })}
    </tbody>
  </table>
</div>
 </div>);
};

export default ViewAllSubjects;