import React from 'react';

export default function Controls({ isPaused, setIsPaused, speed, setSpeed }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '1rem',
        zIndex: 10,
      }}
    >
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? 'Play' : 'Pause'}
      </button>
      <button onClick={() => setSpeed(speed + 0.5)}>Fast Forward</button>
      <button onClick={() => setSpeed(Math.max(0.5, speed - 0.5))}>
        Backward
      </button>
    </div>
  );
}
