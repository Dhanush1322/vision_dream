// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import "../pages/DashboardPage.css"; // or create a new layout CSS if needed

// const DashboardLayout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="dashboard">
//       <Sidebar isOpen={isSidebarOpen} />
//       <div className="dashboard-content">
//         <Navbar toggleSidebar={toggleSidebar} />
//         <div className="dashboard-main-content" style={{ marginTop: "90px" }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
import React, { useState } from "react";
import { Outlet } from "react-router-dom";  // ✅ Import Outlet
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../pages/DashboardPage.css";
import './DashboardLayout.css'; // Import your layout CSS if needed
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <div
          className="dashboard-main-content"
          
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
