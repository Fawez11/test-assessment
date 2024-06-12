import React from 'react';
import './Users.css'; // Import the CSS file for styling


const Users = ({data}) => {
  console.log(data);
    return (
      <div className="container">
        <h2 className="title">Users</h2>
        <div className="user-cards">
          <div className="user-card">
            <img src="https://via.placeholder.com/150" alt="User 1" className="user-image" />
            <p className="user-info"><span className="label">Name:</span> <span className="value">John Doe</span></p>
            <p className="user-info"><span className="label">Email:</span> <span className="value">john@example.com</span></p>
          </div>
          <div className="user-card">
            <img src="https://via.placeholder.com/150" alt="User 2" className="user-image" />
            <p className="user-info"><span className="label">Name:</span> <span className="value">Jane Smith</span></p>
            <p className="user-info"><span className="label">Email:</span> <span className="value">jane@example.com</span></p>
          </div>
          <div className="user-card">
            <img src="https://via.placeholder.com/150" alt="User 3" className="user-image" />
            <p className="user-info"><span className="label">Name:</span> <span className="value">Alice Johnson</span></p>
            <p className="user-info"><span className="label">Email:</span> <span className="value">alice@example.com</span></p>
          </div>
          <div className="user-card">
            <img src="https://via.placeholder.com/150" alt="User 4" className="user-image" />
            <p className="user-info"><span className="label">Name:</span> <span className="value">Bob Brown</span></p>
            <p className="user-info"><span className="label">Email:</span> <span className="value">bob@example.com</span></p>
          </div>
          <div className="user-card">
            <img src="https://via.placeholder.com/150" alt="User 4" className="user-image" />
            <p className="user-info"><span className="label">Name:</span> <span className="value">Bob Brown</span></p>
            <p className="user-info"><span className="label">Email:</span> <span className="value">bob@example.com</span></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Users

