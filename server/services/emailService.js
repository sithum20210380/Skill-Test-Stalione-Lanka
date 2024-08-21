const nodemailer = require('nodemailer');
const Email = require('../models/Email');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-gmail-username@gmail.com',
    pass: 'your-gmail-password',
  },
});

exports.sendEmail = async (to, subject, message) => {
  try {
    // Send the email using SMTP
    await transporter.sendMail({
      from: 'your-gmail-username@gmail.com',
      to,
      subject,
      text: message,
    });

    // Store the sent email in the database
    const email = await Email.create({ to, subject, message });
    return email;
  } catch (error) {
    throw new Error('Error sending email');
  }
};

exports.getSentEmails = async () => {
  try {
    const sentEmails = await Email.findAll();
    return sentEmails;
  } catch (error) {
    throw new Error('Error fetching sent emails');
  }
};