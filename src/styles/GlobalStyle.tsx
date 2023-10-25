import { createGlobalStyle } from 'styled-components';
import { em, normalize, rem } from 'polished';

const GlobalStyle = createGlobalStyle`
  :root {
    --sidebar-size: 72px;
    --color-01-hsl: ${({ theme }) => theme.hslColors['01']};
    --color-02-hsl: ${({ theme }) => theme.hslColors['02']};
    --color-03-hsl: ${({ theme }) => theme.hslColors['03']};
    --color-04-hsl: ${({ theme }) => theme.hslColors['04']};
    --color-05-hsl: ${({ theme }) => theme.hslColors['05']};
    --color-06-hsl: ${({ theme }) => theme.hslColors['06']};
    --color-07-hsl: ${({ theme }) => theme.hslColors['07']};
    --color-08-hsl: ${({ theme }) => theme.hslColors['08']};
    --color-09-hsl: ${({ theme }) => theme.hslColors['09']};
    --color-10-hsl: ${({ theme }) => theme.hslColors['10']};
    --color-11-hsl: ${({ theme }) => theme.hslColors['11']};
    --color-12-hsl: ${({ theme }) => theme.hslColors['12']};
    --color-13-hsl: ${({ theme }) => theme.hslColors['13']};
    --color-14-hsl: ${({ theme }) => theme.hslColors['14']};
    --color-15-hsl: ${({ theme }) => theme.hslColors['15']};
    --color-16-hsl: ${({ theme }) => theme.hslColors['16']};
    --color-17-hsl: ${({ theme }) => theme.hslColors['17']};
    --color-01: ${({ theme }) => theme.colors['01']};
    --color-02: ${({ theme }) => theme.colors['02']};
    --color-03: ${({ theme }) => theme.colors['03']};
    --color-04: ${({ theme }) => theme.colors['04']};
    --color-05: ${({ theme }) => theme.colors['05']};
    --color-06: ${({ theme }) => theme.colors['06']};
    --color-07: ${({ theme }) => theme.colors['07']};
    --color-08: ${({ theme }) => theme.colors['08']};
    --color-09: ${({ theme }) => theme.colors['09']};
    --color-10: ${({ theme }) => theme.colors['10']};
    --color-11: ${({ theme }) => theme.colors['11']};
    --color-12: ${({ theme }) => theme.colors['12']};
    --color-13: ${({ theme }) => theme.colors['13']};
    --color-14: ${({ theme }) => theme.colors['14']};
    --color-15: ${({ theme }) => theme.colors['15']};
    --color-16: ${({ theme }) => theme.colors['16']};
    --color-17: ${({ theme }) => theme.colors['17']};
  }

  /* Normalize */
  ${normalize}

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100dvh;
    text-rendering: optimizespeed;
    line-height: 1.4;
    font-weight: 500;
    font-size: ${rem(13)};
    letter-spacing: ${em(-0.1)};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.3s, color 0.3s;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Create a root stacking context */
  #__next {
    isolation: isolate;
  }

  /* Button reset */
  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    text-align: inherit;
    font: inherit;
    border-radius: 0;
    appearance: none;
  }
`;

export { GlobalStyle };
