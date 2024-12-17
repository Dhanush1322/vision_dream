import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import EditPassword from '../components/EditPasswordForm';  // Change this name to EditPasswordForm

function EditPasswordPage() {  // Rename the parent component
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    let token = localStorage.getItem('auth');
    if (!token) {
      navigate('/Login');
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <EditPassword />  {/* Render the EditPasswordForm component here */}
        <Footer />
      </div>
    </div>
  );
}

export default EditPasswordPage;  // Export the renamed component
