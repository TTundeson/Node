// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter with your email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail email address
    pass: 'your-password', // Replace with your Gmail password or an app-specific password
  },
});

// Define the email options
const mailOptions = {
  from: 'your-email@gmail.com', // Replace with your Gmail email address
  to: 'recipient-email@example.com', // Replace with the recipient's email address
  subject: 'Hello from Node.js',
  text: 'This is a test email from Node.js using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
