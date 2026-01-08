import '../config/env.js';
import nodemailer from 'nodemailer';

// Choose transport dynamically: prefer SendGrid if SENDGRID_API_KEY is set,
// otherwise fallback to SMTP credentials (EMAIL_USER / EMAIL_PASS).
let transporter = null;
const makeTransport = () => {
  if (process.env.SENDGRID_API_KEY) {
    // Using SendGrid SMTP relay
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });
  }

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    // Gmail (recommended to use App Password)
    return nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: { rejectUnauthorized: false }
    });
  }

  return null;
};

transporter = makeTransport();

const logTransportStatus = async () => {
  if (!transporter) {
    console.warn('⚠️ Mailer disabled: no SENDGRID_API_KEY or EMAIL_USER/EMAIL_PASS configured');
    return;
  }

  try {
    await transporter.verify();
    console.log('✅ Mail server ready');
  } catch (err) {
    console.error('❌ Mail server verify failed:', err && err.message ? err.message : err);
  }
};

logTransportStatus();

export const sendWelcomeMail = async (to, name) => {
  if (!transporter) {
    console.warn('Skipping sendWelcomeMail: mail transporter not configured');
    return null;
  }

  const mailOptions = {
    from: `"After Me" <${process.env.EMAIL_USER || 'no-reply@afterme.app'}>`,
    to,
    subject: 'Welcome to After Me 🤍',
    html: `
      <h2>Welcome ${name}!</h2>
      <p>Your account has been created successfully.</p>
      <p>– Team After Me</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✉️ sendWelcomeMail sent:', info && info.messageId ? info.messageId : info);
    return info;
  } catch (err) {
    console.error('❌ sendWelcomeMail error:', err && err.message ? err.message : err);
    throw err;
  }
};

// Log which credential method is configured (do not log secrets)
console.log('MAIL: using', process.env.SENDGRID_API_KEY ? 'SendGrid' : (process.env.EMAIL_USER ? 'SMTP (EMAIL_USER)' : 'none'));
