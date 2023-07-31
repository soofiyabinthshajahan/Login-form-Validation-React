import React, { useState, useEffect } from 'react';
import '../DateandTime/CurrentDate.css'

function CurrentDate() {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); // Update every second (1000 milliseconds)
  
      // Clear the interval when the component is unmounted
      return () => clearInterval(interval);
    }, []);
  
    // Format the time string
    const formattedTime = currentTime.toLocaleTimeString();
  
    return (
      <div className="time-div">
     
        <p>{formattedTime}</p>
      </div>
    );
  }
  
  export default CurrentDate;