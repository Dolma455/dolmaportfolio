'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeColor = 'pink' | 'purple' | 'yellow' | 'red' | 'blue' | 'green';

export interface ThemeOption {
  id: ThemeColor;
  name: string;
  preview: string;
  accentLight: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  { id: 'pink', name: 'Light Pink', preview: '#F472B6', accentLight: '#FBCFE8' },
  { id: 'purple', name: 'Soft Purple', preview: '#C084FC', accentLight: '#E9D5FF' },
  { id: 'yellow', name: 'Warm Gold', preview: '#FDE047', accentLight: '#FEF08A' },
  { id: 'red', name: 'Coral Rose', preview: '#FB7185', accentLight: '#FECDD3' },
  { id: 'blue', name: 'Sky Blue', preview: '#38BDF8', accentLight: '#BAE6FD' },
  { id: 'green', name: 'Mint Green', preview: '#34D399', accentLight: '#A7F3D0' },
];

interface ThemeContextType {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
  options: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'pink',
  setTheme: () => {},
  options: THEME_OPTIONS,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeColor>('pink');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('dolma-theme') as ThemeColor;
    if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
      setThemeState(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'pink');
    }
  }, []);

  const setTheme = (newTheme: ThemeColor) => {
    setThemeState(newTheme);
    localStorage.setItem('dolma-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, options: THEME_OPTIONS }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
