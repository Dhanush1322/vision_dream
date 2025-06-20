import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/FundHistory.css';

function FundHistory() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

 

  const downloadCSV = () => {
    const csvContent = [
      ['Sno.', 'Userid', 'Name', 'Amount', 'Type']
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'balance_history.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
   
        <div className="fund-table-container">
          <h3>Fund History</h3>
          <input
            type="text"
            placeholder="Search by user ID or name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button onClick={downloadCSV} className="download-btn">
            Download CSV
          </button>

          <div className="table-responsive">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>Userid</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {/* Data will be added dynamically from API */}
              </tbody>
            </table>
          </div>
        </div>
     
  );
}

export default FundHistory