import './config/env.js';   // 👈 MUST be first

import app from './app.js';
import connectDB from './config/db.js';

console.log('🔥 BACKEND RUNNING FROM:', process.cwd());

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
