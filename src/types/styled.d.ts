// See https://styled-components.com/docs/api#typescript

// import original module declarations
import 'styled-components';
import { Theme } from '@/types/themes';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
