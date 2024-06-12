// UserDetails.js
import React from 'react';
import './UserDetails.css'; // Import the CSS file for styling

const UserDetails = () => {
  return (
    <div className="details-container">
      <button className="back-button">Back to Users</button>
      <div className="details-card">
        <img src="https://via.placeholder.com/150" alt="John Doe" className="details-image" />
        <p className="details-info"><span className="details-label">Name:</span> <span className="details-value">John Doe</span></p>
        <p className="details-info"><span className="details-label">Email:</span> <span className="details-value">john@example.com</span></p>
        <p className="details-info"><span className="details-label">Phone:</span> <span className="details-value">123-456-7890</span></p>
        <p className="details-info"><span className="details-label">Address:</span> <span className="details-value">123 Main St, Anytown, USA</span></p>
      </div>
    </div>
  );
}

export default UserDetails;
