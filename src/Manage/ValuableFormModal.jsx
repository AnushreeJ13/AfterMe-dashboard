import React, { useState } from "react";
import "./ValuableFormModal.css";

const ValuablePossessionsFormModal = ({ item, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState("files");
  const [files, setFiles] = useState([]);
  const [notes, setNotes] = useState('');
  const [itemDetails, setItemDetails] = useState({
    description: '',
    location: '',
    value: '',
    serialNumber: '',
    purchaseDate: ''
  });
  const [formError, setFormError] = useState('');

  const handleFileUpload = (e) => {
    const uploaded = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...uploaded]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setFormError('');
    
    if (!files || files.length === 0) {
      setFormError('Please upload at least one file (photo, receipt, certificate, etc.) before saving.');
      return;
    }

    if (!notes || notes.trim() === '') {
      setFormError('Please add notes about this valuable item.');
      return;
    }

    if (typeof onSave === 'function') {
      try { 
        onSave(item.id || 'possession'); 
      } catch(e) { 
        console.error(e); 
      }
    }

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content-large">
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">{item.title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Tabs */}
        <div className="modal-tabs">
          <button
            className={`tab-button ${activeTab === "files" ? "active" : ""}`}
            onClick={() => setActiveTab("files")}
          >
            Files & Photos
          </button>
          <button
            className={`tab-button ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Item Details
          </button>
          <button
            className={`tab-button ${activeTab === "notes" ? "active" : ""}`}
            onClick={() => setActiveTab("notes")}
          >
            Notes
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {activeTab === "files" && (
            <>
              <div className="upload-section">
                <label className="upload-box">
                  <span className="upload-icon">📸</span>
                  <span className="upload-text">Upload photos, receipts, certificates, or appraisal documents</span>
                  <span className="upload-hint">Click to upload or drag & drop files</span>
                  <input
                    type="file"
                    multiple
                    hidden
                    onChange={handleFileUpload}
                    accept="image/*,.pdf,.doc,.docx"
                  />
                </label>
                <p className="upload-tips">
                  <strong>Tip:</strong> Upload clear photos from multiple angles, receipts, insurance certificates, or appraisal documents.
                </p>
              </div>

              {files.length > 0 && (
                <div className="uploaded-files">
                  <h4 className="files-title">Uploaded Files ({files.length})</h4>
                  {files.map((file, index) => (
                    <div key={index} className="file-row">
                      <span className="file-icon">
                        {file.type.startsWith('image/') ? '🖼️' : '📄'}
                      </span>
                      <span className="file-name">{file.name}</span>
                      <span className="file-size">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === "details" && (
            <div className="details-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={itemDetails.description}
                    onChange={handleInputChange}
                    placeholder="e.g., Gold wedding ring, Classic car, Art collection"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">Location/Storage</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={itemDetails.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Home safe, Bank deposit box, Garage"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="value">Estimated Value</label>
                  <div className="input-with-icon">
                    <span className="currency-icon">$</span>
                    <input
                      type="text"
                      id="value"
                      name="value"
                      value={itemDetails.value}
                      onChange={handleInputChange}
                      placeholder="e.g., 5000"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="serialNumber">Serial/Model Number</label>
                  <input
                    type="text"
                    id="serialNumber"
                    name="serialNumber"
                    value={itemDetails.serialNumber}
                    onChange={handleInputChange}
                    placeholder="For vehicles, jewelry, or collectibles"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="purchaseDate">Purchase Date</label>
                  <input
                    type="date"
                    id="purchaseDate"
                    name="purchaseDate"
                    value={itemDetails.purchaseDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="insurance">Insurance Information</label>
                <textarea
                  id="insurance"
                  className="insurance-input"
                  placeholder="Insurance policy number, coverage details, company name..."
                  rows="3"
                />
              </div>
            </div>
          )}

          {activeTab === "notes" && (
            <div className="notes-section">
              <textarea
                className="notes-input"
                placeholder="Add important notes about this valuable possession..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="8"
              />
              <div className="notes-tips">
                <p><strong>What to include:</strong></p>
                <ul>
                  <li>How to access or locate this item</li>
                  <li>Special care instructions or handling</li>
                  <li>Sentimental value or family history</li>
                  <li>Maintenance requirements</li>
                  <li>Any known authenticity certificates</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {formError && (
          <div className="form-error-message">
            {formError}
          </div>
        )}

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={handleSubmit}>
            Save Valuable Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValuablePossessionsFormModal;
