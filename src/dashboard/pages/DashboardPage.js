import React, { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardMain from '../components/DashboardMain';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate=useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(()=>{
    let token=localStorage.getItem('auth');
    if(!token){
     navigate('/Login')
    }
  },[])

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <DashboardMain />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
