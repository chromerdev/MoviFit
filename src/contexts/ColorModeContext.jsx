import { createContext, useContext, useState } from 'react';

const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleColorMode = () => setIsDark((prev) => !prev);
  return (
    <ColorModeContext.Provider value={{ isDark, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => useContext(ColorModeContext);
