export enum SELECT_SIZE {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export interface ISelect {
  /**
   * Size of Select input
   */
  size: SELECT_SIZE;
  /**
   * Initial selected option
   */
  defaultValue: string;
  /**
   * Whether disabled select
   */
  disabled: boolean;
  /**
   * Select options
   */
  options: ISelectOptions[];
  /**
   * Placeholder of select
   */
  placeholder: string;
  /**
   * input value change
   */
  onChange: (value: ISelectOptions) => void;
}

export interface ISelectOptions {
  id: string;
  label: string;
  value: string;
  disabled: boolean;
}
