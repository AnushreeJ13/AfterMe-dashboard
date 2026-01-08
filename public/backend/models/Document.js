import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  folder: String,
  subitem: String,
  files: [
    {
      filename: String,
      originalname: String,
      mimetype: String,
      size: Number,
      path: String
    }
  ],
  metadata: Object,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Document', documentSchema);
