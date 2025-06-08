import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttons}>
        <Button title="+1" onPress={() => setCount(c => c + 1)} />
        <Button title="-1" onPress={() => setCount(c => c - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
      <Text>Render cycles: {renderCount.current}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 10 },
  count: { fontSize: 48, marginVertical: 20 },
  buttons: { flexDirection: 'row', width: '60%', justifyContent: 'space-around' },
});