import React, { useState } from 'react';
import './TrustedAppointeesPage.css';

const TrustedAppointeesPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const folders = [
    'Identification & Documents',
    'Important Contacts',
    'Key Devices',
    'Legal',
    'Trusts',
    'Tax',
    'Real Estate',
    'Insurance',
    'Bank & Currency Accounts',
    'Investments',
    'Valuable Possessions',
    'Social & Digital',
    'Funeral Wishes',
    'Memory Lane',
    'Entrepreneur',
    'Charity'
  ];

  return (
    <div className="trusted-appointees-page">
      <div className="page-header">
        <h1 className="page-title">My Trusted Appointees</h1>
      </div>

      <div className="appointees-section">
        <div className="add-appointee-card">
          <div className="add-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <p className="add-appointee-text">Add a New Trusted<br/>Appointee</p>
        </div>
      </div>

      <div className="legacy-section">
        <h2 className="section-title">My Legacy Assets Memories</h2>
        <h3 className="section-subtitle">Folder</h3>

        <div className="folders-list">
          {folders.map((folder, index) => (
            <div key={index} className="folder-item">
              <svg className="folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span className="folder-name">{folder}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedAppointeesPage;