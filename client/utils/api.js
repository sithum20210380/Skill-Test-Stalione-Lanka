const api = {
  sendEmail: async (to, subject, message) => {
    try {
      const response = await fetch('http://localhost:3000/api/emails/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  },

  fetchSentEmails: async () => {
    try {
      const response = await fetch('http://localhost:3000/api/emails/sent');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching sent emails:', error);
      throw error;
    }
  },
};

export default api;