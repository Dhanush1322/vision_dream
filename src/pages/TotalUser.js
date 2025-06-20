import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/TotalUser.css';
import { Button } from "@mui/material";
import Swal from "sweetalert2";

function TotalUser() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]); // Use local or mock data if desired
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 5;


    const handleStatusChange = (userId, currentStatus) => {
        const newStatus = currentStatus === "active" ? "inactive" : "active";
        setUsers(users.map(user =>
            user._id === userId ? { ...user, status: newStatus } : user
        ));
        Swal.fire({
            title: "Success!",
            text: `User status updated to ${newStatus.toUpperCase()}`,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK"
        });
    };

    const handleBlockUnblock = (userId, currentStatus) => {
        const newStatus = currentStatus === "blocked" ? "unblocked" : "blocked";
        setUsers(users.map(user =>
            user._id === userId ? { ...user, profileStatus: newStatus } : user
        ));
        Swal.fire({
            title: "Success!",
            text: `User status updated to ${newStatus.toUpperCase()}`,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK"
        });
    };

    return (
    

                <div className="inactive-table-container">
                    <h3>Total Users</h3>
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
                                        <tr key={user._id || index}>
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
                                                    {user.status?.toUpperCase()}
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
                                        <td colSpan="9" className="no-data">No users found</td>
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

export default TotalUser;
