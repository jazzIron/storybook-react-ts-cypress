import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ChangeEvent } from 'react';
import { IRadio, IRadioGroup, RADIO_SIZE } from './type';

export function Radio({ size, disabled, name, options, value, onChange }: IRadioGroup) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange(e.target.value);
  };

  return (
    <RadioWrapper>
      {options.map((option, idx) => {
        return (
          <InputLabelWrapper key={idx}>
            <RadioDefaultStyled>
              <RadioStyled
                type="radio"
                id={option.id}
                value={option.value}
                checked={value === option.value}
                onChange={onChangeHandler}
              />
              <RadioItemWrapper />
            </RadioDefaultStyled>
            <InputLabelStyled>{option.label}</InputLabelStyled>
          </InputLabelWrapper>
        );
      })}
    </RadioWrapper>
  );
}

Radio.defaultProps = {
  size: RADIO_SIZE.MEDIUM,
  checked: false,
  disabled: false,
  name: 'radioTest',
  options: [],
  value: '1',
};

const RadioWrapper = styled.div`
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  list-style: none;
  display: inline-block;
`;

const InputLabelWrapper = styled.label`
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  position: relative;
  display: inline-flex;
  align-items: baseline;
  cursor: pointer;
  ::after {
    display: inline-block;
    width: 0;
    overflow: hidden;
    content: '\a0';
  }
`;

const InputLabelStyled = styled.span`
  padding-right: 8px;
  padding-left: 8px;
`;

const RadioStyled = styled.input`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  overflow: visible;
`;

const RadioDefaultStyled = styled.span`
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  list-style: none;
  position: relative;
  top: 0.2em;
  display: inline-block;
  outline: none;
  cursor: pointer;
  ::after {
  }

  & input[type='radio']:checked + span {
    border-color: #1890ff;
    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 16px;
      height: 16px;
      margin-top: -8px;
      margin-left: -8px;
      background-color: #1890ff;
      border-top: 0;
      border-left: 0;
      border-radius: 16px;
      transform: scale(0.5);
      opacity: 1;
      transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
      content: ' ';
    }
  }
`;

const RadioItemWrapper = styled.span`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
  transition: all 0.3s;
`;
