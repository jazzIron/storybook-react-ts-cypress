export enum SPACE_DIRECTION {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

export enum SPACE_ALIGN {
  START = 'START',
  END = 'END',
  CENTER = 'CENTER',
  BASELINE = 'BASELINE',
}

export enum SPACE_SIZE {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export interface ISpace {
  /**
   * The space direction
   */
  direction: SPACE_DIRECTION;
  /**
   * Align items
   */
  align: SPACE_ALIGN;
  /**
   * The space size
   */
  size: SPACE_SIZE;
  /**
   * chilren Element
   */
  children: JSX.Element | JSX.Element[];
}
