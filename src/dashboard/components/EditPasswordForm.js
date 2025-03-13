import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './EditPasswordForm.css';

function EditPasswordForm() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation logic
    if (newPassword !== confirmNewPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'New Password and Confirm New Password do not match.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
      return;
    }

    if (newPassword.length < 8) {
      Swal.fire({
        title: 'Error!',
        text: 'New Password must be at least 8 characters long.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://host-rl4ol.ondigitalocean.app/reset-password', {
        oldPassword,
        newPassword,
        confirmNewPassword,
      });

      if (response.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'Password updated successfully!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        Swal.fire({
          title: 'Error!',
          text: `Error: ${response.status} - ${response.statusText}`,
          icon: 'error',
          confirmButtonColor: '#d33',
        });
      }
    } catch (err) {
      console.error('Error details:', err.response || err);

      Swal.fire({
        title: 'Error!',
        text: err.response?.data?.message || 'Failed to update password. Please try again.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-password-container">
      <h2>Edit Password</h2>
      <form onSubmit={handleSubmit} className="edit-password-form">
        <div className="form-group">
          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter current password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmNewPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
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
