import React, { useEffect, useState } from 'react';
import { Icon, Button, CompareJSONArrays } from 'e-ui-react';

const ViewTopics = ({ mode, subjectName, selectedNewRows, topicsData }) =>{
 const [topicsList, setTopicsList] = useState([]);
 useEffect(()=>{ setTopicsList(topicsData); },[topicsData]);
 const handleDragStart = (event, topic) =>{
  event?.dataTransfer.setData("drag-topic", JSON.stringify(topic));
 };
 const handleDragOver = (event) =>{
  event?.preventDefault();
 };
 const handleDrop = (event, droppedTopic) => {
  event?.preventDefault();
  let draggedTopic = event?.dataTransfer.getData("drag-topic");
      draggedTopic= JSON.parse(draggedTopic);
  const updatedTopics = swapData(draggedTopic, droppedTopic, topicsList);
  /* Update in Database */
  setTopicsList( updatedTopics );
 };
 const swapData = (draggedTopic, droppedTopic, topics) => {
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
 const handleSave = () =>{
  const diff = CompareJSONArrays(topicsList, topicsData);
  if(diff){
    console.log("handleSave [diff]: ", diff);
    console.log("topicsList: ", topicsList);
    
    /*
    [
    {
        "topic_id": "1",
        "topic": "Topic1",
        "subject": "Anthropology",
        "seq": "1",
        "subtopics": "2"
    },
    {
        "topic_id": "2",
        "topic": "Topic2",
        "subject": "Anthropology",
        "seq": "2",
        "subtopics": "2"
    }
]
    */
  }
 };
 return (<div className="mtop15p">
  <div className="table-responsive-sm">
  <table className="table">
  <thead>
      <tr>
        <td align="center" style={{ width:'6%' }}><b>#</b></td>
        <td align="center"><b>Topic</b></td>
        <td align="center"><b>Description</b></td>
        <td align="center" style={{ width:'10%' }}><b>SubTopics</b></td>
        <td align="center" style={{ width:'10%' }}><b>Actions</b></td>
      </tr>
    </thead>
    <tbody>
        {topicsList?.map((data,index)=>{
         return (<tr key={index} style={{ paddingTop:'8px', paddingBottom:'8px' }}>
            <td align="center" style={{ width:'6%' }}>
                {mode==='Sorting'?(<div draggable="true"
                    onDragStart={(event)=>handleDragStart(event, data)}
                    onDragOver={handleDragOver}
                    onDrop={(event)=>handleDrop(event, data)}>
                    <span style={{ cursor:'pointer' }}><Icon type="FontAwesome" name="fa-bars" size={18} color="#555" /></span>
                    <span style={{ marginLeft:'8px' }}>{index+1}</span>
                </div>):(<div>{index+1}</div>)}
                
            </td>
            <td align="center">{data?.topic}</td>
            <td align="center"></td>
            <td align="center" style={{ width:'10%' }}>{data?.subtopics}</td>
            <td align="center" style={{ width:'10%' }}></td>
         </tr>);
        })}
    </tbody>
  </table>
</div>
<div>
    {mode!=='View' && (<div style={{ justifyContent:'center', display:'flex', flexDirection:'row' }}>
        <span onClick={handleSave}><Button type="success" size={11}>Save</Button></span>
          <Button type="danger" size={11}>Reset</Button>
        </div>)}
</div>
 </div>);
};

export default ViewTopics;