import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/TotalUser.css';

function TotalUser() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    useEffect(() => {
        // Fetch users from API (replace with actual API call)
        const fetchUsers = async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSort = (column) => {
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortColumn(column);
        setSortOrder(order);
        setUsers([...users].sort((a, b) => (order === 'asc' ? a[column] > b[column] : a[column] < b[column]) ? 1 : -1));
    };

    const downloadCSV = () => {
        const csvContent = [
            ['Sno.', 'Userid', 'Name', 'Login Password', 'Transaction Password', 'Sponsor ID', 'Sponsor Name', 'Mobile No.', 'Reg. Date', 'Act. Date', 'Act. Time', 'Package', 'Status', 'Edit', 'Login'],
            ...users.map((user, index) => [
                index + 1, user.userid, user.name, user.loginPassword, user.transactionPassword, user.sponsorId, user.sponsorName, user.mobileNo, user.regDate, user.actDate, user.actTime, user.package, user.status
            ])
        ]
        .map(row => row.join(','))
        .join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'users.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredUsers = users.filter(user =>
        user.userid.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

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
                    <button onClick={downloadCSV} className="download-btn">Download CSV</button>
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
                                    <th>Edit</th>
                                    <th>Login</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map((user, index) => (
                                    <tr key={user.userid}>
                                        <td>{indexOfFirstUser + index + 1}</td>
                                        <td>{user.userid}</td>
                                        <td>{user.name}</td>
                                        <td>{user.loginPassword}</td>
                                        <td>{user.transactionPassword}</td>
                                        <td>{user.sponsorId}</td>
                                        <td>{user.sponsorName}</td>
                                        <td>{user.mobileNo}</td>
                                        <td>{user.regDate}</td>
                                        <td>{user.actDate}</td>
                                        <td>{user.actTime}</td>
                                        <td>{user.package}</td>
                                        <td>{user.status}</td>
                                        <td><button>Edit</button></td>
                                        <td><button>Login</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                        <span>Page {currentPage} of {Math.ceil(filteredUsers.length / usersPerPage)}</span>
                        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalUser;
