import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import '../components/Appointment.css';

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Fetch appointments from the API
    const fetchAppointments = async () => {
      try {
        const response = await fetch('https://goldfish-app-sqg4v.ondigitalocean.app/api/appointments');
        const data = await response.json();
        setAppointments(data.data); // Store the appointment data in the state
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Appointment Table Section */}
        <div className="appointment-table">
          <h2>Appointment Details</h2>
          <table>
            <thead>
              <tr>
                <th>Sl</th> {/* Serial Number Column */}
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Appointment Date</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment._id}>
                  <td>{index + 1}</td> {/* Display serial number starting from 1 */}
                  <td>{appointment.fullName}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
