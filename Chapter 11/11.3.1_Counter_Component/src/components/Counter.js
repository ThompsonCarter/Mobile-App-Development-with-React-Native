import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text testID="count">{count}</Text>
      <Button title="+1" onPress={() => setCount(c => c + 1)} />
      <Button title="-1" onPress={() => setCount(c => c - 1)} />
    </View>
  );
}