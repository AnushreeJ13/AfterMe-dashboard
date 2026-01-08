import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Login from './login';
import LegacyAssetsPage from './Manage/LegacyAssetsPage';
import TrustedAppointeesPage from './Trusted/TrustedAppointeesPage';
import IdentificationDocuments from './Manage/IdentificationDocuments';
import ImportantContacts from './Manage/ImportantContacts';
import KeyDevices from './Manage/KeyDevices';
import Taxes from './Manage/Taxes';
import RealEstate from './Manage/RealEstate';
import Insurance from './Manage/Insurance';
import Financials from './Manage/Financials';
import Miscellaneous from './Manage/Miscellaneous';
import ExpertAdvisor from './Expert/ExpertAdvisor';
import Legal from './Manage/Legal';
import SocialDigital from './Manage/SocialDigital';
import FuneralWishes from './Manage/FuneralWishes';
import Trusts from './Manage/Trusts';
import BankAccounts from './Manage/BankAccounts'; // 👈 Add this import
import './App.css';
import Charity from './Manage/Charity';
const API = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [user, setUser] = useState(null);

  // on mount, try to load current user from token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch(`${API}/api/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        if (!res.ok) throw new Error('Not authenticated');
        return res.json();
      })
      .then(u => setUser(u))
      .catch(() => {
        localStorage.removeItem('token');
        setUser(null);
      });
  }, []);

  const handleNavigateToCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const renderContent = () => {
    // 👉 Manage tab + category selected
    if (activeTab === 'manage' && selectedCategory) {
      switch (selectedCategory) {
        case 'identification':
          return <IdentificationDocuments onBack={handleBackToCategories} />;

        case 'contacts':
          return <ImportantContacts onBack={handleBackToCategories} />;

        case 'devices':
          return <KeyDevices onBack={handleBackToCategories} />;

        case 'legal':
          return <Legal onBack={handleBackToCategories} />;

        case 'trusts':
          return <Trusts onBack={handleBackToCategories} />;

        case 'tax':
          return <Taxes onBack={handleBackToCategories} />;

        case 'real-estate':
          return <RealEstate onBack={handleBackToCategories} />;

        case 'insurance':
          return <Insurance onBack={handleBackToCategories} />;

        // 👇 Replace 'bank-currency' case
        case 'bank-currency':
          return <BankAccounts onBack={handleBackToCategories} />;

        case 'investments':
          return <Financials onBack={handleBackToCategories} />;

        case 'valuable-possessions':
        case 'social-digital':
          return <SocialDigital onBack={handleBackToCategories} />;
        case 'funeral-wishes':
          return <FuneralWishes onBack={handleBackToCategories} />;
        case 'memory-lane':
          return <Miscellaneous onBack={handleBackToCategories} />;
        case 'charity':
          return <Charity onBack={handleBackToCategories} />;

        default:
          return (
            <div className="coming-soon">
              This category is under construction
            </div>
          );
      }
    }

    // 👉 Top-level tab rendering
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;

      case 'manage':
        return (
          <LegacyAssetsPage
            onNavigateToCategory={handleNavigateToCategory}
          />
        );

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
    setSelectedCategory(null); // reset when switching tabs
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    // ensure UI reflects logout
    window.location.href = '/';
  };

  // If not authenticated, show the Login component
  if (!user) {
    return <Login onLogin={(u) => setUser(u)} />;
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
          <p>
            Copyright © 2028 Life After Me B.V., All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
