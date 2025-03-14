import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import { useNavigate } from 'react-router-dom';
import EditPassword from '../components/EditPasswordForm';  // Change this name to EditPasswordForm

function EditPasswordPage() {  // Rename the parent component
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

 
  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <EditPassword />  {/* Render the EditPasswordForm component here */}
      
      </div>
    </div>
  );
}

export default EditPasswordPage;  // Export the renamed component
