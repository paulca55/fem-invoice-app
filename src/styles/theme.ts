import { Colours, Themes } from '@/types/themes';

const hslColours: Colours = {
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
};

const colours: Colours = {
  '01': `hsl(${hslColours['01']})`,
  '02': `hsl(${hslColours['02']})`,
  '03': `hsl(${hslColours['03']})`,
  '04': `hsl(${hslColours['04']})`,
  '05': `hsl(${hslColours['05']})`,
  '06': `hsl(${hslColours['06']})`,
  '07': `hsl(${hslColours['07']})`,
  '08': `hsl(${hslColours['08']})`,
  '09': `hsl(${hslColours['09']})`,
  '10': `hsl(${hslColours['10']})`,
  '11': `hsl(${hslColours['11']})`,
  '12': `hsl(${hslColours['12']})`,
};

const themes: Themes = {
  light: {
    hslColours,
    colours,
    background: '#fff',
  },
  dark: {
    hslColours,
    colours,
    background: colours['12'],
  },
};

export { themes };
