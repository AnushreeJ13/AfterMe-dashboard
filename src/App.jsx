import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import LegacyAssetsPage from './LegacyAssetsPage';
import TrustedAppointeesPage from './TrustedAppointeesPage';
import IdentificationDocuments from './IdentificationDocuments';
import ImportantContacts from './ImportantContacts';
import './App.css';
import ExpertAdvisor from './ExpertAdvisor';
import Login from './login';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [user, setUser] = useState(null);

  const handleNavigateToCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const renderContent = () => {
    // If we're in the manage tab and a category is selected
    if (activeTab === 'manage' && selectedCategory) {
      switch(selectedCategory) {
        case 'identification':
          return <IdentificationDocuments onBack={handleBackToCategories} />;
        case 'contacts':
          return <ImportantContacts onBack={handleBackToCategories} />;
        // Add more cases for other categories as you build them
        default:
          return <div className="coming-soon">This category is under construction</div>;
      }
    }

    // Default tab rendering
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'manage':
        return <LegacyAssetsPage onNavigateToCategory={handleNavigateToCategory} />;
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedCategory(null); // Reset category when changing tabs
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error('No session');
        return res.json();
      })
      .then(data => setUser(data))
      .catch(() => {
        localStorage.removeItem('token');
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // If not authenticated, show login page full-screen
  if (!user) {
    return (
      <div className="App">
        <Login onLogin={(u) => setUser(u)} />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="app-container">
        <Header activeTab={activeTab} onTabChange={handleTabChange} />
        <div className="app-body">
          <Sidebar user={user} onLogout={handleLogout} />
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