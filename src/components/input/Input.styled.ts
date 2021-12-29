import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { InputTheme, InputStyle } from './Input.types';

export const InputStyled = styled.input<InputStyle>`
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #e9ecef;
  color: #212529;
  ${(props) => props.themeStyle}
`;

export const themeStyleList: { [index: string]: SerializedStyles } = {
  [InputTheme.Default]: css`
    position: relative;
    height: 28px;
    width: calc(100% - 38px);
    padding: 9px 18px;
    border-radius: 8px;
  `,
  [InputTheme.Round]: css`
    display: block;
    width: 100%;
    padding: 4px 69px 4px 8px;
    border-radius: 8px;
    line-height: 20px;
    box-sizing: border-box;
  `,
};
