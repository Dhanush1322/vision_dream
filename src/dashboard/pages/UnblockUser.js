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
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const users = [
    { id: 1, userid: 'John Doe', email: 'john@example.com', password: 'Blocked', action: 'Blocked' },
    { id: 2, userid: 'Jane Smith', email: 'jane@example.com', password: 'Blocked', action: 'Blocked' },
    { id: 3, userid: 'Mike Johnson', email: 'mike@example.com', password: 'Blocked', action: 'Blocked' },
    { id: 4, userid: 'Alice Brown', email: 'alice@example.com', password: 'Blocked', action: 'Blocked' },
    { id: 5, userid: 'Bob Williams', email: 'bob@example.com', password: 'Blocked', action: 'Blocked' },
  ];

  const handleSort = (column) => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortOrder(order);
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortColumn) return 0;
    return sortOrder === 'asc' ? (a[sortColumn] > b[sortColumn] ? 1 : -1) : (a[sortColumn] < b[sortColumn] ? 1 : -1);
  });

  const filteredUsers = sortedUsers.filter((user) =>
    user.userid.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredUsers.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="unblock-table-container">
          <h3>Blocked Users</h3>
          <input
            type="text"
            placeholder="Search by user ID or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />

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
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
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

          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1} className="pagination-btn">Previous</button>
            <span> Page {currentPage} of {Math.ceil(filteredUsers.length / usersPerPage)} </span>
            <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)} className="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnblockUser;
