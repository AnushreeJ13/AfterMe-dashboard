import React, { useState, useEffect } from 'react';
import './TrustedAppointeesPage.css';

const TrustedAppointeesPage = () => {
  const [expandedFolders, setExpandedFolders] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [currentFolder, setCurrentFolder] = useState('');
  const [currentSubitem, setCurrentSubitem] = useState('');
  const [formData, setFormData] = useState({});

  // CONFIGURATION: Define questions for each subitem
  const formQuestions = {
    'Passport/ ID card': {
      step1: [
        { name: 'files', label: 'Files', type: 'file' },
        { name: 'notes', label: 'Notes', type: 'textarea', placeholder: 'write your notes here...' },
        { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'First Name' },
        { name: 'surname', label: 'Surname', type: 'text', placeholder: 'Surname' },
        { name: 'expiryDate', label: 'Expiry Date', type: 'date', placeholder: 'dd/mm/yyyy' },
        { name: 'placeOfIssue', label: 'Place of Issue', type: 'text', placeholder: 'Place of Issue' },
        { name: 'idNumber', label: 'Passport / ID Card Number', type: 'text', placeholder: '12345' },
        { name: 'location', label: 'Location of Passport', type: 'text', placeholder: 'Location of Passport' }
      ],
      step2: [
        { name: 'documentName', label: 'Give this document a name! *', type: 'text', placeholder: 'write your response here...', required: true },
        { name: 'description', label: 'Give a short description', type: 'textarea', placeholder: 'write your description here...' }
      ]
    },
    "Driver's Licence": {
      step1: [
        { name: 'files', label: 'Files', type: 'file' },
        { name: 'notes', label: 'Notes', type: 'textarea', placeholder: 'write your notes here...' },
        { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'First Name' },
        { name: 'surname', label: 'Surname', type: 'text', placeholder: 'Surname' },
         { name: 'expiryDate', label: 'Expiry Date', type: 'date', placeholder: 'dd/mm/yyyy' },
        { name: 'placeOfIssue', label: 'Place of Issue', type: 'text', placeholder: 'Place of Issue' },
        { name: 'licenceNumber', label: 'Licence Number', type: 'text', placeholder: 'Licence Number' }
      ],
      step2: [
        { name: 'documentName', label: 'Give this document a name! *', type: 'text', placeholder: 'write your response here...', required: true },
        { name: 'description', label: 'Give a short description', type: 'textarea', placeholder: 'write your description here...' }
      ]
    },
    "Birth Certificate": {
      step1: [
        { name: 'files', label: 'Files', type: 'file' },
        { name: 'notes', label: 'Notes', type: 'textarea', placeholder: 'write your notes here...' },
        { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'First Name' },
        { name: 'surname', label: 'Surname', type: 'text', placeholder: 'Surname' },
        { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', placeholder: 'dd/mm/yyyy' },
        { name: 'placeOfIssue', label: 'Place of Issue', type: 'text', placeholder: 'Place of Issue' },
        { name: 'documentNumber', label: 'Document Number', type: 'text', placeholder: 'Document Number' },
        { name: 'locationOfBirthCertificate', label: 'Location of Birth Certificate', type: 'text', placeholder: 'Location of Birth Certificate' }
      ],
      step2: [
        { name: 'documentName', label: 'Give this document a name! *', type: 'text', placeholder: 'write your response here...', required: true },
        { name: 'description', label: 'Give a short description', type: 'textarea', placeholder: 'write your description here...' }
      ]
    },
     "Marriage/civil union certificate": {
      step1: [
        { name: 'files', label: 'Files', type: 'file' },
        { name: 'notes', label: 'Notes', type: 'textarea', placeholder: 'write your notes here...' },
        { name: 'firstNameOfFirstName', label: 'First Name of First Name', type: 'text', placeholder: 'First Name' },
        { name: 'surnameOfFirstName', label: 'Surname of First Name', type: 'text', placeholder: 'Surname' },
        { name: 'firstNameOfSecondName', label: 'First Name of Second Name', type: 'text', placeholder: 'First Name' },
        { name: 'surnameOfSecondName', label: 'Surname of Second Name', type: 'text', placeholder: 'Surname' },
        { name: 'dateOfMarriage/CivilUnion', label: 'Date of Marriage/Civil Union', type: 'date', placeholder: 'dd/mm/yyyy' },
        { name: 'placeOfMarriage/CivilUnion', label: 'Place of Marriage/Civil Union', type: 'text', placeholder: 'Place of Marriage/Civil Union' },
        { name: 'documentNumber', label: 'Document Number', type: 'text', placeholder: 'Document Number' },
        { name: 'locationOfMarriage/CivilUnionCertificate', label: 'Location of Marriage/Civil Union Certificate', type: 'text', placeholder: 'Location of Marriage/Civil Union Certificate' }
      ],
      step2: [
        { name: 'documentName', label: 'Give this document a name! *', type: 'text', placeholder: 'write your response here...', required: true },
        { name: 'description', label: 'Give a short description', type: 'textarea', placeholder: 'write your description here...' }
      ]
    },
    "Divorce certificate": {
      step1: [
        { name: 'files', label: 'Files', type: 'file' },
        { name: 'notes', label: 'Notes', type: 'textarea', placeholder: 'write your notes here...' },
        { name: 'firstNameOfFirstName', label: 'First Name of First Name', type: 'text', placeholder: 'First Name' },
        { name: 'surnameOfFirstName', label: 'Surname of First Name', type: 'text', placeholder: 'Surname' },
        { name: 'firstNameOfSecondName', label: 'First Name of Second Name', type: 'text', placeholder: 'First Name' },
        { name: 'surnameOfSecondName', label: 'Surname of Second Name', type: 'text', placeholder: 'Surname' },
        { name: 'dateOfDivorce/Annulment', label: 'Date of Divorce/Annulment', type: 'date', placeholder: 'dd/mm/yyyy' },
        { name: 'documentNumber', label: 'Document Number', type: 'text', placeholder: 'Document Number' },
        { name: 'locationOfDivorceCertificate', label: 'Location of Divorce Certificate', type: 'text', placeholder: 'Location of Divorce Certificate' }
      ],
      step2: [
        { name: 'documentName', label: 'Give this document a name! *', type: 'text', placeholder: 'write your response here...', required: true },
        { name: 'description', label: 'Give a short description', type: 'textarea', placeholder: 'write your description here...' }
      ]
    },
    "Medical records": {
      step1: [
        { name: 'files', label: 'Files', type: 'file' },
        { name: 'notes', label: 'Notes', type: 'textarea', placeholder: 'write your notes here...' }
      ],
      step2: [
        { name: 'documentName', label: 'Give this document a name! *', type: 'text', placeholder: 'write your response here...', required: true },
        { name: 'description', label: 'Give a short description', type: 'textarea', placeholder: 'write your description here...' }
      ]
    },
    "Miscellaneous": {
      step1: [
        { name: 'files', label: 'Files', type: 'file' },
        { name: 'notes', label: 'Notes', type: 'textarea', placeholder: 'write your notes here...' }
      ],
      step2: [
        { name: 'documentName', label: 'Give this document a name! *', type: 'text', placeholder: 'write your response here...', required: true },
        { name: 'description', label: 'Give a short description', type: 'textarea', placeholder: 'write your description here...' }
      ]
    },

    // Add more subitems with their questions here
  };

  // Stored documents
  const [documents, setDocuments] = useState({
    'Identification & Documents': {
      'Passport/ ID card': [],
      "Driver's Licence": [],
      'Birth Certificate': [],
      'Marriage/civil union certificate': [],
      'Divorce certificate': [],
      'Medical records': [],
      'Miscellaneous': []
    }
  });

  // load documents from backend for current user
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('/api/docs', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(list => {
        const grouped = {};
        (list || []).forEach(d => {
          grouped[d.folder] = grouped[d.folder] || {};
          grouped[d.folder][d.subitem] = grouped[d.folder][d.subitem] || [];
          grouped[d.folder][d.subitem].push(d);
        });
        setDocuments(prev => ({ ...prev, ...grouped }));
      })
      .catch(() => {});
  }, []);

  const folders = {
    'Identification & Documents': [
      'Passport/ ID card',
      "Driver's Licence",
      'Birth Certificate',
      'Marriage/civil union certificate',
      'Divorce certificate',
      'Medical records',
      'Miscellaneous'
    ],
    'Important Contacts': ['Spouse or partner', 'Closest Friends', 'Lawyer', 'Accountant'],
    'Key Devices': [],
    'Legal': [],
    'Trusts': [],
    'Tax': [],
    'Real Estate': [],
    'Insurance': [],
    'Bank & Currency Accounts': [],
    'Investments': [],
    'Valuable Possessions': [],
    'Social & Digital': [],
    'Funeral Wishes': [],
    'Memory Lane': [],
    'Entrepreneur': [],
    'Charity': []
  };

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  const openAddModal = (folder, subitem) => {
    setCurrentFolder(folder);
    setCurrentSubitem(subitem);
    setModalStep(1);
    setShowModal(true);
    setFormData({});
  };

  const getCurrentQuestions = () => {
    const config = formQuestions[currentSubitem];
    if (!config) return [];
    return config[`step${modalStep}`] || [];
  };

  const getTotalSteps = () => {
    const config = formQuestions[currentSubitem];
    if (!config) return 1;
    return Object.keys(config).length;
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (modalStep < getTotalSteps()) {
      setModalStep(modalStep + 1);
    }
  };

  const handleBack = () => {
    if (modalStep > 1) {
      setModalStep(modalStep - 1);
    }
  };

  const handleSave = () => {
    // Build FormData for files + metadata
    const fd = new FormData();
    fd.append('folder', currentFolder);
    fd.append('subitem', currentSubitem);
    fd.append('metadata', JSON.stringify(formData));

    // attach actual files from all file inputs in the modal
    const fileInputs = Array.from(document.querySelectorAll('input[type="file"]'));
    fileInputs.forEach(input => {
      if (input.files && input.files.length > 0) {
        Array.from(input.files).forEach(f => fd.append('files', f));
      }
    });

    const token = localStorage.getItem('token');

    fetch('/api/docs/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: fd
    })
      .then(res => res.json())
      .then(result => {
        if (result && result.doc) {
          setDocuments(prev => ({
            ...prev,
            [currentFolder]: {
              ...prev[currentFolder],
              [currentSubitem]: [...(prev[currentFolder]?.[currentSubitem] || []), result.doc]
            }
          }));
        }
      })
      .catch(err => console.error(err));

    setShowModal(false);
    setModalStep(1);
    setFormData({});
  };

  const handleDelete = (folder, subitem, docId) => {
    setDocuments(prev => ({
      ...prev,
      [folder]: {
        ...prev[folder],
        [subitem]: prev[folder][subitem].filter(doc => doc.id !== docId)
      }
    }));
  };

  const handleFileChange = (name, event) => {
    const files = Array.from(event.target.files);
    const fileNames = files.map(f => f.name);
    setFormData(prev => ({
      ...prev,
      [name]: [...(prev[name] || []), ...fileNames]
    }));
  };

  const removeFile = (name, index) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].filter((_, i) => i !== index)
    }));
  };

  const renderFormField = (question) => {
    const { name, label, type, placeholder, required } = question;

    return (
      <div key={name} className="form-field">
        <label className="form-label">
          {label}
          {required && ' *'}
        </label>
        {type === 'file' && (
          <div>
            <input
              type="file"
              id={`file-${name}`}
              multiple
              onChange={(e) => handleFileChange(name, e)}
              style={{ display: 'none' }}
            />
            <label htmlFor={`file-${name}`} className="file-upload">
              <div className="file-upload-icon">+</div>
            </label>
            {formData[name]?.length > 0 && (
              <div className="uploaded-files">
                {formData[name].map((fileName, index) => (
                  <div key={index} className="uploaded-file-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                    <span className="file-name">{fileName}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(name, index)}
                      className="remove-file-btn"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {type === 'textarea' && (
          <textarea
            value={formData[name] || ''}
            onChange={(e) => handleInputChange(name, e.target.value)}
            placeholder={placeholder}
            className="form-textarea"
          />
        )}
        {type === 'text' && (
          <input
            type="text"
            value={formData[name] || ''}
            onChange={(e) => handleInputChange(name, e.target.value)}
            placeholder={placeholder}
            className="form-input"
          />
        )}
        {type === 'date' && (
          <input
            type="date"
            value={formData[name] || ''}
            onChange={(e) => handleInputChange(name, e.target.value)}
            placeholder={placeholder}
            className="form-input"
          />
        )}
      </div>
    );
  };

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
          {Object.entries(folders).map(([folderName, subitems]) => (
            <div key={folderName}>
              <div
                onClick={() => subitems.length > 0 && toggleFolder(folderName)}
                className="folder-item"
                style={{ cursor: subitems.length > 0 ? 'pointer' : 'default' }}
              >
                <svg className="folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {expandedFolders[folderName] ? (
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  ) : (
                    <>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </>
                  )}
                </svg>
                <span className="folder-name">{folderName}</span>
              </div>

              {expandedFolders[folderName] && subitems.length > 0 && (
                <div className="subitems-container">
                  {subitems.map((subitem) => (
                    <div key={subitem} className="subitem-section">
                      <div className="subitem-header">
                        <svg className="subitem-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span className="subitem-name">{subitem}</span>
                      </div>

                      {documents[folderName]?.[subitem]?.map((doc, idx) => (
                        <div key={doc._id || doc.id || `${folderName}-${subitem}-${idx}`} className="document-item">
                          <svg className="document-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                          </svg>
                          <span className="document-name">
                            {doc.documentName || `${subitem} Document`}
                          </span>
                          <button
                            onClick={() => handleDelete(folderName, subitem, doc.id)}
                            className="delete-button"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                          </button>
                        </div>
                      ))}

                      <button
                        onClick={() => openAddModal(folderName, subitem)}
                        className="add-button"
                      >
                        Add
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{currentSubitem}</h3>
              <button onClick={() => setShowModal(false)} className="modal-close">×</button>
            </div>

            <div className="modal-body">
              {getCurrentQuestions().map(question => renderFormField(question))}
            </div>

            <div className="modal-footer">
              {modalStep > 1 && (
                <button onClick={handleBack} className="button-secondary">
                  Back
                </button>
              )}
              {modalStep < getTotalSteps() ? (
                <button onClick={handleNext} className="button-primary">
                  Next
                </button>
              ) : (
                <button onClick={handleSave} className="button-primary">
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrustedAppointeesPage;