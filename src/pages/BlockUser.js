import React, { useState } from 'react';

function BlockUser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [users, setUsers] = useState([]); // Placeholder, you can fetch from API later
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSort = (column) => {
    if (sortColumn === column) {
      // If same column clicked, toggle order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // New column clicked, default to ascending
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = a[sortColumn] || '';
    const bVal = b[sortColumn] || '';
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    return 0;
  });

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    
      <div className="active-table-container">
        <h3>Blocked User List</h3>
        <input
          type="text"
          placeholder="Search by user ID or name"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
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
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user, index) => (
                  <tr key={user._id || index}>
                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.referralId}</td>
                    <td>{user.role}</td>
                    <td>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : ''}</td>
                    <td style={{ color: user.status === 'active' ? 'green' : 'red' }}>
                      {user.status}
                    </td>
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
          <span>Page {currentPage} of {totalPages || 1}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
  
  );
}

export default BlockUser;
