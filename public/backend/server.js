import './config/env.js'; // 👈 MUST be first

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Email service
import { sendWelcomeMail } from './utils/emailService.js';

// Routes
import docRoutes from './routes/doc.routes.js';
import authRoutes from './routes/auth.routes.js';

// Initialize app
const app = express();

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --------------------
// Middleware
// --------------------
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:5501",
    "https://after-me-login.vercel.app/" // 👈 add your Vercel URL
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --------------------
// Health check
// --------------------
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'AfterMe API',
    time: new Date().toISOString()
  });
});

// --------------------
// Test email route (REMOVE IN PROD LATER)
// --------------------
app.get('/test-resend', async (req, res) => {
  try {
    const { email, name } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email query param required'
      });
    }

    await sendWelcomeMail(email, name || 'Test User');

    res.json({
      success: true,
      message: '✅ Test email sent'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Email test failed',
      error: err.message
    });
  }
});

// --------------------
// API Routes
// --------------------
app.use('/api/auth', authRoutes);
app.use('/api/docs', docRoutes);

// --------------------
// API 404 HANDLER ✅ FIXED (NO /api/*)
// --------------------
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// --------------------
// React production serve (ONLY if needed)
// --------------------
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '../client/build', 'index.html')
    );
  });
}

// --------------------
// Global error handler
// --------------------
app.use((err, req, res, next) => {
  console.error('Server error:', err);

  if (err.name === 'MulterError') {
    return res.status(400).json({ success: false, message: err.message });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }

  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors
    });
  }

  res.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV !== 'production' && { error: err.message })
  });
});

// --------------------
// MongoDB Connection
// --------------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB error:', err);
    process.exit(1);
  }
};

// --------------------
// Start Server
// --------------------
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
});

// --------------------
// Handle unhandled promise rejections
// --------------------
process.on('unhandledRejection', err => {
  console.error('Unhandled Rejection:', err);
  if (process.env.NODE_ENV === 'production') process.exit(1);
});
