import React from 'react';
import Card from './Card';
import './DashboardMain.css';

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <div className="stats-cards">
        <Card title="Total Users" count={3000} />
        <Card title="Revenue" count="$12,000" />
        <Card title="New Orders" count="350" />
        <Card title="Pending Tasks" count="5" />
      </div>
    </div>
  );
};

export default DashboardMain;
