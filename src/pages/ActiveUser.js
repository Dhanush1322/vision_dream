import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/ActiveUser.css';

function ActiveUser() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [users, setUsers] = useState([]); // Empty user list for now
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 5;

   

    const handleSort = (column) => {
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortColumn(column);
        setSortOrder(order);
    };

    const sortedUsers = users.sort((a, b) => {
        if (!sortColumn) return 0;
        return sortOrder === 'asc'
            ? (a[sortColumn] > b[sortColumn] ? 1 : -1)
            : (a[sortColumn] < b[sortColumn] ? 1 : -1);
    });

    return (
       

                <div className="active-table-container">
                    <h3>Active Users</h3>
                    <input
                        type="text"
                        placeholder="Search by user ID or name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />

                    <div className="table-responsive">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort('sno')}>Sno.</th>
                                    <th onClick={() => handleSort('email')}>Email</th>
                                    <th onClick={() => handleSort('name')}>Name</th>
                                    <th onClick={() => handleSort('phoneNumber')}>Phone No.</th>
                                    <th onClick={() => handleSort('referralId')}>Referral ID</th>
                                    <th onClick={() => handleSort('role')}>Role</th>
                                    <th onClick={() => handleSort('createdAt')}>Reg. Date</th>
                                    <th onClick={() => handleSort('status')}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedUsers.length > 0 ? (
                                    sortedUsers.map((user, index) => (
                                        <tr key={user._id || index}>
                                            <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                            <td>{user.email}</td>
                                            <td>{user.name}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td>{user.referralId}</td>
                                            <td>{user.role}</td>
                                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                            <td style={{ color: "green" }}>{user.status}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="no-data">No users found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagination">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
          
    );
}

export default ActiveUser;
