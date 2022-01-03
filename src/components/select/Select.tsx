import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ISelect, SELECT_SIZE, ISelectOptionItems } from './Select_types';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { SelectOption } from './SelectOption';

export function Select({ size, disabled, options, placeholder, onChange }: ISelect) {
  const sizeStyle = selectSizeStyle[size];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ISelectOptionItems>();

  const handleToggle = () => {
    !disabled && setIsOpen((prev) => !prev);
  };

  const handleChangeOption = (option: ISelectOptionItems) => {
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
        <DropDownIconWrapper>{isOpen ? <AiOutlineUp /> : <AiOutlineDown />}</DropDownIconWrapper>
      </DropDownHeader>
      {isOpen && <SelectOption size={sizeStyle} options={options} onChange={handleChangeOption} />}
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
