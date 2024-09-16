import React, { useState } from 'react';
import './App.css';

function App() {
  // Set initial counters and background color state
  const [counters, setCounters] = useState({
    red: 0,
    yellow: 0,
    green: 0,
    blue: 0,
  });
  const [bgColor, setBgColor] = useState('gray');

  // Handle button click
  const handleClick = (color) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [color]: prevCounters[color] + 1,
    }));
    setBgColor(color); // Change the background color
  };

  const handleClearClick = () => {
    setCounters({
      red: 0,
      yellow: 0,
      green: 0,
      blue: 0,
    });
    setBgColor('gray'); // Reset background to gray
  };

  return (
    <body className='App' style={{ backgroundColor: bgColor }}>
      <h1 className='colorcounter'>COLOR COUNTER</h1>

      <div className='buttons'>
        <div className='color-section'>
          <button className='redbutton' onClick={() => handleClick('red')}>
            Red
          </button>
          <p className='redcounter'>{counters.red}</p>
        </div>
        <div className='color-section'>
          <button className='yellowbutton' onClick={() => handleClick('yellow')}>
            Yellow
          </button>
          <p className='yellowcounter'>{counters.yellow}</p>
        </div>
        <div className='color-section'>
          <button className='greenbutton' onClick={() => handleClick('green')}>
            Green
          </button>
          <p className='greencounter'>{counters.green}</p>
        </div>
        <div className='color-section'>
          <button className='bluebutton' onClick={() => handleClick('blue')}>
            Blue
          </button>
          <p className='bluecounter'>{counters.blue}</p>
        </div>
      </div>

      <div className='clear-section'>
        <button className='clearbutton' onClick={handleClearClick}>Clear Board</button>
      </div>
    </body>
  );
}

export default App;
