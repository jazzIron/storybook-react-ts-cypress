export interface ICheckbox {
  id: string;
  label: string;
  checked: boolean;
  disabled: boolean;
  value: string;
}

export interface ICheckboxGroup {
  disabled: boolean;
  name: string;
  options: ICheckbox[];
  value: string;
  onChange: (checkList: ICheckbox[]) => void;
}
