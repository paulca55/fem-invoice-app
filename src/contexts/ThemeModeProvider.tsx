import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { THEME_MODE, ThemeMode } from '@/types/themes';

// Check local storage and the preferred color scheme media query
function getInitialColorMode(): ThemeMode {
  if (typeof window !== 'undefined' && window.localStorage) {
    const persistedColorPreference = window.localStorage.getItem(
      'theme-mode',
    ) as ThemeMode | null;
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    // If the user has explicitly chosen light or dark, let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    // If they haven't been explicit, let's check the media query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = mql.matches;
    if (hasMediaQueryPreference) {
      return mql.matches ? THEME_MODE.dark : THEME_MODE.light;
    }

    // If they are using a browser/OS that doesn't support color themes, let's default to 'light'.
    return THEME_MODE.light;
  }

  // Fall back to light theme
  return THEME_MODE.light;
}

// Set up the theme mode context
export type ThemeModeContextValue = {
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue>({
  themeMode: THEME_MODE.light,
  toggleThemeMode: () => null,
});

// Component
type ThemeModeProviderProps = {
  children: ReactNode;
};

const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(THEME_MODE.light);

  useEffect(() => {
    setThemeMode(getInitialColorMode());
  }, []);

  const toggleThemeMode = () => {
    const nextThemeMode: ThemeMode =
      themeMode === THEME_MODE.light ? THEME_MODE.dark : THEME_MODE.light;
    setThemeMode(nextThemeMode);

    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme-mode', nextThemeMode);
    }
  };

  const contextValue: ThemeModeContextValue = {
    themeMode,
    toggleThemeMode,
  };

  return (
    <ThemeModeContext.Provider value={contextValue}>{children}</ThemeModeContext.Provider>
  );
};

export function useThemeMode() {
  return useContext(ThemeModeContext);
}

export { ThemeModeContext, ThemeModeProvider };
