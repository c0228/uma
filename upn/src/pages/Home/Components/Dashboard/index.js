import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import AddSubjectForm from "./add-subjects/index.js";
import AddTopicForm from "./add-topics/index.js";
import Drag from "./Drag/index.js";

const ManageSubjects = () =>{
 
 return (<div className="mtop15p">
 <ContainerFluid>
  <Row>
    <Col md={3}>
      <AddSubjectForm />
    </Col>
    <Col md={9}>
      <AddTopicForm />
    </Col>
  </Row>
  <Row>
    <Col md={12}><Drag /></Col>
  </Row>
 </ContainerFluid>
 </div>);
};

export default ManageSubjects;