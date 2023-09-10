import styled from 'styled-components';
import React, { useContext } from 'react';
import { ThemeModeContext } from '@/contexts/ThemeModeProvider';
import { THEME_MODE } from '@/types/themes';

const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.background};
`;

export default function Home() {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);

  return <main></main>;
}
