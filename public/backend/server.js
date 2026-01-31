import './config/env.js'; // MUST be first

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

// Init app
const app = express();

// __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --------------------
// CORS (LOCAL + PROD SAFE)
// --------------------
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:5501",
  "https://after-me-login.vercel.app" // ❌ no trailing slash
];

app.use(cors({
  origin: function (origin, callback) {
    // allow Postman / server-to-server
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// --------------------
// Body parsers
// --------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------
// Static uploads
// --------------------
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --------------------
// Health check
// --------------------
app.get('/health', (req, res) => {
  res.json({
    status: "OK",
    service: "AfterMe API",
    time: new Date().toISOString()
  });
});

// --------------------
// Test email (DEV ONLY)
// --------------------
app.get('/test-resend', async (req, res) => {
  try {
    const { email, name } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email query param required"
      });
    }

    await sendWelcomeMail(email, name || "Test User");

    res.json({
      success: true,
      message: "✅ Test email sent"
    });
  } catch (err) {
    console.error("Email test error:", err);
    res.status(500).json({
      success: false,
      message: "Email test failed",
      error: err.message
    });
  }
});

// --------------------
// API ROUTES
// --------------------
app.use('/api/auth', authRoutes);
app.use('/api/docs', docRoutes);

// --------------------
// API 404 (NO WILDCARDS)
// --------------------
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found"
  });
});

// --------------------
// GLOBAL ERROR HANDLER
// --------------------
app.use((err, req, res, next) => {
  console.error("Server error:", err);

  if (err.name === "MulterError") {
    return res.status(400).json({ success: false, message: err.message });
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
    ...(process.env.NODE_ENV !== "production" && { error: err.message })
  });
});

// --------------------
// MongoDB
// --------------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

// --------------------
// Start server
// --------------------
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  });
});

// --------------------
// Unhandled promise rejection
// --------------------
process.on("unhandledRejection", err => {
  console.error("Unhandled Rejection:", err);
  if (process.env.NODE_ENV === "production") process.exit(1);
});
