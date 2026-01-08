import React, { useState } from 'react';
import './Charity.css';
import CharityFormModal from './charityformmodal';

const Charity = ({ onBack }) => {
  const [selectedCharity, setSelectedCharity] = useState(null);

  const [charities, setCharities] = useState([
    {
      id: 'india',
      title: 'India',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="32" cy="32" r="20" />
          <path d="M32 12 L32 52" />
          <path d="M12 32 L52 32" />
          <circle cx="32" cy="32" r="8" fill="currentColor" />
          <path d="M32 20 L36 28 L44 28 L38 34 L40 42 L32 36 L24 42 L26 34 L20 28 L28 28 Z" fill="currentColor" />
        </svg>
      ),
      count: 0
    },
    {
      id: 'miscellaneous',
      title: 'Miscellaneous',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="12" y="12" width="18" height="18" rx="2" />
          <rect x="34" y="12" width="18" height="18" rx="2" />
          <rect x="12" y="34" width="18" height="18" rx="2" />
          <rect x="34" y="34" width="18" height="18" rx="2" />
          <circle cx="21" cy="21" r="3" fill="currentColor" />
          <circle cx="43" cy="21" r="3" fill="currentColor" />
          <circle cx="21" cy="43" r="3" fill="currentColor" />
          <circle cx="43" cy="43" r="3" fill="currentColor" />
        </svg>
      ),
      count: 0
    }
  ]);

  const handleSaveCharity = (charityId) => {
    setCharities(prev => 
      prev.map(c => 
        c.id === charityId 
          ? { ...c, count: (c.count || 0) + 1 } 
          : c
      )
    );
  };

  const handleCharityClick = (charity) => {
    setSelectedCharity(charity);
  };

  const handleCloseModal = () => {
    setSelectedCharity(null);
  };

  return (
    <div className="key-devices-page">
      <div className="page-header">
        <h1 className="page-title">Legacy Assets Memories</h1>
        <p className="breadcrumb">
          <span className="breadcrumb-link" onClick={onBack} style={{ cursor: 'pointer' }}>
            My legacy assets memories
          </span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Charity</span>
        </p>
      </div>

      <div className="devices-grid">
        {charities.map((charity) => (
          <div 
            key={charity.id} 
            className="device-card"
            onClick={() => handleCharityClick(charity)}
          >
            <div className="device-icon-circle">
              {charity.icon}
            </div>
            <h3 className="device-title">{charity.title}</h3>
            <div className="device-count">
              <span className="count-badge">{charity.count} documents</span>
            </div>
          </div>
        ))}
      </div>

      {selectedCharity && (
        <CharityFormModal 
          charity={selectedCharity}
          onClose={handleCloseModal}
          onSave={handleSaveCharity}
        />
      )}
    </div>
  );
};

export default Charity;