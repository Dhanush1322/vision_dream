import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/TotalUser.css';

function TotalUser() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSort = (column) => {
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortColumn(column);
        setSortOrder(order);
    };

    const downloadCSV = () => {
        const csvContent = [
            ['Sno.', 'Userid', 'Name', 'Login Password', 'Transaction Password', 'Sponsor ID', 'Sponsor Name', 'Mobile No.', 'Reg. Date', 'Act. Date', 'Act. Time', 'Package', 'Status', 'Edit', 'Login']
        ]
            .map((row) => row.join(','))
            .join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'blocked_users.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="dashboard-content">
                <Navbar toggleSidebar={toggleSidebar} />

                <div className="total-table-container">
                    <h3>Total Users</h3>
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
                                    <th onClick={() => handleSort('sno')}>Sno.</th>
                                    <th onClick={() => handleSort('userid')}>Userid</th>
                                    <th onClick={() => handleSort('name')}>Name</th>
                                    <th onClick={() => handleSort('loginPassword')}>Login Password</th>
                                    <th onClick={() => handleSort('transactionPassword')}>Transaction Password</th>
                                    <th onClick={() => handleSort('sponsorId')}>Sponsor ID</th>
                                    <th onClick={() => handleSort('sponsorName')}>Sponsor Name</th>
                                    <th onClick={() => handleSort('mobileNo')}>Mobile No.</th>
                                    <th onClick={() => handleSort('regDate')}>Reg. Date</th>
                                    <th onClick={() => handleSort('actDate')}>Act. Date</th>
                                    <th onClick={() => handleSort('actTime')}>Act. Time</th>
                                    <th onClick={() => handleSort('package')}>Package</th>
                                    <th onClick={() => handleSort('status')}>Status</th>
                                    <th onClick={() => handleSort('edit')}>Edit</th>
                                    <th onClick={() => handleSort('login')}>Login</th>
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

export default TotalUser