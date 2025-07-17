import React, { createContext, useContext, useMemo } from 'react';

type Theme = {
  primary: string;
  background: string;
  [key: string]: string;
};

type ThemeProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};

const defaultTheme: Theme = {
  primary: '#6200ea',
  background: '#ffffff',
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => {
  const memoizedTheme = useMemo(() => theme, [theme]);

  return (
    <ThemeContext.Provider value={memoizedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
