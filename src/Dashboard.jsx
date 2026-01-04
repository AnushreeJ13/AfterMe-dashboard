import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-content-only">
      <h1 className="dashboard-title">My Dashboard</h1>
      
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Sections Completed</h3>
            <div className="card-icon sections-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
          </div>
          <div className="card-content">
            <div className="card-stats">
              <span className="stat-value">0</span>
              <span className="stat-divider">/</span>
              <span className="stat-total">16</span>
              <span className="stat-label">Sections</span>
            </div>
          </div>
          <button className="card-action-btn">Manage</button>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>Trusted Appointees</h3>
            <div className="card-icon people-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
          </div>
          <div className="card-content">
            <div className="card-stats">
              <span className="stat-value">0</span>
              <span className="stat-divider">/</span>
              <span className="stat-total">5</span>
              <span className="stat-label">Total</span>
            </div>
          </div>
          <button className="card-action-btn">Manage</button>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>Expert Advisers</h3>
            <div className="card-icon people-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
          </div>
          <div className="card-content">
            <div className="card-stats">
              <span className="stat-value">0</span>
              <span className="stat-divider">/</span>
              <span className="stat-total">3</span>
              <span className="stat-label">Total</span>
            </div>
          </div>
          <button className="card-action-btn">Manage</button>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>Legacy Assets Memories</h3>
            <div className="card-icon document-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </div>
          </div>
          <div className="card-content">
            <div className="card-stats-split">
              <div className="stat-item">
                <span className="stat-value-large">0</span>
                <span className="stat-label-small">Unassigned</span>
              </div>
              <div className="stat-item">
                <span className="stat-value-large">0</span>
                <span className="stat-label-small">Total</span>
              </div>
            </div>
          </div>
          <button className="card-action-btn">Manage</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;