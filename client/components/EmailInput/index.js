import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

export default function index({
  toEmail,
  setToEmail,
  subject,
  setSubject,
  message,
  setMessage,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="To"
        value={toEmail}
        onChangeText={setToEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Message"
        multiline
        value={message}
        onChangeText={setMessage}
      />
    </View>
  );
}
