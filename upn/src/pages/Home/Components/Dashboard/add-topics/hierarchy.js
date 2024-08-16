import React, { useState, useEffect } from 'react';

const initialData = [
  {
    topic_id: 1,
    topic: 'Math',
    seq: 1,
    subtopics: [
      { stopic_id: 1, subtopic: 'Algebra', seq: 1, duration: 30 },
      { stopic_id: 2, subtopic: 'Geometry', seq: 2, duration: 20 },
    ],
  },
  {
    topic_id: 2,
    topic: 'Science',
    seq: 2,
    subtopics: [
      { stopic_id: 3, subtopic: 'Physics', seq: 1, duration: 25 },
      { stopic_id: 4, subtopic: 'Chemistry', seq: 2, duration: 35 },
    ],
  },
];

const TopicHierarchy = () => {
  const [topics, setTopics] = useState(initialData);
  useEffect(() => {
    console.log('topics: ', topics);
  }, [topics]);
  const handleTopicDrag = (e, topic) => {
    e.dataTransfer.setData('draggedTopic', JSON.stringify(topic));
  };
  const handleTopicDrop = (e, topic) => {
    let draggedTopic = e.dataTransfer.getData('draggedTopic');
    draggedTopic = JSON.parse(draggedTopic);
    console.log('DraggedTopic: ', draggedTopic);
    console.log('DroppedTopic: ', topic);
    console.log('initial Data: ', initialData);
    const from = draggedTopic?.seq;
    const to = topic?.seq;
    const newTopic = dragInterchange([...topics], from, to);
    console.log('newTopic: ', newTopic);
    setTopics(newTopic);
  };
  const handleSubTopicDrag = (e, subTopic, seq) => {
    e.dataTransfer.setData('draggedSubTopic', JSON.stringify(subTopic));
  };
  const handleSubTopicDrop = (e, subTopic, seq) => {
    let draggedTopic = e.dataTransfer.getData('draggedSubTopic');
    draggedTopic = JSON.parse(draggedTopic);
    console.log('DraggedSubTopic: ', draggedTopic);
    console.log('DroppedSubTopic: ', subTopic);
    console.log('initial Data: ', initialData);
    const from = draggedTopic?.seq;
    const to = subTopic?.seq;
    let newTopics = [...topics];
    const topicIndex = seq - 1;
    if (newTopics[topicIndex]?.subtopics) {
      const updatedSubtopics = dragInterchange(
        [...newTopics[topicIndex].subtopics],
        from,
        to
      );
      newTopics[topicIndex].subtopics = updatedSubtopics;
    }

    console.log('Updated Topics: ', newTopics);
    setTopics(newTopics);
  };
  const dragInterchange = (data, fromSeq, toSeq) => {
    // Find the elements to interchange
    const fromIndex = data.findIndex((item) => item.seq === fromSeq);
    const toIndex = data.findIndex((item) => item.seq === toSeq);

    // Swap the seq values
    if (fromIndex !== -1 && toIndex !== -1) {
      [data[fromIndex].seq, data[toIndex].seq] = [
        data[toIndex].seq,
        data[fromIndex].seq,
      ];
    }

    // Sort the array based on seq
    data.sort((a, b) => a.seq - b.seq);

    return data;
  };

  return (
    <div>
      {topics?.map((topic) => {
        return (
          <div>
            <div
              draggable
              onDragStart={(e) => handleTopicDrag(e, topic)}
              onDrop={(e) => handleTopicDrop(e, topic)}
              onDragOver={(e) => e.preventDefault()}
            >
              <span>Drag </span>
              <span style={{ border: '1px solid #000' }}>{topic.topic}</span>
            </div>
            {topic?.subtopics?.map((subTopic) => {
              return (
                <div
                  style={{ marginLeft: '15px' }}
                  draggable
                  onDragStart={(e) => handleSubTopicDrag(e, subTopic)}
                  onDrop={(e) => handleSubTopicDrop(e, subTopic, topic?.seq)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <span>Drag </span>
                  <span style={{ border: '1px solid #000' }}>
                    {subTopic.subtopic}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TopicHierarchy;
