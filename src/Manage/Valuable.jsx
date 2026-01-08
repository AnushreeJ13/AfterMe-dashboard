import React, { useState } from 'react'; // Make sure useState is imported
import './Valuable.css';
import ValuableFormModal from './ValuableFormModal';

const Valuable = ({ onBack }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [possessions, setPossessions] = useState([ // Add this state definition
    {
      id: 'vehicles',
      title: 'Vehicle(s)',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="14" y="26" width="36" height="16" rx="2" />
          <path d="M14 26 L18 18 L46 18 L50 26" />
          <circle cx="22" cy="42" r="4" />
          <circle cx="42" cy="42" r="4" />
          <rect x="24" y="22" width="7" height="8" />
          <rect x="33" y="22" width="7" height="8" />
          <line x1="20" y1="32" x2="44" y2="32" strokeWidth="2" />
          <path d="M18 48 L22 48" strokeWidth="2" />
          <path d="M42 48 L46 48" strokeWidth="2" />
          <rect x="28" y="34" width="8" height="2" rx="1" />
        </svg>
      ),
      count: 0,
      colorType: 'vehicle'
    },
    {
      id: 'jewellery',
      title: 'Jewellery',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="32" cy="32" r="18" />
          <circle cx="32" cy="24" r="4" />
          <path d="M28 28 L36 36" strokeWidth="2" />
          <path d="M36 28 L28 36" strokeWidth="2" />
          <circle cx="24" cy="32" r="3" />
          <circle cx="40" cy="32" r="3" />
          <circle cx="32" cy="40" r="3" />
          <path d="M28 20 L36 20" strokeWidth="2" />
          <path d="M20 28 L20 36" strokeWidth="2" />
          <path d="M44 28 L44 36" strokeWidth="2" />
          <path d="M28 44 L36 44" strokeWidth="2" />
        </svg>
      ),
      count: 0,
      colorType: 'jewellery'
    },
    {
      id: 'collections',
      title: 'Collections',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="16" y="16" width="32" height="32" rx="4" />
          <rect x="22" y="22" width="8" height="8" rx="1" />
          <rect x="34" y="22" width="8" height="8" rx="1" />
          <rect x="22" y="34" width="8" height="8" rx="1" />
          <rect x="34" y="34" width="8" height="8" rx="1" />
          <line x1="26" y1="22" x2="26" y2="30" strokeWidth="2" />
          <line x1="38" y1="22" x2="38" y2="30" strokeWidth="2" />
          <line x1="22" y1="26" x2="30" y2="26" strokeWidth="2" />
          <line x1="34" y1="26" x2="42" y2="26" strokeWidth="2" />
          <circle cx="32" cy="48" r="4" />
          <line x1="32" y1="44" x2="32" y2="52" strokeWidth="2" />
          <line x1="28" y1="48" x2="36" y2="48" strokeWidth="2" />
        </svg>
      ),
      count: 0,
      colorType: 'collections'
    },
    {
      id: 'safe-deposits',
      title: 'Safe / Safe Deposits',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="14" y="14" width="36" height="36" rx="4" />
          <circle cx="32" cy="32" r="10" />
          <circle cx="32" cy="32" r="6" />
          <line x1="32" y1="22" x2="32" y2="42" strokeWidth="3" />
          <line x1="22" y1="32" x2="42" y2="32" strokeWidth="3" />
          <rect x="22" y="50" width="20" height="4" rx="1" />
          <rect x="26" y="54" width="12" height="2" rx="1" />
          <path d="M28 18 L36 18" strokeWidth="2" />
          <path d="M28 46 L36 46" strokeWidth="2" />
        </svg>
      ),
      count: 0,
      colorType: 'safe'
    },
    {
      id: 'miscellaneous-possessions',
      title: 'Miscellaneous',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="16" y="16" width="32" height="32" rx="4" />
          <rect x="22" y="22" width="8" height="8" rx="1" />
          <rect x="34" y="22" width="8" height="8" rx="1" />
          <rect x="22" y="34" width="8" height="8" rx="1" />
          <rect x="34" y="34" width="8" height="8" rx="1" />
          <line x1="26" y1="22" x2="26" y2="30" strokeWidth="2" />
          <line x1="38" y1="22" x2="38" y2="30" strokeWidth="2" />
          <line x1="22" y1="26" x2="30" y2="26" strokeWidth="2" />
          <line x1="34" y1="26" x2="42" y2="26" strokeWidth="2" />
          <circle cx="32" cy="48" r="3" />
          <path d="M32 45 L32 51" strokeWidth="2" />
          <path d="M29 48 L35 48" strokeWidth="2" />
        </svg>
      ),
      count: 0,
      colorType: 'misc'
    }
  ]);

  const handleSavePossession = (possessionId) => {
    setPossessions(prev => prev.map(pos => 
      pos.id === possessionId ? { ...pos, count: (pos.count || 0) + 1 } : pos
    ));
  };

  const handleItemClick = (possession) => {
    setSelectedItem(possession);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="key-devices-page">
      <div className="page-header">
        <h1 className="page-title">Legacy Assets Memories</h1>
        <p className="breadcrumb">
          <span 
            className="breadcrumb-link" 
            onClick={onBack} 
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && onBack()}
          >
            My legacy assets memories
          </span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Valuable Possessions</span>
        </p>
      </div>

      <div className="devices-grid">
        {possessions.map((possession, index) => (
          <div 
            key={possession.id} 
            className="device-card"
            data-possession-type={possession.colorType}
            onClick={() => handleItemClick(possession)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleItemClick(possession)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="device-icon-circle">
              {possession.icon}
            </div>
            <h3 className="device-title">{possession.title}</h3>
            <div className="device-count">
              <span className="count-badge">
                {possession.count} {possession.count === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <ValuableFormModal 
          item={selectedItem}
          onClose={handleCloseModal}
          onSave={handleSavePossession}
        />
      )}

      {possessions.every(pos => pos.count === 0) && (
        <div className="empty-state-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="9" y1="9" x2="15" y2="15" />
            <line x1="15" y1="9" x2="9" y2="15" />
          </svg>
          <p>No valuable possessions added yet. Click on any category to add your first item.</p>
        </div>
      )}
    </div>
  );
};

export default Valuable;
