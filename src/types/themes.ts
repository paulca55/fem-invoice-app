export const THEME_MODE = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeMode = keyof typeof THEME_MODE;

export type Colours = {
  primary: string;
  secondary: string;
};

export type Theme = {
  colours: Colours;
  text: string;
  background: string;
};

export type Themes = Record<ThemeMode, Theme>;
