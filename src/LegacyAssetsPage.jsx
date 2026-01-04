import React, { useState } from 'react';
import './LegacyAssetsPage.css';

const LegacyAssetsPage = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const categories = [
    {
      id: 'identification',
      title: 'Identification & Documents',
      description: 'Here you can upload important documents that identify you such as your passport or driver\'s license.',
      completed: 0,
      total: 7
    },
    {
      id: 'contacts',
      title: 'Important Contacts',
      description: 'In this section, you can choose to input the details of the most important people in your life.',
      completed: 0,
      total: 8
    },
    {
      id: 'devices',
      title: 'Key Devices',
      description: 'Do you have a phone, laptop or tablet? This is where you can safely store the access details.',
      completed: 0,
      total: 4
    },
    {
      id: 'legal',
      title: 'Legal',
      description: 'Here you can upload copies of your important legal documents such as your will, or other legal documents.',
      completed: 0,
      total: 6
    },
    {
      id: 'trusts',
      title: 'Trusts',
      description: 'Do you have a trust set up? This is the place where you can upload relevant documents and information.',
      completed: 0,
      total: 4
    },
    {
      id: 'tax',
      title: 'Tax',
      description: 'This is where you can upload all information relating to tax for you, your business, or your trust.',
      completed: 0,
      total: 5
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      description: 'Do you own or rent the property you live in? This is the place where you can upload the details.',
      completed: 0,
      total: 5
    },
    {
      id: 'insurance',
      title: 'Insurance',
      description: 'Here is where you can upload copies of all the different types of insurance policies you may have.',
      completed: 0,
      total: 8
    },
    {
      id: 'bank-currency',
      title: 'Bank & Currency Accounts',
      description: 'In this section, you can upload the details or your current, savings or even your cryptocurrency accounts.',
      completed: 0,
      total: 6
    },
    {
      id: 'investments',
      title: 'Investments',
      description: 'Do you have stocks, shares, or other investments? This is the place where you can upload the details.',
      completed: 0,
      total: 5
    },
    {
      id: 'valuable-possessions',
      title: 'Valuable Possessions',
      description: 'Do you own a classic car or a rare collection? Here is where you can upload the relevant information.',
      completed: 0,
      total: 5
    },
    {
      id: 'social-digital',
      title: 'Social & Digital',
      description: 'Here you can input credentials for your social and digital accounts, so they\'re available when needed.',
      completed: 0,
      total: 5
    },
    {
      id: 'funeral-wishes',
      title: 'Funeral Wishes',
      description: 'Have you planned your final farewell? Here you can share your wishes for when the time comes.',
      completed: 0,
      total: 4
    },
    {
      id: 'memory-lane',
      title: 'Memory Lane',
      description: 'In this section you can share your most precious thoughts and memories with your loved ones.',
      completed: 0,
      total: 6
    },
    {
      id: 'entrepreneur',
      title: 'Entrepreneur',
      description: 'Do you own a business? In this section you can upload helpful information for those left behind.',
      completed: 0,
      total: 8
    },
    {
      id: 'charity',
      title: 'Charity',
      description: 'Do you have any wishes / pledges to donate to charity, such as money or personal Possessions? Let your trusted appointees know here!',
      completed: 0,
      total: 5
    }
  ];

  const toggleSection = (id) => {
    setExpandedSections(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="legacy-assets-page">
      <div className="page-header">
        <h1 className="page-title">Legacy Assets Memories</h1>
        <p className="page-subtitle">My legacy assets memories</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-header-bg"></div>
            <div className="category-content">
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <div className="category-progress">
                <span className="progress-count">
                  {category.completed}/{category.total}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegacyAssetsPage;