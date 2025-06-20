import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
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

  // Export Table to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(appointments); // Convert JSON data to Excel sheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
    XLSX.writeFile(wb, 'appointments.xlsx');
  };

  // Export Table to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Sl', 'Full Name', 'Email', 'Phone', 'Appointment Date', 'Message']],
      body: appointments.map((appointment, index) => [
        index + 1,
        appointment.fullName,
        appointment.email,
        appointment.phone,
        appointment.appointmentDate,
        appointment.message,
      ]),
    });
    doc.save('appointments.pdf');
  };

  // Export Table to Word (Docx)
  const exportToWord = () => {
    const tableHtml = `
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Appointment Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          ${appointments.map(
            (appointment, index) => `
              <tr>
                <td>${index + 1}</td>
                <td>${appointment.fullName}</td>
                <td>${appointment.email}</td>
                <td>${appointment.phone}</td>
                <td>${appointment.appointmentDate}</td>
                <td>${appointment.message}</td>
              </tr>`
          ).join('')}
        </tbody>
      </table>
    `;

    const blob = new Blob([tableHtml], { type: 'application/msword' });
    saveAs(blob, 'appointments.doc');
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Appointment Table Section */}
        <div className="appointment-table">
          <h2>Appointment Details</h2>

          {/* Export Buttons */}
          <div className="export-buttons">
            <button onClick={exportToExcel}>Download Excel</button>
           
            <button onClick={exportToWord}>Download Word</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Sl</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th> Date</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment._id}>
                  <td>{index + 1}</td>
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
