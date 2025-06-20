// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import DashboardMain from "../components/DashboardMain";
// import "./DashboardPage.css";

// const DashboardPage = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading
//   const navigate = useNavigate();


//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

  

//   return (
//     <div className="dashboard">
//       <Sidebar isOpen={isSidebarOpen} />
//       <div className="dashboard-content">
//         <Navbar toggleSidebar={toggleSidebar} />
//         <DashboardMain />
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

import React from 'react'
import DashboardMain from '../components/DashboardMain'
function DashboardPage() {
  return (
    <div>
      
      <DashboardMain />
      </div>
  )
}

export default DashboardPage

