import { themes } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import React, { useContext } from 'react';
import { ThemeModeContext } from '@/contexts/ThemeModeProvider';

type ThemeWrapperProps = {
  children: React.ReactNode;
};

function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { themeMode } = useContext(ThemeModeContext);

  return <ThemeProvider theme={themes[themeMode]}>{children}</ThemeProvider>;
}

export { ThemeWrapper };
