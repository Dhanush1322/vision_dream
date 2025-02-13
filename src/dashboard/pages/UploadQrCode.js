import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../css/UploadQrCode.css';

function UploadQrCode() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [qrImage, setQrImage] = useState(null);
  const [upiId, setUpiId] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setQrImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('QR Code Image:', qrImage);
    console.log('UPI ID:', upiId);
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="form-container">
          <h2>Upload QR Code</h2>
          <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
              <label htmlFor="qrCode">Upload QR Code</label>
              <input
                type="file"
                id="qrCode"
                accept="image/*"
                onChange={handleImageUpload}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="upiId">Enter UPI ID</label>
              <input
                type="text"
                id="upiId"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter UPI ID"
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadQrCode;
