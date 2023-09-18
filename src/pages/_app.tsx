import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/GlobalStyle';
import React from 'react';
import { ThemeModeProvider } from '@/contexts/ThemeModeProvider';
import { ThemeWrapper } from '@/components/ThemeWrapper';
import { League_Spartan } from 'next/font/google';
import { Sidebar } from '@/components/Sidebar';
import styled from 'styled-components';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <ThemeWrapper>
        <PageWrapper className={leagueSpartan.className}>
          <Sidebar />
          <PageContent>
            <Component {...pageProps} />
          </PageContent>
        </PageWrapper>

        <GlobalStyle />
      </ThemeWrapper>
    </ThemeModeProvider>
  );
}

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 103px 1fr;
  grid-template-rows: 1fr;
  height: 100dvh;
`;

const PageContent = styled.main`
  justify-self: center;
  width: 100%;
  max-width: 810px;
  padding-left: 40px;
  padding-right: 40px;
`;
