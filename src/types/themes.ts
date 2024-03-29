import { DefaultTheme } from 'styled-components';

export const THEME_MODE = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeMode = keyof typeof THEME_MODE;

export type Colors = {
  '01': string;
  '02': string;
  '03': string;
  '04': string;
  '05': string;
  '06': string;
  '07': string;
  '08': string;
  '09': string;
  '10': string;
  '11': string;
  '12': string;
  '13': string;
  '14': string;
  '15': string;
  '16': string;
  '17': string;
};

export type Theme = {
  hslColors: Colors;
  colors: Colors;
  background: string;
  textColor: string;
  sideBarBgColor: string;
};

export type Themes = Record<ThemeMode, DefaultTheme>;
