import axios from 'axios';

const api = {
  sendEmail: async (to, subject, message) => {
    const response = await axios.post('http://localhost:3000/api/emails/send', {
      to,
      subject,
      message,
    });
    return response.data;
  },
  fetchSentEmails: async () => {
    const response = await axios.get('http://localhost:3000/api/emails/sent');
    return response.data;
  },
};

export default api;