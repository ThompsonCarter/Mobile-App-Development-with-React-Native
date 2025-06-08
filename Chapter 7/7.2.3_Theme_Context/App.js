import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Main from './Main';

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      <Main />
    </ThemeContext.Provider>
  );
}
