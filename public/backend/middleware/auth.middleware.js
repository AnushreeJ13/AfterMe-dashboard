import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token' });

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.id) return res.status(401).json({ message: 'Invalid token' });

    // attach minimal user info to request
    req.user = { id: decoded.id };

    // optionally populate full user (non-blocking)
    try {
      const user = await User.findById(decoded.id).select('-password');
      if (user) req.user.profile = user;
    } catch (e) {
      // ignore
    }

    next();
  } catch (err) {
    console.error('verifyToken error', err.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
