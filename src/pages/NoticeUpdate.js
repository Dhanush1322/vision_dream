import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import '../css/NoticeUpdate.css';

function NoticeUpdate() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();
  

  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the form submission logic here
      console.log('User ID:', userId);
    };
  
    return (
    
          <div className="form-container">
            <h2>Notice Update</h2>
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

export default NoticeUpdate