import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './UpadateBanner.css';

function UpdateBanner() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [banners, setBanners] = useState([]);
    const navigate = useNavigate(); // Hook to navigate to another route

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Fetching banner data from the API
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await fetch('https://api-banner-6i7qc.ondigitalocean.app/api/banner-images');
                const data = await response.json();
                setBanners(data);
            } catch (error) {
                console.error('Error fetching banners:', error);
            }
        };

        fetchBanners();
    }, []);

    // Handle Delete action
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://api-banner-6i7qc.ondigitalocean.app/api/banner-images/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setBanners(banners.filter(banner => banner.imageId !== id));
                alert('Banner deleted successfully');
            } else {
                alert('Failed to delete banner');
            }
        } catch (error) {
            alert('Error deleting banner');
        }
    };

    // Handle Edit action
    const handleEdit = (id) => {
        // Navigate to the edit page with the imageId in the URL
        navigate(`/EditBanner/${id}`);
    };

    return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="dashboard-content">
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="banner-table-container">
                    <h2 className="table-title">Banner List</h2>
                    <table className="banner-table">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {banners.length > 0 ? (
                                banners.map((banner, index) => (
                                    <tr key={banner._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img
                                                src={`https://api-banner-6i7qc.ondigitalocean.app/${banner.url}`}
                                                alt={banner.imageId}
                                                className="banner-image"
                                            />
                                        </td>
                                        <td>
                                            <button onClick={() => handleEdit(banner.imageId)} className="edit-btn">Edit</button>
                                            <button onClick={() => handleDelete(banner.imageId)} className="delete-btn">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No banners found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default UpdateBanner;
