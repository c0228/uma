import React, { useState, useEffect } from "react";
import { Modal, Button, Icon, Card, Select, UrlAsyncFetch, ContainerFluid, Row, Col  } from "e-ui-react";
import UpdateSubject from './../update-subject/index.js';

const ViewAllSubjects = ({ examList }) =>{
 const [showModel,setShowModal] = useState(false);
 const [subjectList, setSubjectList] = useState();
 const [editModalData, setEditModalData] = useState();
 const initialize = async() =>{
    const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/subjects/list/all', 'GET', { });
    console.log("response ", response);
    setSubjectList(response?.data);
 };
 useEffect(()=>{ initialize(); },[]);
 return (<div>
 <Modal title="Update Existing Subject" show={showModel} 
    onClose={() => {
      setShowModal(false);
      setEditModalData(null);
    }}>
    <UpdateSubject data={editModalData} reset={initialize} />
  </Modal>
<div className="table-responsive">
  <table className="table">
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
     return (<tr key={index}>
        <td>{index+1}</td>
        <td>{data?.subject}</td>
        <td>{data?.exam.replaceAll('|',', ')}</td>
        <td align="center" style={{ width:'10%'}}>
            <span style={{ marginRight:'5px', cursor:'pointer' }} onClick={() =>{
                const updatedExamsList = examList.map(exam => ({ ...exam, checked: data?.exam.includes(exam.value) }));
                setEditModalData({ subject: data?.subject, exams: updatedExamsList });
                setShowModal(true);
              }}>
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