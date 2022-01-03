import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ISelectOption } from './Select_types';

export function SelectOption({ size, options, onChange }: ISelectOption) {
  return (
    <DropDownListWrapper>
      <DropDownListStyled>
        {options.map((option) => (
          <ListItem
            sizeStyle={size}
            onClick={() => onChange(option)}
            key={option.id}
            disabled={option.disabled}
          >
            {option.label}
          </ListItem>
        ))}
      </DropDownListStyled>
    </DropDownListWrapper>
  );
}

const DropDownListWrapper = styled.div``;

const DropDownListStyled = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  color: #000;
  &:first-of-type {
    border-top: 0;
  }
`;

const ListItem = styled.li<{ sizeStyle: SerializedStyles; disabled: boolean }>`
  list-style: none;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}
  ${(props) => props.sizeStyle};
`;
