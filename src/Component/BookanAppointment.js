import React from 'react';
import Header from './Header';
import '../Css/BookanAppointment.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function BookanAppointment() {
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
        <form className="appointment-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDate">Preferred Appointment Date</label>
            <input type="date" id="appointmentDate" name="appointmentDate" required />
          </div>

         

          <div className="form-group">
            <label htmlFor="message">Additional Message</label>
            <textarea id="message" name="message" placeholder="Enter any additional details"></textarea>
          </div>

          <button type="submit" className="submit-button">Book Appointment</button>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default BookanAppointment;
