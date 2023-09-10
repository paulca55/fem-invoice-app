import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/GlobalStyle';
import React from 'react';
import { ThemeModeProvider } from '@/contexts/ThemeModeProvider';
import { ThemeWrapper } from '@/components/ThemeWrapper';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <ThemeWrapper>
        <div className={leagueSpartan.className}>
          <Component {...pageProps} />
        </div>

        <GlobalStyle />
      </ThemeWrapper>
    </ThemeModeProvider>
  );
}
