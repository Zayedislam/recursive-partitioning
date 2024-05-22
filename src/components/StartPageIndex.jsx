import React, { useState } from "react";
import PartitionIndex from "./PartitionIndex";
import "./Partition.css";

const StartPageIndex = () => {
  const [start, setStart] = useState(false);
  const [totalSection, setTotalSection] = useState([]);
  const handleStart =()=>{
    setStart(true)
  }
  return (
    <div className='start-page' >  
      <button  className="start-buttons" onClick={() => handleStart()}>Start Challenge</button>
      {start && <PartitionIndex />}
    </div>
  );
};

export default StartPageIndex;
