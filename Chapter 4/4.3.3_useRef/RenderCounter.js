import React, { useRef } from 'react';
import { Text } from 'react-native';

export default function RenderCounter() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return <Text>Rendered {renderCount.current} times</Text>;
}