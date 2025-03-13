import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../css/BlockUser.css';

function BlockUser() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!userId.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid User ID!',
            });
            return;
        }

        // Simulating API response
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'User Blocked',
                text: `User ID ${userId} has been successfully blocked.`,
            });

            setUserId('');
        }, 1000);
    };

    return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="dashboard-content">
                <Navbar toggleSidebar={toggleSidebar} />

                <div className="form-container">
                    <h2>Block User</h2>
                    <form onSubmit={handleSubmit} className="user-form">
                        <div className="form-group">
                            <label htmlFor="userId">User ID</label>
                            <input
                                type="text"
                                id="userId"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                placeholder="Enter User ID"
                                required
                                className="form-input"
                            />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BlockUser;
