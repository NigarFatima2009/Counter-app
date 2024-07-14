// src/Counter.js

import React, { useState } from 'react';
import './Counter.css';


const Counter = () => {
    const [count, setCount] = useState(0);
  
    const incrementCount = () => {
      if (count < 99999) {
        setCount(count + 1);
      }
    };
  
    const resetCount = () => {
      setCount(0);
    };
  
    const formatCount = (number) => {
      return number.toString().padStart(5, '0');
    };
  
    const formattedCount = formatCount(count).split('').map((digit, index) => (
      <span 
        key={index} 
        className="digit" 
        style={{ opacity: digit === '0' ? 0.3 : 1 }}
      >
        {digit}
      </span>
    ));
  return (
    <div className="border-counter">
        <div className='counter'>
            <div className="screen">
                {formattedCount}
            </div>
            <button className="big-button" onClick={incrementCount}></button>
            <button className="small-button" onClick={resetCount}></button>
       </div>
    </div>
  );
};

export default Counter;
