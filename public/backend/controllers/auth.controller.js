import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendWelcomeMail } from '../utils/mailer.js';

/* ===================== SIGNUP ===================== */
export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields required' });
    }

    // existing user check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    // ✅ SEND RESPONSE ONCE
    res.status(201).json({ message: 'User created successfully' });

    // 📧 SEND MAIL (NON-BLOCKING, SAFE)
    try {
      await sendWelcomeMail(email, firstName || 'there');
      console.log('📧 Welcome mail sent');
    } catch (mailErr) {
      console.error('❌ Mail failed:', mailErr.message);
    }

    return; // 🔴 VERY IMPORTANT

  } catch (err) {
    console.error('Signup error:', err.message);

    if (!res.headersSent) {
      res.status(500).json({ message: 'Server error' });
    }
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ RETURN TOKEN (NO COOKIE)
    res.json({
      token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getMe = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token" });
    }

    const token = authHeader.split(" ")[1]; // Bearer <token>

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
