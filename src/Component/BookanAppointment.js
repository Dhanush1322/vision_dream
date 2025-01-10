import React, { useState } from 'react';
import Header from './Header';
import '../Css/BookanAppointment.css';
import Footer from './Footer';
import axios from 'axios';

function BookanAppointment() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loader
  const [formErrors, setFormErrors] = useState({}); // New state to store form errors

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate the form
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Check if full name is provided
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
      isValid = false;
    }

    // Check if email is provided and valid
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    // Check if phone is provided and valid
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
      isValid = false;
    }

    // Check if appointment date is provided
    if (!formData.appointmentDate) {
      errors.appointmentDate = ' Date is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) return;

    setIsLoading(true); // Show loader when submitting form
    setFormErrors({}); // Clear any previous errors
    setIsSubmitted(false); // Reset success message visibility

    try {
      const response = await axios.post('https://goldfish-app-sqg4v.ondigitalocean.app/api/book-appointment', formData);
      if (response.status === 200) {
        // Show success message after loader completes
        setTimeout(() => {
          setIsSubmitted(true);
        }, 2000); // Delay for 2 seconds after loader

        // Clear the form fields after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          appointmentDate: '',
          message: ''
        });

        // Hide the success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000); // Hide after 5 seconds (2 seconds for loader + 3 seconds for message visibility)
      }
    } catch (error) {
      setError('There was an issue submitting your application. Please try again.');
    } finally {
      setTimeout(() => {
        setIsLoading(false); // Hide loader after submission is complete
      }, 2000);
    }
  };

  return (
    <>
      <Header />
      {/* Page Intro Section */}
      <section className="row page_intro">
        <div className="row m0 inner">
          <div className="container">
            <div className="row">
              <h2 style={{ textTransform: 'none'}}>Career@GaloreTx</h2>
            </div>
          </div>
        </div>
      </section>
 
      <div className="book-appointment">
      <p style={{fontSize:'20px',textAlign:'center'}}>Have questions or want to apply for a job?</p>

        <p style={{fontSize:'20px',textAlign:'center'}}>Drop us a message, and we’ll get back to you!</p>

        {/* Show success message if form is submitted */}
        {isSubmitted && <p className="appointment_sucess">Your Message has been successfully Sent</p>}

        {/* Show error message if there is any error */}
        {error && <p className="error">{error}</p>}

        {/* Display loader if form is being submitted */}
        {isLoading && <div className="loader"></div>}

        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
            {formErrors.fullName && <p className="error">{formErrors.fullName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
            {formErrors.phone && <p className="error">{formErrors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDate"> Date</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
            {formErrors.appointmentDate && <p className="error">{formErrors.appointmentDate}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message"> Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter any additional details"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
           Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default BookanAppointment;
