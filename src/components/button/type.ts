export enum BUTTON_THEME {
  DEFAULT = 'DEFAULT',
  PRIMARY = 'PRIMARY',
  LINK = 'LINK',
  TEXT = 'TEXT',
}

export enum BUTTON_SIZE {
  DEFAULT = 'DEFAULT',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum BUTTON_SHAPE {
  DEFAULT = 'DEFAULT',
  CIRCLE = 'CIRCLE',
  ROUND = 'ROUND',
}

export interface IButton {
  /**
   * Button Theme
   */
  theme: BUTTON_THEME;
  /**
   * Button Size
   */
  size: BUTTON_SIZE;
  /**
   * Button shape for using Button Component
   */
  shape: BUTTON_SHAPE;
  /**
   * Button background transparent and invert text, border colors
   */
  ghost: boolean;
  /**
   * Option to fit button width (true: 100%, false: auto-fit)
   */
  block: boolean;
  /**
   * button title
   */
  children: JSX.Element | JSX.Element[] | string;
  /**
   * disabled
   */
  disabled?: boolean;
  /**
   * Optional Click handler
   */
  onClick: () => void;
}
