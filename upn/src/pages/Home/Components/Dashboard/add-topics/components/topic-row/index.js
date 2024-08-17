import React, { useEffect, useState } from "react";
import { ContainerFluid, Row, Col, Button, Icon, Card, Select, UrlAsyncFetch, TextArea, NumRange } from 'e-ui-react';
import './index.css';

const TopicRow = ({ subject, selectedNewRows }) =>{
 const [topicsList, setTopicsList] = useState();
 
 useEffect(()=>{ console.log("topicsList: ", topicsList); },[topicsList]);
 useEffect(()=>{ initialize(subject); },[subject]);
 const initialize = async(subject) =>{
  const data = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/topics/list', 'POST', { subject: subject });
  setTopicsList( data?.topics );
 };
 const Header = () =>{
  return (<Row className="topic-header">
    <Col md={1}><div align="center"><b>Seq</b></div></Col>
    <Col md={6}><div align="center"><b>Topic Name</b></div></Col>
    <Col md={2}><div align="center"><b>SubTopics</b></div></Col>
    <Col md={2}><div align="center"><b>Actions</b></div></Col>
  </Row>);
 };
 const Body = () =>{
  const handleTopicDrag = (e, topic)=>{

  };
  const handleTopicDrop = (e, topic) =>{

  };
  const RowTemplate = ({ seq, topic, subTopics })=>{
    return (<div
      draggable
      onDragStart={(e) => handleTopicDrag(e, topic)}
      onDrop={(e) => handleTopicDrop(e, topic)}
      onDragOver={(e) => e.preventDefault()}>
    <Row className="topic-row">
      <Col md={1}>
        <div align="center">
          <Icon type="FontAwesome" name="fa-bars" size={18} 
            style={{ paddingRight:'5px', color:'#ccc', paddingTop:'8px', paddingRight:'8px' }} />
          {seq}
        </div>
      </Col>
      <Col md={6}>
        <div align="center">
          <TextArea name="surname" placeholder="Enter Topic" lines={2} value={topic} />
        </div>
      </Col>
      <Col md={2}><div align="center">{subTopics}</div></Col>
      <Col md={2}>
        <div className="topic-action">
          <div className="topic-action-edit">
            <Button type="success" label={<Icon type="FontAwesome" name="fa-edit" size={16} />} size={11} />
          </div>
          <div className="topic-action-delete">
            <Button type="danger" label={<Icon type="FontAwesome" name="fa-trash-o" size={16} />} size={11} />
          </div>
        </div>
      </Col>
    </Row>
    </div>);
  };
  return (<div>
    {topicsList?.map((topics)=>{
      return (<RowTemplate seq={topics?.seq} topic={topics?.topic} subTopics={4} />);
    })}
    {NumRange(1,parseInt(selectedNewRows))?.map((num)=>{
      return (<RowTemplate seq={topicsList?.length+parseInt(num)} topic="" subTopics={0} />);
    })}
  </div>);
 };
 return (<div className="mtop15p">
    <ContainerFluid>
      <Header />
      <Body />
    </ContainerFluid>
    </div>);
};

export default TopicRow;