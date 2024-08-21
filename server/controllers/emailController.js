const emailService = require('../services/emailService');

exports.sendEmail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;
    const email = await emailService.sendEmail(to, subject, message);
    res.status(200).json(email);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSentEmails = async (req, res) => {
  try {
    const sentEmails = await emailService.getSentEmails();
    res.status(200).json(sentEmails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};