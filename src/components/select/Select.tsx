import styled from '@emotion/styled';
import { css, SerializedStyles, keyframes } from '@emotion/react';
import { ISelect, SELECT_SIZE, ISelectOptions } from './types';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export function Select({ size, disabled, options, placeholder, onChange }: ISelect) {
  const sizeStyle = selectSizeStyle[size];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ISelectOptions>();

  const handleToggle = () => {
    !disabled && setIsOpen((prev) => !prev);
  };

  const handleChangeOption = (option: ISelectOptions) => () => {
    setSelectedOption(option);
    handleToggle();
    return onChange(option);
  };

  return (
    <DropDownWrapper>
      <DropDownHeader onClick={handleToggle} sizeStyle={sizeStyle}>
        <DropDownLabelWrapper>
          {selectedOption ? selectedOption.label : placeholder}
        </DropDownLabelWrapper>
        <DropDownIconWrapper>{isOpen ? <AiOutlineDown /> : <AiOutlineUp />}</DropDownIconWrapper>
      </DropDownHeader>
      {isOpen && (
        <DropDownListWrapper>
          <DropDownListStyled>
            {options.map((option) => (
              <ListItem
                sizeStyle={sizeStyle}
                onClick={handleChangeOption(option)}
                key={option.id}
                disabled={option.disabled}
              >
                {option.label}
              </ListItem>
            ))}
          </DropDownListStyled>
        </DropDownListWrapper>
      )}
    </DropDownWrapper>
  );
}

const selectSizeStyle = {
  [SELECT_SIZE.SMALL]: css`
    padding: 4px 6px;
    font-size: 14px;
  `,
  [SELECT_SIZE.MEDIUM]: css`
    padding: 8px 12px;
    font-size: 16px;
  `,
  [SELECT_SIZE.LARGE]: css`
    padding: 10px 16px;
    font-size: 18px;
  `,
};

Select.defaultProps = {
  size: SELECT_SIZE.MEDIUM,
  disabled: false,
  defaultValue: 0,
  options: [],
  placeholder: 'choice Select',
};

const DropDownWrapper = styled.div`
  margin: 0 auto;
`;

const DropDownHeader = styled.div<{ sizeStyle: SerializedStyles }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  color: #000;
  background: #ffffff;
  gap: 12px;
  ${(props) => props.sizeStyle};
`;

const DropDownLabelWrapper = styled.div``;
const DropDownIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

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
