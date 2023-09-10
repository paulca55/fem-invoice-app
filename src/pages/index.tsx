import React, { useContext } from 'react';
import { ThemeModeContext } from '@/contexts/ThemeModeProvider';

export default function Home() {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);

  return <main></main>;
}
