import { themes } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { useThemeMode } from '@/contexts/ThemeModeProvider';

type ThemeWrapperProps = {
  children: React.ReactNode;
};

function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { themeMode } = useThemeMode();

  return <ThemeProvider theme={themes[themeMode]}>{children}</ThemeProvider>;
}

export { ThemeWrapper };
