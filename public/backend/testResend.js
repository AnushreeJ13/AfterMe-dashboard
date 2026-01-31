// testResend.js - Run this to check Resend
import dotenv from 'dotenv';
dotenv.config();

console.log('🔍 Checking Resend configuration...');
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length || 0);
console.log('RESEND_API_KEY starts with:', process.env.RESEND_API_KEY?.substring(0, 10));

if (process.env.RESEND_API_KEY) {
  console.log('✅ RESEND_API_KEY is set in .env');
} else {
  console.log('❌ RESEND_API_KEY NOT FOUND in .env');
  console.log('Make sure .env file contains: RESEND_API_KEY=re_...');
}

// Check MongoDB connection too
console.log('\n🔍 MongoDB URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');