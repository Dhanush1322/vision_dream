import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/ActiveUser.css';

function ActiveUser() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

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
            ['Sno.', 'Userid', 'Name', 'Login Password', 'Sponsor ID', 'Sponsor Name', 'Mobile No.', 'Reg. Date', 'Act. Date', 'Status', 'Income Start/Stop', 'Withdrawal Start/Stop']
        ]
            .map((row) => row.join(','))
            .join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'active_users.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Dummy user data
    const users = Array.from({ length: 20 }, (_, i) => ({
        sno: i + 1,
        userid: `User${i + 1}`,
        name: `Name ${i + 1}`,
        loginPassword: '******',
        sponsorId: `SP${i + 1}`,
        sponsorName: `Sponsor ${i + 1}`,
        mobileNo: `98765432${i % 10}`,
        regDate: '2024-01-01',
        actDate: '2024-02-01',
        status: 'Active',
        incomeStartStop: 'Start',
        withdrawalStartStop: 'Start',
    }));

    // Filtered and sorted data
    const filteredUsers = users.filter(user =>
        user.userid.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (!sortColumn) return 0;
        return sortOrder === 'asc' ? (a[sortColumn] > b[sortColumn] ? 1 : -1) : (a[sortColumn] < b[sortColumn] ? 1 : -1);
    });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

    return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="dashboard-content">
                <Navbar toggleSidebar={toggleSidebar} />

                <div className="active-table-container">
                    <h3>Active Users</h3>
                    <input
                        type="text"
                        placeholder="Search by user ID or name"
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
                                    <th onClick={() => handleSort('sponsorId')}>Sponsor ID</th>
                                    <th onClick={() => handleSort('sponsorName')}>Sponsor Name</th>
                                    <th onClick={() => handleSort('mobileNo')}>Mobile No.</th>
                                    <th onClick={() => handleSort('regDate')}>Reg. Date</th>
                                    <th onClick={() => handleSort('actDate')}>Act. Date</th>
                                    <th onClick={() => handleSort('status')}>Status</th>
                                    <th onClick={() => handleSort('incomeStartStop')}>Income Start/Stop</th>
                                    <th onClick={() => handleSort('withdrawalStartStop')}>Withdrawal Start/Stop</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.length > 0 ? (
                                    currentUsers.map((user) => (
                                        <tr key={user.sno}>
                                            <td>{user.sno}</td>
                                            <td>{user.userid}</td>
                                            <td>{user.name}</td>
                                            <td>{user.loginPassword}</td>
                                            <td>{user.sponsorId}</td>
                                            <td>{user.sponsorName}</td>
                                            <td>{user.mobileNo}</td>
                                            <td>{user.regDate}</td>
                                            <td>{user.actDate}</td>
                                            <td>{user.status}</td>
                                            <td>{user.incomeStartStop}</td>
                                            <td>{user.withdrawalStartStop}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="12" className="no-data">No users found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagination">
                        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveUser;