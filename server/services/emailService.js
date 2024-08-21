const nodemailer = require('nodemailer');
const Email = require('../models/Email');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'sithum18raveesha@gmail.com',
    pass: 'qxcpoyyvhhnfsmib',
  },
});

exports.sendEmail = async (to, subject, message) => {
  try {
    // Send the email using SMTP
    await transporter.sendMail({
      from: 'sithum18raveesha@gmail.com',
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