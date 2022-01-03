import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { IButton, BUTTON_THEME, BUTTON_SIZE, BUTTON_SHAPE } from './Button_type';

export function Button({ theme, size, shape, ghost, block, children, disabled, onClick }: IButton) {
  const themeStyle = btnThemeStyle[theme];
  const sizeStyle = btnSizeStyle[size];
  const shapeStyle = btnShapeStyle(size, shape);
  const disabledStyle = btnDisabledStyle(disabled!, theme, ghost);
  return (
    <ButtonStyled
      themeStyle={themeStyle}
      sizeStyle={sizeStyle}
      shapeStyle={shapeStyle}
      ghost={ghost}
      block={block}
      disabledStyle={disabledStyle}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
}

const btnThemeStyle = {
  [BUTTON_THEME.DEFAULT]: css``,
  [BUTTON_THEME.LINK]: css`
    color: #1890ff;
    border-color: transparent;
    background: 0 0;
  `,
  [BUTTON_THEME.PRIMARY]: css`
    color: #fff;
    border-color: #1890ff;
    background: #1890ff;
  `,
  [BUTTON_THEME.TEXT]: css`
    color: #000000d9;
    border-color: transparent;
    background: 0 0;
  `,
};

const btnSizeStyle = {
  [BUTTON_SIZE.DEFAULT]: css``,
  [BUTTON_SIZE.SMALL]: css`
    height: 24px;
    font-size: 14px;
    padding: 0px 7px;
    border-radius: 2px;
  `,
  [BUTTON_SIZE.MEDIUM]: css`
    height: 40px;
    padding: 8px 15px;
    font-size: 16px;
    border-radius: 2px;
  `,
  [BUTTON_SIZE.LARGE]: css`
    height: 48px;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 2px;
  `,
};

Button.defaultProps = {
  theme: BUTTON_THEME.DEFAULT,
  size: BUTTON_SIZE.DEFAULT,
  shape: BUTTON_SHAPE.DEFAULT,
  children: '버튼 라벨',
  ghost: false,
  block: false,
  disabled: false,
};

interface IButtonStyled {
  themeStyle: SerializedStyles;
  shapeStyle: SerializedStyles;
  sizeStyle: SerializedStyles;
  ghost: boolean;
  block: boolean;
  disabledStyle: SerializedStyles;
}

const btnDisabledGhostStyle = () => {
  return css`
    color: #00000040;
    background: 0 0;
    border-color: #d9d9d9;
  `;
};

const btnDisabledStyle = (disabled: boolean, theme: BUTTON_THEME, ghost: boolean) => {
  if (!disabled) return css``;
  if (ghost) return btnDisabledGhostStyle();
  switch (theme) {
    case 'TEXT':
      return css`
        color: #00000040;
        border-color: transparent;
        background: 0 0;
      `;
    case 'LINK':
      return css`
        color: #00000040;
        border-color: transparent;
        background: 0 0;
      `;
    default:
      return css`
        color: #00000040;
        border-color: #d9d9d9;
        background: #f5f5f5;
        text-shadow: none;
        box-shadow: none;
      `;
  }
};

const btnShapeStyle = (size: BUTTON_SIZE, shape: BUTTON_SHAPE) => {
  if (shape === 'DEFAULT')
    return css`
      border-radius: 0;
    `;
  if (shape === 'ROUND')
    return css`
      border-radius: 40px;
    `;
  switch (size) {
    case 'SMALL':
      return css`
        min-width: 24px;
        border-radius: 50%;
      `;
    case 'MEDIUM':
      return css`
        min-width: 32px;
        border-radius: 50%;
      `;
    case 'LARGE':
      return css`
        min-width: 48px;
        min-height: 50px;
        border-radius: 50%;
      `;
    default:
      return css`
        min-width: 40px;
        min-height: 38px;
        border-radius: 50%;
      `;
  }
};

const ButtonStyled = styled.button<IButtonStyled>`
  line-height: 1.5;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: #000000d9;
  border-color: #d9d9d9;
  background: #fff;
  ${(props) => props.themeStyle};
  ${(props) => props.sizeStyle};
  ${(props) => props.shapeStyle};
  ${(props) =>
    props.block
      ? css`
          width: 100%;
        `
      : css`
          width: fit-content;
        `};
  ${(props) =>
    props.ghost &&
    css`
      background: transparent;
    `};
  ${(props) => props.disabledStyle};
`;
