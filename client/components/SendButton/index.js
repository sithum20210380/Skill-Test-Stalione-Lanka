import { Button } from 'react-native'
import React from 'react'
import styles from './styles'

export default function index({ onPress }) {
  return (
    <Button
      style={styles.button}
      title="Send"
      onPress={onPress}
    />
  )
}
