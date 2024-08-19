import React, { useEffect, useState } from "react";
import { Form, Modal, ContainerFluid, Row, Col, Button, Icon, Card, Select, UrlAsyncFetch, TextArea, NumRange } from 'e-ui-react';
import SubTopicRow from "./../subtopic-row/index.js";
import './index.css';

const TopicRow = ({ subjectName, selectedNewRows, topicsData }) =>{
 const [topicsList, setTopicsList] = useState();
 const [ showModal, setShowModal ] = useState(false);
 const [modalDetails, setModalDetails] = useState({ header:'' });
 useEffect(()=>{ setTopicsList(topicsData); },[topicsData]);
 const Header = () =>{
  return (<Row className="topic-header">
    <Col md={1}><div align="center"><b>Seq</b></div></Col>
    <Col md={6}><div align="center"><b>Topic Name</b></div></Col>
    <Col md={2}><div align="center"><b>SubTopics</b></div></Col>
    <Col md={2}><div align="center"><b>Actions</b></div></Col>
  </Row>);
 };
 const Body = () =>{
  const swapData = (draggedTopicId, droppedTopicId, topics) => {
    const updatedTopics = topics?.map(topic => {
      if (topic.topic_id === draggedTopicId) {
        return { ...topic, seq: topics.find(t => t.topic_id === droppedTopicId).seq };
      } else if (topic.topic_id === droppedTopicId) {
        return { ...topic, seq: topics.find(t => t.topic_id === draggedTopicId).seq };
      } else {
        return topic;
      }
    });
    return updatedTopics?.sort((a, b) => a.seq - b.seq);
  };
  const handleTopicDrag = (e, draggedTopic)=>{
    e.dataTransfer.setData('DraggedTopic', JSON.stringify(draggedTopic));
  };
  const handleTopicDrop = (e, droppedTopic) =>{
    let draggedTopic = e.dataTransfer.getData('DraggedTopic');
      draggedTopic = JSON.parse(draggedTopic);
    const draggedTopicId = draggedTopic?.topic_id;
    const droppedTopicId = droppedTopic?.topic_id;
    const updatedTopics = swapData(draggedTopicId, droppedTopicId, topicsList);
    setTopicsList( updatedTopics );
  };
  const RowTemplate = ({ topics })=>{
    const topic_id = topics?.topic_id;
    const seq = topics?.seq;
    const topic= topics?.topic;
    const subTopics= topics?.subtopics || 0;
    return (<div
      draggable
      onDragStart={(e) => handleTopicDrag(e, topics)}
      onDrop={(e) => handleTopicDrop(e, topics)}
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
          <TextArea name={"topic-"+topic_id+"-"+seq} placeholder="Enter Topic" lines={2} value={topic} 
            validation={{
              required:{
                  value: true,
                  errorMessage:"This is a Mandatory Field"
              }
            }} />
        </div>
      </Col>
      <Col md={2}><div align="center">{subTopics}</div>
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
      return (<RowTemplate key={index} topics={{ topic_id:'_', seq: topicsList?.length+parseInt(num), topic:'' }} />);
    })}
  </div>);
 };
 const transformFormData = (form) => {
  const { addUpdateTopics } = form;
  const result = Object.keys(addUpdateTopics)
    .filter(key => key.startsWith('topic-'))
    .map(key => {
      const [_, topic_id, seq] = key.split('-');
      return {
        topic_id: topic_id,
        topic: addUpdateTopics[key].value,
        subject: subjectName,
        seq: seq
      };
    })
    .sort((a, b) => a.seq - b.seq);
  return result;
};
 return (<div className="mtop15p">
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
              if(isValidForm){
                const formData = transformFormData( form );
                console.log("Form Result:", formData);
              }
            }}
            onReset={()=>{
              setTopicsList( topicsData );
            }}>
      <Body />
      </Form>
    </ContainerFluid>
    </div>);
};

export default TopicRow;