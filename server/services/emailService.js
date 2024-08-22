const nodemailer = require('nodemailer');
const Email = require('../models/Email');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
});

exports.sendEmail = async (to, subject, message) => {
  try {
    await transporter.sendMail({
      from: '',
      to,
      subject,
      text: message,
    });

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