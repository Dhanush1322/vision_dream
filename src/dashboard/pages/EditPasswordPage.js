import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import { useNavigate } from 'react-router-dom';
import EditPassword from '../components/EditPasswordForm';  // Change this name to EditPasswordForm

function EditPasswordPage() {  // Rename the parent component
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [isAuthenticated, setIsAuthenticated] = useState(false);
   const navigate = useNavigate();
 
   useEffect(() => {
     const authToken = localStorage.getItem("token"); // Retrieve token
     if (!authToken) {
       navigate("/"); // Redirect to login if no token
     } else {
       setIsAuthenticated(true); // Set authenticated state to true
     }
   }, [navigate]); // Runs on component mount
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
