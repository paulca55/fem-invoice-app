import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/GlobalStyle';
import React from 'react';
import { ThemeModeProvider } from '@/contexts/ThemeModeProvider';
import { ThemeWrapper } from '@/components/ThemeWrapper';
import { League_Spartan } from 'next/font/google';
import { Sidebar } from '@/components/Sidebar';
import styled from 'styled-components';
import { breakpoints } from '@/constants';

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
  height: 100dvh;

  @media (min-width: ${breakpoints.sm}) {
    --sidebar-size: 80px;
  }

  @media (min-width: ${breakpoints.lg}) {
    --sidebar-size: 103px;

    display: grid;
    grid-template-columns: var(--sidebar-size) 1fr;
    grid-template-rows: 1fr;
  }
`;

const PageContent = styled.main`
  justify-self: center;
  width: 100%;
  max-width: 50rem;
  padding-left: 40px;
  padding-right: 40px;
`;
