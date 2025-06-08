import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { View, Text, Button } from 'react-native';

export function ThemeSwitcher() {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: dark ? '#000' : '#fff' }}>
      <Text>{dark ? 'Dark Mode' : 'Light Mode'}</Text>
      <Button title="Toggle Theme" onPress={toggle} />
    </View>
  );
}
