import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/PaidWithdrawal.css';

function PaidWithdrawal() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const downloadCSV = () => {
      const csvContent = [
          ['Sno.', 'Date', 'Time', 'Userid', 'Name', 'Amount', 'Admin_Charge', 'TDS', 'P.Amount', 'Ac', 'IFSC', 'Status', 'Refund']
      ]
          .map((row) => row.join(','))
          .join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'approved_fund_requests.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    

              <div className="paid-withdrawal-table-container">
                  <h3>Paid Withdrawal</h3>
                  <input
                      type="text"
                      placeholder="Search by user ID or email"
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
                                  <th>Date</th>
                                  <th>Time</th>
                                  <th>Userid</th>
                                  <th>Name</th>
                                  <th>Amount</th>
                                  <th>Admin_Charge</th>
                                  <th>TDS</th>
                                  <th>P.Amount</th>
                                  <th>Ac</th>
                                  <th>IFSC</th>
                                  <th>Status</th>
                                  <th>Refund</th>
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

export default PaidWithdrawal;
