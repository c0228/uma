import React, { useState, useEffect } from "react";
import { Card, Select, UrlAsyncFetch, ContainerFluid, Row, Col  } from "e-ui-react";

const ViewAllSubjects = () =>{
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
<div class="table-responsive">
  <table class="table">
  <thead>
      <tr style={{ backgroundColor:'#eee' }}>
        <th>#</th>
        <th>Subject</th>
        <th>Examination</th>
      </tr>
    </thead>
    <tbody>
    {subjectList?.map((data, index)=>{
     return (<tr><td>{index+1}</td><td>{data?.subject}</td><td>{data?.exam.replace('|',', ')}</td></tr>);
    })}
    </tbody>
  </table>
</div>
 </div>);
};

export default ViewAllSubjects;