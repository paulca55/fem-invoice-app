import { DefaultTheme } from 'styled-components';
import { colors, hslColors } from '@/styles/theme';

export const THEME_MODE = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeMode = keyof typeof THEME_MODE;

type Colors = typeof colors;
type HSLColors = typeof hslColors;

export type Theme = {
  hslColors: HSLColors;
  colors: Colors;
  background: string;
  textColor: string;
  sideBarBgColor: string;
};

export type Themes = Record<ThemeMode, DefaultTheme>;
