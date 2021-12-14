import '@emotion/react';
import { Themes } from './Theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof ThemeData.colors;
    fonts: typeof ThemeData.fonts;
  }
}
