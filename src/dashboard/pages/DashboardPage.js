import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardMain from "../components/DashboardMain";
import "./DashboardPage.css";

const DashboardPage = () => {
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

  return isAuthenticated ? (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <DashboardMain />
      </div>
    </div>
  ) : null; // Show nothing until authentication check is complete
};

export default DashboardPage;
