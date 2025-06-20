import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './UpadateBanner.css';
import Swal from 'sweetalert2';


function UpdateBanner() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [banners, setBanners] = useState([]);
    const [update,setUpdate]=useState(false);
    const navigate = useNavigate(); // Hook to navigate to another route

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Fetching banner data from the API
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await fetch('https://sapthapadhimatrimony.in/backend/app/getGalloticBanner');
                const data = await response.json();
                console.log("data",data)
                setBanners(data);
            } catch (error) {
                console.error('Error fetching banners:', error);
            }
        };

        fetchBanners();
    }, [update]);

    // Handle Delete action

const handleDelete = async (id) => {
  try {
    // Show confirmation popup
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this banner? This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    // If the user confirms, proceed with deletion
    if (result.isConfirmed) {
      const response = await fetch(`https://sapthapadhimatrimony.in/backend/app/deleteGalloticBanner/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBanners(banners.filter((banner) => banner.imageId !== id));

        // Show success message
        setUpdate(!update)
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'The banner has been deleted successfully.',
        });
      } else {
        // Show error message for server error
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: 'Failed to delete the banner. Please try again later.',
        });
      }
    }
  } catch (error) {
    console.error('Error deleting banner:', error);

    // Show error message for network or unexpected errors
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred while deleting the banner. Please try again.',
    });
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
                                                src={`https://sapthapadhimatrimony.in/backend/${banner?.imageUrls[0]?.path}`}
                                                alt={banner.imageId}
                                                className="banner-image"
                                            />
                                        </td>
                                        <td>
                                            {/* <button onClick={() => handleEdit(banner.imageId)} className="edit-btn">Edit</button> */}
                                            <button onClick={() => handleDelete(banner.id)} className="delete-btn">Delete</button>
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
