import Document from '../models/Document.js';
import User from '../models/User.js';
import fs from 'fs';
import path from 'path';

export const uploadDocs = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token' });

    // token verification is handled elsewhere in real app; assume req.userId set by middleware
    // fallback: accept userId in body for this simple setup
    const userId = req.body.userId || (req.user && req.user.id);
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const { folder, subitem, metadata } = req.body;

    // debug logging
    console.log('uploadDocs called', {
      userFromReq: req.user && req.user.id,
      body: { folder, subitem },
      filesCount: (req.files || []).length
    });

    const files = (req.files || []).map(f => ({
      filename: f.filename || f.path,
      originalname: f.originalname,
      mimetype: f.mimetype,
      size: f.size,
      path: f.path
    }));

    const doc = await Document.create({ user: userId, folder, subitem, files, metadata: metadata ? JSON.parse(metadata) : {} });

    console.log('uploadDocs saved doc', { docId: doc._id });

    res.json({ message: 'Uploaded', doc });
  } catch (err) {
    console.error('uploadDocs error', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const listDocs = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token' });
    const token = authHeader.split(' ')[1];
    // For simplicity, allow client to pass userId query param if no token verification available
    const userId = req.query.userId || (req.user && req.user.id);
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    console.log('listDocs called', { userId });

    const docs = await Document.find({ user: userId }).sort({ createdAt: -1 }).lean();

    console.log('listDocs returning', { count: docs.length });

    res.json(docs);
  } catch (err) {
    console.error('listDocs error', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
