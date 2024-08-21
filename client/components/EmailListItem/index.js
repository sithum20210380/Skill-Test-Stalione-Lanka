import { View, Text } from 'react-native'
import React from 'react'

export default function index({ to, subject, message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.to}>To: {to}</Text>
      <Text style={styles.subject}>Subject: {subject}</Text>
      <Text style={styles.message}>Message: {message}</Text>
    </View>
  )
}