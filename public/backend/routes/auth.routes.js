import express from 'express';
import { login, signup, getMe } from '../controllers/auth.controller.js';
//                                    👆👆 ADD THIS

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/me', getMe);   // ✅ NOW IT EXISTS

export default router;