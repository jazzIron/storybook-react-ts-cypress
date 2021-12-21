import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { IToggle, TOGGLE_SIZE } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export function Toggle({
  size,
  checked,
  disabled,
  checkedChildren,
  unCheckedChildren,
  onChange,
}: IToggle) {
  const onChangeHandler = () => {
    onChange(!checked);
  };

  return (
    <ToggleWrapper>
      <ToggleStyled size={size} disabled={disabled}>
        <ToggleItemStyled type="checkbox" checked={checked} onChange={onChangeHandler} />
        <ToggleItemContent checked={checked} size={size}>
          {checkedChildren && unCheckedChildren && (
            <>
              <CheckChildrenStyled>
                <FontAwesomeIcon icon={faCheck} />
              </CheckChildrenStyled>
              <CheckChildrenStyled>
                <FontAwesomeIcon icon={faTimes} />
              </CheckChildrenStyled>
            </>
          )}
        </ToggleItemContent>
      </ToggleStyled>
    </ToggleWrapper>
  );
}

Toggle.defaultProps = {
  size: TOGGLE_SIZE.MEDIUM,
  checked: false,
  disabled: false,
  checkedChildren: 'faCheck',
  unCheckedChildren: 'faTimes',
};

const ToggleWrapper = styled.div``;

const ToggleStyled = styled.label<{ size: string; disabled: boolean }>`
  position: relative;
  display: inline-block;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'unset')};
  ${(props) =>
    props.size === 'SMALL'
      ? css`
          width: 45px;
          height: 25px;
        `
      : css`
          width: 70px;
          height: 35px;
        `}
  input:checked + span {
    background-color: #1890ff;
  }
  input:checked + span::before {
    transform: translateX(${(props) => (props.size === 'SMALL' ? '23px' : '35px')});
  }
`;
const ToggleItemStyled = styled.input`
  display: none;
`;
const ToggleItemContent = styled.span<{ checked: boolean; size: string }>`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #db3a34;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50px;
  ::before {
    position: absolute;
    content: '';

    ${(props) =>
      props.size === 'SMALL'
        ? css`
            height: 15px;
            width: 15px;
            left: 3px;
            bottom: 5px;
          `
        : css`
            height: 27px;
            width: 27px;
            left: 4px;
            bottom: 4px;
          `}
    border-radius: 50%;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  > div:first-of-type {
    color: #ffffff;
    position: absolute;
    ${(props) =>
      props.size === 'SMALL'
        ? css`
            left: 7px;
            font-size: 9px;
          `
        : css`
            left: 15px;
            font-size: 16px;
          `}
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
  > div:last-of-type {
    color: #ffffff;
    position: absolute;
    ${(props) =>
      props.size === 'SMALL'
        ? css`
            right: 7px;
            font-size: 9px;
          `
        : css`
            font-size: 16px;
            right: 15px;
          `}
    display: ${(props) => (props.checked ? 'none' : 'block')};
  }
`;

const CheckChildrenStyled = styled.div``;
