import React, { createContext, useContext } from 'react';
import { Text, View } from 'react-native';

const ThemeContext = createContext('light');

function ThemedText() {
  const theme = useContext(ThemeContext);
  return <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Hello</Text>;
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <View style={{ padding: 10 }}>
        <ThemedText />
      </View>
    </ThemeContext.Provider>
  );
}