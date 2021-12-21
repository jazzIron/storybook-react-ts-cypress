import styled from '@emotion/styled';
import { ICheckboxGroup } from './types';
import { css, SerializedStyles } from '@emotion/react';
import { useState } from 'react';

export function Checkbox({ disabled, name, options, value, onChange }: ICheckboxGroup) {
  const [checkList, setCheckList] = useState(options);
  const onChangeHandler = (selectId: string) => {
    setCheckList(
      checkList.map((val) => (val.id === selectId ? { ...val, checked: !val.checked } : val)),
    );
    return onChange(checkList);
  };

  return (
    <CheckboxWrapper>
      {checkList.map((option, idx) => {
        return (
          <CheckboxLabel key={idx} disabled={option.disabled}>
            <CheckboxDefaultWrapper>
              <CheckboxStyled
                type="checkbox"
                id={option.id}
                value={option.value}
                checked={option.checked}
                onChange={() => onChangeHandler(option.id)}
              />
              <CheckBoxItemWrapper />
            </CheckboxDefaultWrapper>
            <CheckboxNameWrapper>{option.label}</CheckboxNameWrapper>
          </CheckboxLabel>
        );
      })}
    </CheckboxWrapper>
  );
}

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const CheckboxLabel = styled.label<{ disabled: boolean }>`
  margin: 0;
  padding: 0;
  color: #000000d9;
  display: inline-flex;
  align-items: baseline;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'unset')};
  ::after {
    display: inline-block;
    width: 0;
    overflow: hidden;
    content: '\a0';
  }
  & span {
    ${(props) =>
      props.disabled &&
      css`
        color: #00000040;
      `};
  }
`;

const CheckboxDefaultWrapper = styled.span`
  margin: 0;
  padding: 0;
  color: #000000d9;
  position: relative;
  top: 0.2em;
  line-height: 1;
  cursor: pointer;
  & input[type='checkbox']:checked + span {
    background-color: #1890ff;
    border-color: #1890ff;
    ::after {
      position: absolute;
      top: 50%;
      left: 20%;
      display: table;
      width: 5px;
      height: 9px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg) scale(1) translate(-50%, -50%);
      opacity: 1;
      transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
      content: ' ';
    }
  }
`;

const CheckboxStyled = styled.input`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`;

const CheckBoxItemWrapper = styled.span`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  direction: ltr;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  border-collapse: separate;
  transition: all 0.3s;
  input[type='radio']:checked ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 2px;
    animation: 0.36s ease-in-out;
    animation-fill-mode: backwards;
    content: '';
  }
`;

const CheckboxNameWrapper = styled.span`
  padding-right: 8px;
  padding-left: 8px;
`;
