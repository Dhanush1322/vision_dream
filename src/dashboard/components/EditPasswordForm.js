import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './EditPasswordForm.css';

function EditPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match!',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
      return;
    }

    if (password.length < 8) {
      Swal.fire({
        title: 'Error!',
        text: 'Password must be at least 8 characters long!',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      const response = await axios.post(
        'http://localhost:5001/api/admin/change-password',
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in headers
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'Password updated successfully!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });

        // Clear fields
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (err) {
      console.error('Error:', err.response || err);
      Swal.fire({
        title: 'Error!',
        text: err.response?.data?.message || 'Failed to update password!',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit} className="edit-password-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </div>
  );
}

export default EditPasswordForm;
