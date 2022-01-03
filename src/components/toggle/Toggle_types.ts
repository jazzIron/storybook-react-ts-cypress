import { ChangeEvent } from 'react';

export enum TOGGLE_SIZE {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
}

export interface IToggle {
  /**
   * toggle size
   */
  size: TOGGLE_SIZE;
  /**
   * toggle is checked
   */
  checked: boolean;
  /**
   * Disable toggle
   */
  disabled: boolean;

  /**
   * state is checked
   */
  checkedChildren: string | JSX.Element;
  /**
   * state is unchecked
   */
  unCheckedChildren: string | JSX.Element;
  /**
   * Trigger changing
   */
  onChange: (checkd: boolean) => void;
  /**
   * Trigger clicked
   */
  onClick: (checkd: boolean, e: HTMLButtonElement) => void;
}
