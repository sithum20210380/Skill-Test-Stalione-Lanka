import { FlatList, View, Text } from 'react-native'
import React from 'react'
import EmailListItem from '../EmailListItem/index';
import styles from './styles'

export default function index({ emails }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={emails}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EmailListItem
            to={item.to_email}
            subject={item.subject}
            message={item.message}
          />
        )}
      />
      <Text style={styles.empty}>No emails</Text>
    </View>

  )
}
