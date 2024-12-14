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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://goldfish-app-sqg4v.ondigitalocean.app/api/book-appointment', formData);
      if (response.status === 200) {
        setIsSubmitted(true);
        setError('');
      }
    } catch (error) {
      setError('There was an issue submitting your appointment. Please try again.');
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
              <h2>Book An Appointment</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="book-appointment">
        <h2>Book an Appointment</h2>
        {isSubmitted && <p>Your appointment has been successfully booked!</p>}
        {error && <p className="error">{error}</p>}
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
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDate">Preferred Appointment Date</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter any additional details"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Book Appointment
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default BookanAppointment;
