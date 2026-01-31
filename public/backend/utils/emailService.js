import { Resend } from 'resend';

// Initialize Resend - will be null if API key not set
let resend = null;

if (process.env.RESEND_API_KEY) {
  try {
    resend = new Resend(process.env.RESEND_API_KEY);
    console.log('✅ Resend initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize Resend:', error.message);
  }
} else {
  console.warn('⚠️ RESEND_API_KEY not set. Emails will not be sent.');
}

export const sendWelcomeMail = async (to, name) => {
  // If Resend is not configured, skip gracefully
  if (!resend) {
    console.log('⚠️ Skipping email: Resend not configured (check RESEND_API_KEY)');
    return null;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'After Me <onboarding@resend.dev>', // You can change this later to your domain
      to: to,
      replyTo: 'support@afterme.app',
      subject: `Welcome to After Me 🤍`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to After Me</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              padding: 30px;
              background: #f9f9f9;
              border-radius: 0 0 10px 10px;
            }
            .welcome-text {
              font-size: 18px;
              margin-bottom: 20px;
            }
            .button {
              display: inline-block;
              background: #4F46E5;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              margin: 20px 0;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Welcome to After Me</h1>
            <p>Your digital legacy organizer</p>
          </div>
          <div class="content">
            <h2>Hello ${name}!</h2>
            <p class="welcome-text">
              Thank you for creating an account with <strong>After Me</strong>. 
              We're excited to help you organize and secure your important documents 
              and information in one safe place.
            </p>
            
            <p>With your account, you can:</p>
            <ul>
              <li>Store and organize important documents</li>
              <li>Manage contacts and emergency information</li>
              <li>Secure your digital legacy</li>
              <li>Share information with trusted contacts</li>
            </ul>
            
            <a href="https://yourapp.com/dashboard" class="button">Go to Dashboard</a>
            
            <p>If you have any questions, simply reply to this email. We're here to help!</p>
            
            <div class="footer">
              <p>Best regards,<br>The After Me Team</p>
              <p>&copy; ${new Date().getFullYear()} After Me. All rights reserved.</p>
              <p><small>This is an automated message, please do not reply directly to this email.</small></p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `Welcome ${name} to After Me!\n\nYour account has been created successfully.\n\nThank you for joining us!\n\n- Team After Me`,
    });

    if (error) {
      console.error('❌ Resend API error:', error);
      return null;
    }

    console.log('✅ Welcome email sent via Resend. Email ID:', data?.id);
    return data;
  } catch (error) {
    console.error('❌ Email sending error:', error);
    return null;
  }
};

// Additional email functions you might need
export const sendPasswordResetMail = async (to, resetLink) => {
  if (!resend) return null;
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'After Me <security@resend.dev>',
      to,
      subject: 'Reset Your After Me Password',
      html: `
        <h2>Password Reset Request</h2>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
      `
    });
    
    return !error;
  } catch (error) {
    console.error('Password reset email error:', error);
    return false;
  }
};