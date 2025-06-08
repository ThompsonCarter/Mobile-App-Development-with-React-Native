import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

export default function Counter({ count, setCount }) {
  const scheme = useColorScheme();

  return (
    <View style={scheme === 'dark' ? styles.containerDark : styles.container}>
      <Text style={scheme === 'dark' ? styles.countDark : styles.count}>{count}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={() => setCount(0)}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  containerDark: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#222',
  },
  count: { fontSize: 64, color: '#333', marginBottom: 30 },
  countDark: { fontSize: 64, color: '#fff', marginBottom: 30 },
  buttonRow: { flexDirection: 'row', marginTop: 16 },
  button: {
    backgroundColor: '#47f', padding: 12, borderRadius: 8,
    marginHorizontal: 10, minWidth: 60, alignItems: 'center'
  },
  buttonText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  resetButton: {
    backgroundColor: '#ddd', padding: 12, borderRadius: 8,
    marginHorizontal: 10, minWidth: 60, alignItems: 'center'
  },
  resetText: { color: '#333', fontSize: 20 }
});