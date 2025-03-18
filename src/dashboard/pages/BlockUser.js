import React, { useState , useEffect } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../css/BlockUser.css';

function BlockUser() {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
          const [searchQuery, setSearchQuery] = useState('');
          const [sortColumn, setSortColumn] = useState(null);
          const [sortOrder, setSortOrder] = useState('asc');
          const [users, setUsers] = useState([]);
          const [currentPage, setCurrentPage] = useState(1);
          const [totalPages, setTotalPages] = useState(1);
          const itemsPerPage = 5;
          
          const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwMDkxOTliNjhkMTBiMzM0ZjRiOGQiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0MjAyMjk3NiwiZXhwIjoxODI4NDIyOTc2fQ._GLK7VsH42PzRJQZiS9vMPCJmf7Yr-SRXUhV-szwFgw";
      const [isAuthenticated, setIsAuthenticated] = useState(false);
        const navigate = useNavigate();
      
        useEffect(() => {
          const authToken = localStorage.getItem("token"); // Retrieve token
          if (!authToken) {
            navigate("/"); // Redirect to login if no token
          } else {
            setIsAuthenticated(true); // Set authenticated state to true
          }
        }, [navigate]); // Runs on component mount
        
          useEffect(() => {
              fetchUsers();
          }, [currentPage]);
      
          const fetchUsers = async () => {
              try {
                  const response = await fetch(`https://goldfish-app-nczbc.ondigitalocean.app/api/admin/user/all?page=${currentPage}&limit=${itemsPerPage}&filter=blocked`, {
                      method: "GET",
                      headers: {
                          "Content-Type": "application/json",
                          "Authorization": `Bearer ${authToken}`
                      }
                  });
          
                  const data = await response.json();
          
                  if (response.ok) {
                      setUsers(data.result?.users?.docs || []);  // Corrected path
                      setTotalPages(data.result?.users?.totalPages || 1); // Ensure total pages is set correctly
                  } else {
                      console.error("Failed to fetch users:", data.message);
                  }
              } catch (error) {
                  console.error("Error fetching users:", error);
              }
          };
          
          const toggleSidebar = () => {
              setIsSidebarOpen(!isSidebarOpen);
          };
      
          const handleSort = (column) => {
              const order = sortOrder === 'asc' ? 'desc' : 'asc';
              setSortColumn(column);
              setSortOrder(order);
          };
      
          const sortedUsers = users.sort((a, b) => {
              if (!sortColumn) return 0;
              return sortOrder === 'asc' ? (a[sortColumn] > b[sortColumn] ? 1 : -1) : (a[sortColumn] < b[sortColumn] ? 1 : -1);
          });
      
          return (
              <div className="dashboard">
                  <Sidebar isOpen={isSidebarOpen} />
                  <div className="dashboard-content">
                      <Navbar toggleSidebar={toggleSidebar} />
      
                      <div className="active-table-container">
                          <h3>Blocked User List</h3>
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
                                      {users.length > 0 ? (
                                          users.map((user, index) => (
                                              <tr key={user._id}>
                                                  <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                                  <td>{user.email}</td>
                                                  <td>{user.name}</td>
                                                  <td>{user.phoneNumber}</td>
                                                  <td>{user.referralId}</td>
                                                  <td>{user.role}</td>
                                                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                                  <td style={{ color:user.status==="active"? 'green': 'red' }}>{user.status}</td>
      
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
export default BlockUser;
