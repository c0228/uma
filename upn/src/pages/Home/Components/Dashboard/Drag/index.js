import React, { useState } from 'react';
import './index.css'; // Create this CSS file for styling

const Drag = () => {
  const [items, setItems] = useState([
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
    { id: 'item-4', content: 'Item 4' }
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const fromIndex = e.dataTransfer.getData('text/plain');
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(index, 0, movedItem);
    setItems(updatedItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="draggable"
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Drag;
