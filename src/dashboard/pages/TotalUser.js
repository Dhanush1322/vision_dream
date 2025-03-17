import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/TotalUser.css';
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
function TotalUser() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 5;

    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwMDkxOTliNjhkMTBiMzM0ZjRiOGQiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0MjAyMjk3NiwiZXhwIjoxODI4NDIyOTc2fQ._GLK7VsH42PzRJQZiS9vMPCJmf7Yr-SRXUhV-szwFgw"; // Replace with actual token

    useEffect(() => {
        fetchUsers();
    }, [currentPage]);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/admin/user/all?page=${currentPage}&limit=${itemsPerPage}&filter=all`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                setUsers(data.result?.users?.docs || []);
                setTotalPages(data.result?.users?.totalPages || 1);
            } else {
                console.error("Failed to fetch users:", data.message);
                setUsers([]);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            setUsers([]);
        }
    };

    const handleStatusChange = async (userId, currentStatus) => {
        const newStatus = currentStatus === "active" ? "inactive" : "active";

        try {
            const response = await fetch("http://localhost:5001/api/admin/user/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`  // Use actual auth token
                },
                body: JSON.stringify({ id: userId, status: newStatus })
            });

            const result = await response.json();

            if (response.ok) {
                // Update UI instantly
                setUsers(users.map(user =>
                    user._id === userId ? { ...user, status: newStatus } : user
                ));

                // Show SweetAlert2 confirmation
                Swal.fire({
                    title: "Success!",
                    text: `User status updated to ${newStatus.toUpperCase()}`,
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: result.message || "Failed to update status",
                    icon: "error",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "Try Again"
                });
            }
        } catch (error) {
            console.error("Error updating status:", error);
            Swal.fire({
                title: "Error!",
                text: "Something went wrong",
                icon: "error",
                confirmButtonColor: "#d33",
                confirmButtonText: "Try Again"
            });
        }
    };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleBlockUnblock = async (userId, currentStatus) => {
        const newStatus = currentStatus === "blocked" ? "unblocked" : "blocked";
        try {
            const response = await axios.put("http://localhost:5001/api/admin/user/update", {
                id: userId,
                profileStatus: newStatus,
            }, {
                headers: { "Authorization": `Bearer ${authToken}` } // Include token if required
            });
    
            if (response.status === 200) {
                Swal.fire({
                    title: "Success!",
                    text: `User status updated to ${newStatus.toUpperCase()}`,
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                });
                setUsers(users.map(user =>
                    user._id === userId ? { ...user, profileStatus: newStatus } : user
                ));
            } else {
                console.error("API Error:", response);
                Swal.fire("Error!", "Failed to update status", "error");
            }
        } catch (error) {
            console.error("Error updating user status:", error);
            Swal.fire("Error!", "Something went wrong", "error");
        }
    };
     return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="dashboard-content">
                <Navbar toggleSidebar={toggleSidebar} />

                <div className="inactive-table-container">
                    <h3>Inactive Users</h3>
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
                                    <th>Sno.</th>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Phone No.</th>
                                    <th>Referral ID</th>
                                    <th>Role</th>
                                    <th>Reg. Date</th>
                                    <th>Status</th>
                                    <th>Manage User</th>
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
                                            <td>
                                                <Button
                                                    variant="contained"
                                                    color={user.status === "active" ? "success" : "error"}
                                                    onClick={() => handleStatusChange(user._id, user.status)}
                                                >
                                                    {user.status.toUpperCase()}
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    variant="contained"
                                                    color={user.profileStatus === "unblocked" ? "success" : "error"}
                                                    onClick={() => handleBlockUnblock(user._id, user.profileStatus)}
                                                >
                                                    {user.profileStatus === "unblocked" ? "Block" : "Unblock"}
                                                </Button>
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

export default TotalUser;
