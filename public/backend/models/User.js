import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "Member"
  },
  profileCompletion: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('User', userSchema);
