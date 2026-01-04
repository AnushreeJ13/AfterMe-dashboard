import React from 'react';
import './Header.css';

const Header = ({ activeTab, onTabChange }) => {
  return (
    <header className="dashboard-header">
      <div className="logo-section">
        <div className="logo">
          <svg viewBox="0 0 40 40" className="logo-icon">
            <path d="M20 5 C15 5 10 8 10 15 L10 25 C10 32 15 35 20 35 C25 35 30 32 30 25 L30 15 C30 8 25 5 20 5 Z M20 10 C22 10 25 11 25 15 L25 25 C25 29 22 30 20 30 C18 30 15 29 15 25 L15 15 C15 11 18 10 20 10 Z" fill="currentColor"/>
            <circle cx="20" cy="17" r="2" fill="currentColor"/>
          </svg>
          <span className="logo-text">afterme<sup>®</sup></span>
        </div>
        <button className="manage-plan-btn">Manage my Plan</button>
      </div>

      <nav className="main-nav">
        <button 
          onClick={() => onTabChange('dashboard')} 
          className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
        >
          Dashboard
        </button>
        <button 
          onClick={() => onTabChange('manage')} 
          className={`nav-link ${activeTab === 'manage' ? 'active' : ''}`}
        >
          Manage Your Life After Me
        </button>
        <button 
          onClick={() => onTabChange('trusted')} 
          className={`nav-link ${activeTab === 'trusted' ? 'active' : ''}`}
        >
          My Trusted Appointees
        </button>
        <button 
          onClick={() => onTabChange('expert')} 
          className={`nav-link ${activeTab === 'expert' ? 'active' : ''}`}
        >
          My Expert Advisers
        </button>
        <button 
          onClick={() => onTabChange('security')} 
          className={`nav-link ${activeTab === 'security' ? 'active' : ''}`}
        >
          Security
        </button>
      </nav>

      <div className="header-actions">
        <button className="icon-btn" aria-label="Notifications">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
        <button className="icon-btn" aria-label="Help">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
          </svg>
        </button>
        <button className="profile-btn">
          <div className="avatar">GA</div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;