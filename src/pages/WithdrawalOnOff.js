import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/WithdrawalOnOff.css';

function WithdrawalOnOff() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [withdrawalStatus, setWithdrawalStatus] = useState('On'); // Default status
 
  const handleStatusChange = (e) => {
    setWithdrawalStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Withdrawal Status:', withdrawalStatus);
    // Add API call or logic to update withdrawal status here
  };

  return (
   
        <div className="form-container">
          <h2>Withdrawal Status</h2>
          <div className="status-display">
            <p>Current Status: <strong>{withdrawalStatus}</strong></p>
          </div>

          <form onSubmit={handleSubmit} className="status-form">
            <div className="form-group">
              <label htmlFor="status">Select Status</label>
              <select
                id="status"
                value={withdrawalStatus}
                onChange={handleStatusChange}
                className="form-input"
                required
              >
                <option value="On">On</option>
                <option value="Off">Off</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Update Status</button>
          </form>
        </div>
    
  );
}

export default WithdrawalOnOff;