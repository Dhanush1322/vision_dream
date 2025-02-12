import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../css/UnblockUser.css';

function UnblockUser() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dummy user data with unique IDs
  const users = [
    { id: 1, userid: 'John Doe', email: 'john@example.com', password: 'Blocked', action: 'Blocked' },
    { id: 2, userid: 'Jane Smith', email: 'jane@example.com', password: 'Blocked', action: 'Blocked' },
    { id: 3, userid: 'Mike Johnson', email: 'mike@example.com', password: 'Blocked', action: 'Blocked' },
    { id: 4, userid: 'Alice Brown', email: 'alice@example.com', password: 'Blocked', action: 'Blocked' },
    { id: 5, userid: 'Bob Williams', email: 'bob@example.com', password: 'Blocked', action: 'Blocked' },
  ];

  // Handle sorting logic
  const handleSort = (column) => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortOrder(order);
  };

  // Sort users based on selected column
  const sortedUsers = [...users].sort((a, b) => {
    if (!sortColumn) return 0;
    return sortOrder === 'asc' ? (a[sortColumn] > b[sortColumn] ? 1 : -1) : (a[sortColumn] < b[sortColumn] ? 1 : -1);
  });

  // Filter users based on search input
  const filteredUsers = sortedUsers.filter((user) =>
    user.userid.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Download CSV function
  const downloadCSV = () => {
    const csvContent = [
      ['ID', 'Userid', 'Email', 'Password', 'Action'],
      ...users.map((user) => [user.id, user.userid, user.email, user.password, user.action]),
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

        <div className="table-container">
          <h3>Blocked Users</h3>
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

          <table className="user-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>ID</th>
                <th onClick={() => handleSort('userid')}>User ID</th>
                <th onClick={() => handleSort('email')}>Email</th>
                <th onClick={() => handleSort('password')}>Password</th>
                <th onClick={() => handleSort('action')}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userid}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.action}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UnblockUser;
