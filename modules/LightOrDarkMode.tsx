import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
      const root = window.document.documentElement;
      const initialTheme = root.classList.contains('dark') ? 'dark' : 'light';
      setTheme(initialTheme);
    }, []);
  
    const toggleTheme = () => {
      const root = window.document.documentElement;
      if (theme === 'light') {
        root.classList.add('dark');
        setTheme('dark');
      } else {
        root.classList.remove('dark');
        setTheme('light');
      }
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};