import { css } from '@emotion/react';

export const fonts = {
  h0_B: css`
    font-size: 22px;
    line-height: 29px;
    font-family: 'gothic_bold';
  `,
  h1_R: css`
    font-size: 18px;
    font-family: 'gothic';
    line-height: 27px;
  `,
  h1_B: css`
    font-size: 18px;
    font-family: 'gothic_bold';
    line-height: 27px;
  `,
  bd1_R: css`
    font-size: 16px;
    font-family: 'gothic';
    line-height: 22px;
  `,
  bd1_B: css`
    font-size: 16px;
    font-family: 'gothic_bold';
    line-height: 22px;
  `,
  bd2_R: css`
    font-size: 14px;
    font-family: 'gothic';
    line-height: 20px;
  `,
  bd2_B: css`
    font-size: 14px;
    font-family: 'gothic_bold';
    line-height: 20px;
  `,
  p1_R: css`
    font-size: 12px;
    font-family: 'gothic';
    line-height: 16px;
  `,
  // 이하 안쓰는 폰트 -----------------------------------------------------------------
  h2_B: css`
    font-size: 19px;
    font-family: 'gothic_bold';
    line-height: 26px;
  `,
  h2_1_B: css`
    font-size: 18px;
    font-family: 'gothic_bold';
    line-height: 27px;
  `,
  h3_R: css`
    font-size: 17px;
    font-family: 'gothic';
    line-height: 24px;
  `,
  h3_B: css`
    font-size: 17px;
    font-family: 'gothic_bold';
    line-height: 24px;
  `,
  h3_1_R: css`
    font-size: 16px;
    font-family: 'gothic';
    line-height: 23px;
  `,
  h3_1_B: css`
    font-size: 16px;
    font-family: 'gothic_bold';
    line-height: 23px;
  `,
  h4_B: css`
    font-size: 15px;
    font-family: 'gothic_bold';
    line-height: 22px;
  `,
  bd3_R: css`
    font-size: 13px;
    font-family: 'gothic';
    line-height: 19px;
  `,
  p1_L: css`
    font-size: 11px;
    font-family: 'gothic_right';
    line-height: 16px;
  `,
  p2_L: css`
    font-size: 10px;
    font-family: 'gothic_right';
    line-height: 15px;
  `,
  p2_R: css`
    font-size: 10px;
    font-family: 'gothic';
    line-height: 15px;
  `,
};

export type IFont = keyof typeof fonts;
