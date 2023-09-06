import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/GlobalStyle';
import React from 'react';
import { ThemeModeProvider } from '@/contexts/ThemeModeProvider';
import { ThemeWrapper } from '@/components/ThemeWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <ThemeWrapper>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeWrapper>
    </ThemeModeProvider>
  );
}
