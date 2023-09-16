import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  :root {
    --01-hsl: ${({ theme }) => theme.hslColors['01']};
    --02-hsl: ${({ theme }) => theme.hslColors['02']}
    --03-hsl: ${({ theme }) => theme.hslColors['03']}
    --04-hsl: ${({ theme }) => theme.hslColors['04']}
    --05-hsl: ${({ theme }) => theme.hslColors['05']}
    --06-hsl: ${({ theme }) => theme.hslColors['06']}
    --07-hsl: ${({ theme }) => theme.hslColors['07']}
    --08-hsl: ${({ theme }) => theme.hslColors['08']}
    --09-hsl: ${({ theme }) => theme.hslColors['09']}
    --10-hsl: ${({ theme }) => theme.hslColors['10']}
    --11-hsl: ${({ theme }) => theme.hslColors['11']}
    --12-hsl: ${({ theme }) => theme.hslColors['12']}
    
    --01: ${({ theme }) => theme.colors['01']}
    --02: ${({ theme }) => theme.colors['02']}
    --03: ${({ theme }) => theme.colors['03']}
    --04: ${({ theme }) => theme.colors['04']}
    --05: ${({ theme }) => theme.colors['05']}
    --06: ${({ theme }) => theme.colors['06']}
    --07: ${({ theme }) => theme.colors['07']}
    --08: ${({ theme }) => theme.colors['08']}
    --09: ${({ theme }) => theme.colors['09']}
    --10: ${({ theme }) => theme.colors['10']}
    --11: ${({ theme }) => theme.colors['11']}
    --12: ${({ theme }) => theme.colors['12']}
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
    min-height: 100vh;
    text-rendering: optimizespeed;
    line-height: 1.4;
    font-weight: 500;
    font-size: 0.8125rem;
    letter-spacing: -0.00625em;
    background-color: ${(props) => props.theme.background};
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
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
`;

export { GlobalStyle };
