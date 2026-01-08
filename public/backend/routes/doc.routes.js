import express from 'express';
import multer from 'multer';
import { uploadDocs, listDocs } from '../controllers/doc.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// simple disk storage to public/uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './public/uploads';
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/upload', verifyToken, upload.array('files'), uploadDocs);
router.get('/', verifyToken, listDocs);

export default router;
