import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../css/UserProfileAccess.css';

function UserProfileAccess() {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId.trim()) {
      Swal.fire({
        title: 'Error!',
        text: 'User ID cannot be empty.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
      return;
    }

    console.log('User ID:', userId);
    Swal.fire({
      title: 'Success!',
      text: 'User ID submitted successfully.',
      icon: 'success',
      confirmButtonColor: '#3085d6',
    });
  };

  return (
    <div className="user-form-container">
      <h2>Enter Your User ID</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User ID"
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default UserProfileAccess;
