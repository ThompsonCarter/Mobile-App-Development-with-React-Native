import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function LifecycleDemo() {
  useEffect(() => {
    console.log('Mounted 🟢');
    return () => console.log('Unmounted 🔴');
  }, []);

  useEffect(() => {
    console.log('Updated 🟡');
  });

  return (
    <View style={{ padding: 10 }}>
      <Text>Check your console for lifecycle logs.</Text>
    </View>
  );
}