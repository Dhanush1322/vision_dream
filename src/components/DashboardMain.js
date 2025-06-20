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
        <Card title="Today's Joining" count="0" />
        <Card title="Today's Active Users" count="0" />
        <Card title="Today's Business" count="$0" />
        <Card title="Today's Withdrawal" count="$0" />
        <Card title="Active Member" count="92" />
        <Card title="Total Member" count="144" />
        <Card title="Total Business" count="4,656,000" />
        <Card title="Total Withdrawal" count="2,323,638" />
        <Card title="Total Fund Convert" count="127,500" />
        <Card title="Available Balance" count="2,332,362" />
        <Card title="Available Fund" count="N/A" />
        <Card title="Today's Fund Approved" count="N/A" />
        <Card title="Total Fund Approved" count="1,571,500" />
      </div>
    
    </div>
  );
};

export default DashboardMain;
