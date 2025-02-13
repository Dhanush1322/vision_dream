import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/OutBox.css';

function OutBox() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
  
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  
    const downloadCSV = () => {
        const csvContent = [
            ['Sn.', 'Date', 'Time', 'From', 'Message']
        ]
            .map((row) => row.join(','))
            .join('\n');
  
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'outstanding_balance.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  
    return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="dashboard-content">
                <Navbar toggleSidebar={toggleSidebar} />
  
                <div className="outstanding-table-container">
                    <h3>Outstanding Balance</h3>
                    <input
                        type="text"
                        placeholder="Search by user ID or email"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button onClick={downloadCSV} className="download-btn">
                        Download CSV
                    </button>
  
                    <div className="table-responsive">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>Sn.</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>From</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Data will be added dynamically from API */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutBox;
