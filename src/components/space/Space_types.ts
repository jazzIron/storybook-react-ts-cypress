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
   * items spacing size
   */
  gap: number;
  /**
   * chilren Element
   */
  children: JSX.Element | JSX.Element[];
}
