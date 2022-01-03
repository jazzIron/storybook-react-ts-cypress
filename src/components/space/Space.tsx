import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { ISpace, SPACE_DIRECTION, SPACE_ALIGN } from './Space_types';
import { toLower } from 'lodash';

export function Space({ direction, align, gap, children }: ISpace) {
  return (
    <SpaceWrapper direction={direction} align={align} gap={gap}>
      <div>스페이스 테스트</div>
      <div>스페이스 테스트2</div>
      {children}
    </SpaceWrapper>
  );
}

Space.defaultProps = {
  direction: SPACE_DIRECTION.HORIZONTAL,
  align: SPACE_ALIGN.CENTER,
  size: 'SpaceTest',
  gap: 0,
  children: `children 테스트 영역`,
};

type ISpaceStyled = Omit<ISpace, 'children'>;
const SpaceWrapper = styled.div<ISpaceStyled>`
  display: flex;
  flex-direction: ${(props) =>
    toLower(props.direction === SPACE_DIRECTION.HORIZONTAL ? 'row' : 'column')};
  align-items: ${(props) => toLower(props.align)};
  gap: ${(props) => props.gap}px;
`;
