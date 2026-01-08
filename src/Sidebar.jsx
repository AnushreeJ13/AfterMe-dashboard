import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ user: propUser, onLogout }) => {
  const [user, setUser] = useState(propUser || {
    firstName: "",
    lastName: "",
    email: "",
    role: "Member",
    profileCompletion: 0
  });

  useEffect(() => {
    // If parent passed user, use it; otherwise try to fetch using stored token
    if (propUser) return;

    const token = localStorage.getItem("token");
    if (!token) return;

    fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => {
        console.error(err);
        localStorage.removeItem('token');
      });
  }, [propUser]);

  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
  const initials =
    (user.firstName?.[0] || "").toUpperCase() +
    (user.lastName?.[0] || "").toUpperCase();

  return (
    <aside className="sidebar">
      <div className="user-profile">
        <div className="profile-banner"></div>
        <div className="profile-avatar">
        <div className="avatar large">{initials}</div>
          <button className="edit-icon" aria-label="Edit profile">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
        </div>
       <h2 className="profile-name">{fullName}</h2>
      <p className="profile-email">{user.email}</p>

        <p className="profile-status">
          Logged in as: {user.role || "Member"}
        </p>

        <div className="profile-completion">
          <div className="completion-bar">
            <div className="completion-fill" style={{width: `${user.profileCompletion || 0}%`}}></div>
          </div>
          <span className="completion-text">{user.profileCompletion || 0}%</span>
        </div>
      </div>

      <div className="plan-info">
        <div className="plan-badge">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          <div>
            <div className="plan-label">Your Current Plan</div>
            <div className="plan-name">PRO</div>
          </div>
        </div>

        <div className="storage-info">
          <div className="storage-item">
            <div className="storage-icon used">B</div>
            <div>
              <span className="storage-value">0.00 bytes</span>
              <span className="storage-label">Used Space</span>
            </div>
          </div>
          <div className="storage-item">
            <div className="storage-icon free">B</div>
            <div>
              <span className="storage-value">8.00 GB</span>
              <span className="storage-label">Free Space</span>
            </div>
          </div>
        </div>

        <div className="trial-info">
          <p>Your free trial will expire on:</p>
          <p className="trial-date">4-Feb-2026</p>
        </div>

        <button className="manage-plan-btn">Manage my Plan</button>
      </div>

      <div style={{padding: '12px 16px'}}>
        <button
          onClick={() => {
            if (onLogout) onLogout();
            else {
              localStorage.removeItem('token');
              window.location.reload();
            }
          }}
          className="managebtn"
          style={{border:'none', color:'#fff'}}
        >
          Logout
        </button>
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">Your Trusted Appointees</h3>
        <button className="add-btn">
          <span className="add-icon">+</span>
          <span>Add a New Trusted Appointee</span>
        </button>
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">Your Expert Advisers</h3>
        <button className="add-btn">
          <span className="add-icon">+</span>
          <span>Add an New Expert Advisers</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;