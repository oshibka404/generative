import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import Progression from './Progression/Progression';

function App() {
  const clockIntervalID = useRef<number>(0);
  
  const [tick, setTick] = useState(-1);
  const currentTick = useRef<number>(tick);

  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(100);

  useEffect(() => {
    window.clearInterval(clockIntervalID.current);
  }, [tempo]);

  useEffect(() => {
    if (isPlaying) {
      const sixteenthTime = 60000 / tempo / 4;
      if (clockIntervalID.current === 0) {
        clockIntervalID.current = window.setInterval(() => {
          currentTick.current = (currentTick.current + 1) % 16;
          setTick((currentTick.current));
        }, sixteenthTime);
      }
    } else {
      window.clearInterval(clockIntervalID.current);
      clockIntervalID.current = 0;
      currentTick.current = -1;
      setTick(-1);
    }
  }, [isPlaying, tempo, tick]);

  return (
    <div className="App">
      <div className="App_controls">
        <input value={tempo} onChange={(e) => setTempo(parseInt(e.target.value))} />
        <button onClick={() => {
          setIsPlaying(!isPlaying);
        }}>{isPlaying ? 'pause' : 'play'}</button>
      </div>

      <Progression tick={currentTick.current} />
    </div>
  );
}

export default App;
