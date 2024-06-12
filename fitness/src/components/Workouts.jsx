import React from 'react';
import './style.css'; // Import the CSS file for styling

const Workouts = () => {
  return (
    <div className="container">
      <h2 className="title">Workouts</h2>
      <div className="workout-card">
        <p className="workout-info"><span className="label">ID:</span> <span className="value">1</span></p>
        <p className="workout-info"><span className="label">Title:</span> <span className="value">Morning Jog</span></p>
        <p className="workout-info"><span className="label">Description:</span> <span className="value">A brisk jog to kickstart your day.</span></p>
      </div>
    </div>
  );
}

export default Workouts;
