import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StyledCard({ title, content }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fafaff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
  }
});