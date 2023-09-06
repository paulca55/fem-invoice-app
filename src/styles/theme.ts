import { Colours, Themes } from '@/types/themes';

const colours: Colours = {
  primary: 'orange',
  secondary: 'red',
};

const themes: Themes = {
  light: {
    colours,
    text: colours.primary,
    background: colours.secondary,
  },
  dark: {
    colours,
    text: colours.secondary,
    background: colours.primary,
  },
};

export { themes };
