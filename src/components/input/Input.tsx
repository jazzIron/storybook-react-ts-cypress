import { IInput, InputTheme } from './Input.types';
import { InputStyled, themeStyleList } from './Input.styled';

export function Input({
  inputTheme,
  onChange,
  value,
  id,
  placeholder,
  disabled,
  maxLength,
}: IInput) {
  const themeStyle = themeStyleList[inputTheme];

  const handleOnChange = (e: any) => {
    const inputValue = e.target.value;
    if (maxLength && inputValue.length > maxLength) {
      onChange(inputValue.substr(0, maxLength));
    } else {
      onChange(inputValue);
    }
  };

  return (
    <InputStyled
      type="text"
      id={`${id}`}
      value={value}
      onChange={handleOnChange}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      themeStyle={themeStyle}
    />
  );
}

Input.defaultProps = {
  placeholder: 'placeholder default',
  inputTheme: InputTheme.Default,
  height: '36px',
};
