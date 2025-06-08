import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function ThemedCard({ title, content }) {
  const scheme = useColorScheme();

  return (
    <View style={scheme === 'dark' ? styles.cardDark : styles.cardLight}>
      <Text style={scheme === 'dark' ? styles.titleDark : styles.titleLight}>{title}</Text>
      <Text style={scheme === 'dark' ? styles.textDark : styles.textLight}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardLight: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginVertical: 10
  },
  cardDark: {
    backgroundColor: '#111',
    padding: 18,
    borderRadius: 10,
    marginVertical: 10
  },
  titleLight: { color: '#222', fontWeight: 'bold', fontSize: 20 },
  titleDark: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
  textLight: { color: '#444' },
  textDark: { color: '#ddd' }
});