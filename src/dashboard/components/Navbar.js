import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar1">
      {/* Hamburger Menu for mobile view */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </div>
      <h3>Welcome, Admin</h3>
    </div>
  );
};

export default Navbar;
