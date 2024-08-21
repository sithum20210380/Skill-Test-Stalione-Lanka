import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import EmailInput from '../../components/EmailInput/index';
import SendButton from '../../components/SendButton/index';
import EmailList from '../../components/EmailList/index';
import api from '../../utils/api';

const HomeScreen = () => {
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentEmails, setSentEmails] = useState([]);

  useEffect(() => {
    fetchSentEmails();
  }, []);

  const sendEmail = async () => {
    try {
      console.log('Request body:', {
        to: toEmail,
        subject: subject,
        message: message,
      });

      const newEmail = await api.sendEmail(toEmail, subject, message);
      setToEmail('');
      setSubject('');
      setMessage('');
      setSentEmails([...sentEmails, newEmail]);
      console.log('email body',newEmail);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const fetchSentEmails = async () => {
    try {
      const emails = await api.fetchSentEmails();
      setSentEmails(emails);
    } catch (error) {
      console.error('Error fetching sent emails:', error);
    }
  };

  return (
    <View style={styles.container}>
      <EmailInput
        toEmail={toEmail}
        setToEmail={setToEmail}
        subject={subject}
        setSubject={setSubject}
        message={message}
        setMessage={setMessage}
      />
      <SendButton onPress={sendEmail} />
      <EmailList emails={sentEmails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default HomeScreen;