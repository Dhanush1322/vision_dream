import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/SliderImageUpload.css';
import SliderImageHistory from '../components/SliderImageHistory';

function SliderImageUpload() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sliderImage, setSliderImage] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSliderImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Slider Image:', sliderImage);
    // Handle the form submission logic here (e.g., send image to backend)
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="dashboard-content">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="form-container">
          <h2>Upload Slider Image</h2>
          <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
              <label htmlFor="sliderImage">Upload Slider Image</label>
              <input
                type="file"
                id="sliderImage"
                accept="image/*"
                onChange={handleImageUpload}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button">Upload</button>
           
          </form>
         
        </div>
        <SliderImageHistory/>
      </div>
    </div>
  );
}

export default SliderImageUpload;
