export const THEME_MODE = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeMode = keyof typeof THEME_MODE;

export type Colours = {
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
};

export type Theme = {
  hslColours: Colours;
  colours: Colours;
};

export type Themes = Record<ThemeMode, Theme>;
