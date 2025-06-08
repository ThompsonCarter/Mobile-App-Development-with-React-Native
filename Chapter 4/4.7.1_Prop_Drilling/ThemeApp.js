import React from 'react';
import { View, Text } from 'react-native';

function Grandchild({ theme }) {
  return <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Grandchild Theme: {theme}</Text>;
}

function Child({ theme }) {
  return (
    <View>
      <Grandchild theme={theme} />
    </View>
  );
}

export default function Parent({ theme }) {
  return (
    <View style={{ padding: 10 }}>
      <Child theme={theme} />
    </View>
  );
}