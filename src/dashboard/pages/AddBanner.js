import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
  import Swal from 'sweetalert2'; // Make sure to install SweetAlert2: npm install sweetalert2
  
import { useNavigate } from 'react-router-dom';
import './AddBanner.css';

function AddBanner() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem('auth');
    if (!token) {
      navigate('/Login');
    }
  }, [navigate]);

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // Check for file size (5MB limit)
        alert('File size exceeds 5MB limit. Please choose a smaller file.');
      } else {
        setImage(file);
      }
    }
  };

  // Handle form submission
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!image) {
      Swal.fire({
        icon: 'warning',
        title: 'No Image Selected',
        text: 'Please select an image to upload.',
      });
      return;
    }
  
    setLoading(true); // Show loading state
    const formData = new FormData();
    formData.append('banner', image); // Ensure 'image' matches backend key
  
    try {
      const response = await axios.post(
        'https://sapthapadhimatrimony.in/backend/app/addGalloticBanner',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      console.log('Server Response:', response.data);
  
      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Banner uploaded successfully!',
      });
  
      setImage(null); // Reset file input after successful upload
    } catch (error) {
      console.error('Error uploading banner:', error);
  
      let errorMessage = 'Failed to upload banner. Please try again later.';
      if (error.response) {
        console.error('Server Error:', error.response.data);
        errorMessage = error.response.data.message || 'Server error';
      }
  
      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Upload Failed',
        text: errorMessage,
      });
    } finally {
      setLoading(false); // Hide loading state
    }
  };
  

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="add-banner-container">
          <h2 className="form-title">Add New Banner</h2>
          <form onSubmit={handleSubmit} className="banner-form">
            <label className="form-label">
              Select Banner Image:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
              />
            </label>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Uploading...' : 'Submit'}
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AddBanner;
