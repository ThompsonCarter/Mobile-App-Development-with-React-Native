import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function TimeTicker() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <Text>{time}</Text>
    </View>
  );
}