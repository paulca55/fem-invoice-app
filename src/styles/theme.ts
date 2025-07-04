import { Themes } from '@/types/themes';

const hslColors = {
  '01': '252 94% 67%',
  '02': '252 100% 73%',
  '03': '233 31% 17%',
  '04': '233 30% 21%',
  '05': '231 75% 93%',
  '06': '231 20% 61%',
  '07': '231 36% 63%',
  '08': '231 28% 7%',
  '09': '0 80% 63%',
  '10': '0 100% 80%',
  '11': '240 27% 98%',
  '12': '233 30% 11%',
  '13': '231 20% 27%',
  '14': '232 20% 36%',
  '15': '232 23% 61%',
  '16': '228 71% 99%',
  '17': '231 20% 27%',
} as const;

const colors = {
  '01': `hsl(${hslColors['01']})`,
  '02': `hsl(${hslColors['02']})`,
  '03': `hsl(${hslColors['03']})`,
  '04': `hsl(${hslColors['04']})`,
  '05': `hsl(${hslColors['05']})`,
  '06': `hsl(${hslColors['06']})`,
  '07': `hsl(${hslColors['07']})`,
  '08': `hsl(${hslColors['08']})`,
  '09': `hsl(${hslColors['09']})`,
  '10': `hsl(${hslColors['10']})`,
  '11': `hsl(${hslColors['11']})`,
  '12': `hsl(${hslColors['12']})`,
  '13': `hsl(${hslColors['13']})`,
  '14': `hsl(${hslColors['14']})`,
  '15': `hsl(${hslColors['15']})`,
  '16': `hsl(${hslColors['16']})`,
  '17': `hsl(${hslColors['17']})`,
} as const;

const themes: Themes = {
  light: {
    hslColors,
    colors,
    background: colors['11'],
    textColor: colors['08'],
    sideBarBgColor: colors['13'],
  },
  dark: {
    hslColors,
    colors,
    background: colors['12'],
    textColor: '#fff',
    sideBarBgColor: colors['03'],
  },
};

export { themes, colors, hslColors };
