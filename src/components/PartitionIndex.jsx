import React, { useState } from "react";
import "./Partition.css";

const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const PartitionIndex = () => {
  const [children, setChildren] = useState([]);
  console.log("🚀 ~ PartitionIndex ~ children:", children);
  const [color, setColor] = useState(randomColor());

  
  const splitPartition = (direction) => {
    setChildren([...children, { id: Date.now(), direction }]);
  };

  const removePartition = () => {
   
  };

  return (
    <div className='partition' style={{ backgroundColor: color }}>
      <div className='partition-buttons'>
        <button onClick={() => splitPartition("vertical")}>V</button>
        <button onClick={() => splitPartition("horizontal")}>H</button>
        {children !=0 && (
          <button style={{ backgroundColor: "red" }} onClick={removePartition}>
            -
          </button>
        )}
      </div>
      <div className={`partition-content ${children.length > 0 ? "split" : ""}`}>
        {children.map((child) => (
          <PartitionSection key={child.id} direction={child.direction} />
        ))}
      </div>
    </div>
  );
};

const PartitionSection = ({ direction }) => {
  return (
    <div className={`partition-wrapper ${direction}`}>
      <PartitionIndex />
      <PartitionIndex />
    </div>
  );
};

export default PartitionIndex;
