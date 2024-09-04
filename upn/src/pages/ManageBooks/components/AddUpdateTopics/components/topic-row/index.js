import React, { useEffect, useState } from "react";
import { Switch, Form, Modal, getForm, ContainerFluid, Row, Col, Button, Icon, ModalAlert, Card, Select, UrlAsyncFetch, TextArea, NumRange } from 'e-ui-react';
import './index.css';

const TopicRow = ({ subjectName, selectedNewRows, topicsData }) =>{
 const [topicsList, setTopicsList] = useState([]);
 const [ showModal, setShowModal ] = useState(false);
 const [modalDetails, setModalDetails] = useState({ header:'' });
 const [showAlert, setShowAlert] = useState({ status:false, type:'', message:'' });

 useEffect(()=>{ setTopicsList(topicsData); },[topicsData]);
 useEffect(()=>{
  const newTopicsList = [...topicsList];
  NumRange(1,parseInt(selectedNewRows))?.map((num)=>{
    const sNo = (topicsList?.length+num).toString();
    newTopicsList.push({ topic_id: '_'+sNo, topic: '', subject: subjectName, seq: sNo, subtopics: '0' });
  });
  setTopicsList( newTopicsList );
 },[selectedNewRows]);
 useEffect(()=>{ console.log("topicsList [updated]: ", topicsList)},[topicsList]);
 const Header = () =>{
  return (<Row className="topic-header">
    <Col md={1}><div align="center"><b>Seq</b></div></Col>
    <Col md={7}><div align="center"><b>Topic Name</b></div></Col>
    <Col md={2}><div align="center"><b>SubTopics</b></div></Col>
    <Col md={2}><div align="center"><b>Actions</b></div></Col>
  </Row>);
 };
 const Body = () =>{
 /* const swapData = (draggedTopic, droppedTopic, topics) => {
    const updatedTopics = topics?.map(topic => {
      let newTopic = {...topic };
      if (topic.topic_id === draggedTopic?.topic_id) {
          newTopic.seq = droppedTopic.seq;
      } else if(topic.topic_id === droppedTopic?.topic_id) {
          newTopic.seq = draggedTopic.seq;
      }
     return newTopic;
    });
    return updatedTopics?.sort((a, b) => a.seq - b.seq);
  };
  const handleTopicDrag = (e, draggedTopic)=>{
    e.dataTransfer.setData('DraggedTopic', JSON.stringify(draggedTopic));
  };
  const handleTopicDrop = (e, droppedTopic) =>{
    let draggedTopic = e.dataTransfer.getData('DraggedTopic');
      draggedTopic = JSON.parse(draggedTopic);
    const updatedTopics = swapData(draggedTopic, droppedTopic, topicsList);
    console.log("final Code: ", updatedTopics);
    setTopicsList( updatedTopics );
  }; */
  const RowTemplate = ({ topics })=>{
    const formContext = getForm();
const form = formContext?.form;

/* useEffect(()=>{
  console.log("formContext[TR]: ", formContext);
  const topic_id = topics?.topic_id;
  const newTopicValue = formContext?.form?.["addUpdateTopics"]?.["topic-"+topic_id]?.value;
  console.log("newTopicValue: ", newTopicValue, "topic_id: ", "topic-"+topic_id);
  // Only update if the value has actually changed
  if (newTopicValue !== undefined) {
    setTopicsList(prevTopicsList => {
      const updatedTList = prevTopicsList.map((tL) => {
        if (tL?.topic_id === topic_id && tL.topic !== newTopicValue) {
          return { ...tL, topic: newTopicValue };
        }
        return tL;
      });
      return updatedTList;
    });
  }
},[formContext?.form?.["addUpdateTopics"]?.["topic-"+topics?.topic_id]?.value]); */

    
const topic_id = topics?.topic_id;
const seq = topics?.seq;
const topic= topics?.topic;
const subTopics= topics?.subtopics || 0;
    
return (<div>
   {/*   draggable
   //   onDragStart={(e) => handleTopicDrag(e, topics)}
   //   onDrop={(e) => handleTopicDrop(e, topics)}
   //   onDragOver={(e) => e.preventDefault()}> */}

    <Row className="topic-row">
      <Col md={1}>
        <div align="center">
          {/*<Icon type="FontAwesome" name="fa-bars" size={18} 
            style={{ paddingRight:'5px', color:'#ccc', paddingTop:'8px', paddingRight:'8px' }} />*/}
          {seq}
        </div>
      </Col>
      <Col md={7}>
        <div align="center">
          <TextArea name={"topic-"+topic_id} placeholder="Enter Topic" lines={2} value={topic} 
            validation={{
              required:{
                  value: true,
                  errorMessage:"This is a Mandatory Field"
              }
            }} 
            /* onChange={(result)=>{
              console.log("ONCHANGE [TextArea] : ", result?.value);
              if(result?.value?.length>0){
                let tList = [...topicsList]; 
                let updatedTList = tList?.map((tL)=>{
                  console.log(tL?.topic_id," ---", topic_id);
                  if(tL?.topic_id === topic_id){ tL.topic = result?.value; }
                  return tL;
                });
                console.log("updatedTList: ", updatedTList);
                setTopicsList( updatedTList );
              }
            }} */
            />
        </div>
      </Col>
      <Col md={2}><div align="center">{subTopics}</div>
      </Col>
      <Col md={2}>
        <div align="center">
        <Button type="danger" size={11}><Icon type="FontAwesome" name="fa-trash-o" size={16} /></Button>
        </div>
      </Col>
    </Row>
    </div>);
  };
  return (<div>
    {topicsList?.map((topics, index)=>{
      return (<RowTemplate key={index} topics={topics} />);
    })}
  </div>);
 };

 return (<div className="mtop15p">
    <ModalAlert title={showAlert?.message} type={showAlert?.type} show={showAlert?.status} 
      onClose={(show)=>{ setShowAlert({ type:'', message:'', status: show }); }} />
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
                let tList = [...topicsList];
                let updatedTList = tList?.map((tL)=>{
                  const topicId = tL?.topic_id;
                  const topicVal = form?.["addUpdateTopics"]?.["topic-"+topicId]?.value;
                  return {...tL, topic: topicVal };
                });
                setTopicsList( updatedTList );
                setShowAlert({ message:'Topic Details updated successfully', status:true, type:'success' });
              }
            }}
            onReset={(triggerReset)=>{
              triggerReset();
              setTopicsList( topicsData );
            }}>
      <Body />
      </Form>
    </ContainerFluid>
    </div>);
};

export default TopicRow;