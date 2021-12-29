import { SerializedStyles } from '@emotion/react';

export enum InputTheme {
  'Default' = 'DEFAULT',
  'Round' = 'ROUND',
}

export interface IInput {
  inputTheme: InputTheme;
  onChange: (event: any) => any;
  value: string | number | undefined;
  id: string | number;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
}

export interface InputStyle {
  themeStyle: SerializedStyles;
}
