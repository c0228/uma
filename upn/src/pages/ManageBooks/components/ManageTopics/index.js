import React, { useEffect, useState } from "react";
import { Row, Col } from "e-ui-react";

const ManageTopics = () =>{
 const Header = ({ title }) =>{
  return (<div><h4 style={{ paddingBottom:15, borderBottom:'1px solid #ccc' }}><b>{title}</b></h4></div>);
 };

 return (<div>
  <Row>
    <Col md={12}>
      <Header title="List of Topics" />
    </Col>
  </Row>
 </div>);
};

export default ManageTopics;