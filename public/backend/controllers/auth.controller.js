import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendWelcomeMail } from '../utils/emailService.js'; // Updated import

/* ===================== SIGNUP ===================== */
export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: 'Email and password are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: 'Please enter a valid email address' 
      });
    }

    // existing user check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ 
        success: false,
        message: 'User already exists with this email' 
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      firstName: firstName?.trim() || '',
      lastName: lastName?.trim() || '',
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      profileCompletion: 10 // Start with 10% for signing up
    });

    // ✅ Send response immediately
    res.status(201).json({ 
      success: true,
      message: 'User created successfully',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });

    // 📧 SEND WELCOME EMAIL ASYNC (NON-BLOCKING)
    // Don't await - send in background
    sendWelcomeMail(email, firstName || 'there')
      .then(result => {
        if (result) {
          console.log('✅ Welcome email sent to:', email);
        } else {
          console.log('⚠️ Welcome email not sent (but signup succeeded)');
        }
      })
      .catch(err => {
        console.log('⚠️ Email sending error (non-critical):', err.message);
      });

  } catch (err) {
    console.error('Signup error:', err.message);
    
    // Duplicate key error
    if (err.code === 11000) {
      return res.status(409).json({ 
        success: false,
        message: 'User already exists with this email' 
      });
    }
    
    // Validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ 
        success: false,
        message: 'Validation error',
        errors 
      });
    }

    if (!res.headersSent) {
      res.status(500).json({ 
        success: false,
        message: 'Server error during signup' 
      });
    }
  }
};

/* ===================== LOGIN ===================== */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: 'Email and password are required' 
      });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid email or password" 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid email or password" 
      });
    }

    const token = jwt.sign(
      { 
        id: user._id,
        email: user.email 
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profileCompletion: user.profileCompletion || 0
      }
    });

  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ 
      success: false,
      message: "Server error during login" 
    });
  }
};

/* ===================== GET USER PROFILE ===================== */
export const getMe = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ 
        success: false,
        message: "No authorization token provided" 
      });
    }

    const token = authHeader.split(" ")[1]; // Bearer <token>
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: "Token not found in authorization header" 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findById(decoded.id).select("-password -__v");
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: "User not found" 
      });
    }

    res.json({
      success: true,
      user
    });

  } catch (err) {
    console.error('GetMe error:', err.message);
    
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        success: false,
        message: "Invalid or expired token" 
      });
    }
    
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        success: false,
        message: "Token expired" 
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};