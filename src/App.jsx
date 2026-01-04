import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import LegacyAssetsPage from './LegacyAssetsPage';
import TrustedAppointeesPage from './TrustedAppointeesPage';
import './App.css';
import ExpertAdvisor from './ExpertAdvisor';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'manage':
        return <LegacyAssetsPage />;
      case 'trusted':
        return <TrustedAppointeesPage />;
      case 'expert':
        return <ExpertAdvisor />;
      case 'security':
        return <div className="coming-soon">Security - Coming Soon</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="app-body">
          <Sidebar />
          <main className="main-content">
            {renderContent()}
          </main>
        </div>
        <footer className="dashboard-footer">
          <p>Copyright © 2028 Life After Me B.V., All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;