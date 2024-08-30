import React, { useState, useEffect } from "react";
import { Card, Select, UrlAsyncFetch, ContainerFluid, Row, Col  } from "e-ui-react";

const SortByExams = ({ examList }) =>{
 const [examsList, setExamsList] = useState();
 const [selectedExam, setSelectedExam] = useState();
 const [subjectsList, setSubjectlist] = useState([]); 
 const handleExamChange = async(value)=>{
  setSelectedExam( value );
  const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/exams/subject/list', 
    'POST', { exams:[value] });
  setSubjectlist( response?.subjects );
 };
 useEffect(()=>{ 
    setExamsList(examList); 
    setSelectedExam('');
    setSubjectlist([]);
 },[examList]);
 return (<div>
  <Select
    label="Select Examination"
    placeholder="Select Examination"
    width="350"
    value={selectedExam?.value}
    options={examsList}
    className="navbar-layout"
    fontSize="12"
    onChange={(event) =>handleExamChange( event.target.value )} />
  {subjectsList?.length>0 && (<div className="mtop15p">
    <div>
     <Row>
      {subjectsList?.map((data)=>{
        return (<Col sm={4}>
         <div className="mtop15p">
            <Card padding={15}>
              <div align="center" style={{ height:'35px', display:'flex', alignItems:'center', justifyContent:'center' }}>{data?.subject}</div>
            </Card>
         </div>
        </Col>);
      })}
     </Row>
    </div>
  </div>)}
  
 </div>);
};

export default SortByExams;