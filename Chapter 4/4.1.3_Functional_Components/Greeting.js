import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Greeting({ name }) {
  const [greeted, setGreeted] = useState(false);
  return (
    <View style={{ padding: 10 }}>
      <Text>{greeted ? `Hello again, ${name}!` : `Hi, ${name}!`}</Text>
      <Button title="Greet" onPress={() => setGreeted(true)} />
    </View>
  );
}