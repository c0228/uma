import React, { useEffect, useState } from "react";
import { Form, Modal, ContainerFluid, Row, Col, Button, Icon, Card, Select, UrlAsyncFetch, TextArea, NumRange } from 'e-ui-react';
import './index.css';

const TopicRow = ({ subject, selectedNewRows }) =>{
 const [initialTopicsList, setInitialTopicList] = useState(); // Saves InitialTopicsList 
 const [topicsList, setTopicsList] = useState();
 const [ showModal, setShowModal ] = useState(false);
 const [modalDetails, setModalDetails] = useState({ header:'' });
 useEffect(()=>{ console.log("topicsList: ", topicsList); },[topicsList]);
 useEffect(()=>{ initialize(subject); },[subject]);
 const initialize = async(subject) =>{
  const data = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/topics/list', 'POST', { subject: subject });
  setInitialTopicList( data?.topics );
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
    e.dataTransfer.setData('DraggedTopic', JSON.stringify(topic));
  };
  const handleTopicDrop = (e, droppedTopic) =>{
    let draggedTopic = e.dataTransfer.getData('DraggedTopic');
    console.log("draggedTopic: ", draggedTopic);
    console.log("droppedTopic: ", droppedTopic);
  };
  const RowTemplate = ({ topics })=>{
    const seq = topics?.seq;
    const topic= topics?.topic;
    const subTopics= 4;
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
          <TextArea name={"topic-"+seq} placeholder="Enter Topic" lines={2} value={topic} 
            validation={{
              required:{
                  value: true,
                  errorMessage:"This is a Mandatory Field"
              }
            }} />
        </div>
      </Col>
      <Col md={2}><div align="center" style={{ color:'blue', textDecoration:'underline', cursor:'pointer' }} onClick={()=>{ 
          setShowModal(true);
          setModalDetails({ header:'Subtopics of "'+topic+'"' })
          }}>{subTopics}</div>
      </Col>
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
    {topicsList?.map((topics, index)=>{
      return (<RowTemplate key={index} topics={topics} />);
    })}
    {NumRange(1,parseInt(selectedNewRows))?.map((num, index)=>{
      return (<RowTemplate key={index} topics={{ seq: topicsList?.length+parseInt(num), topic:'' }} />);
    })}
  </div>);
 };
 const SubTopicViewer = () =>{
  return (<div>Hello World</div>);
 };
 return (<div className="mtop15p">
    <Modal title={modalDetails?.header} show={showModal} onClose={setShowModal} content={<SubTopicViewer />} width="80%" />
    <ContainerFluid>
      <Header />
      <Form name="addUpdateTopics" btnSubmit={{
              btnType:'primary',
              label:'Add / Update Topics',
              size: 14
            }}
            btnReset={{
              btnType:'danger',
              label:'Reset Topics',
              size: 14
            }}
            onSubmit={(form, isValidForm)=>{
              console.log("Form Result:", form);
            }}
            onReset={()=>{
              setTopicsList( initialTopicsList );
            }}>
      <Body />
      </Form>
    </ContainerFluid>
    </div>);
};

export default TopicRow;