import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../css/ComposeMessageSingle.css';

function ComposeMessageSingle() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('User ID:', userId);
      console.log('Message:', message);
    };
  
    return (
      <div className="dashboard">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="dashboard-content">
          <Navbar toggleSidebar={toggleSidebar} />
  
          <div className="form-container">
            <h2>Send Notice</h2>
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
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here"
                  required
                  className="form-input textarea"
                />
              </div>
              <button type="submit" className="submit-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ComposeMessageSingle