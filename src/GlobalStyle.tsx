import { css, Global } from '@emotion/react';
import { Gothic, GothicBold, GothicLight, GothicUltraLight } from './assets/fonts/';

export default function GlobalStyle(): JSX.Element {
  return (
    <Global
      styles={css`
        /* reset */
        body,
        div,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        table,
        th,
        td,
        form,
        fieldset,
        legend,
        textarea,
        input,
        select,
        textarea,
        button,
        article,
        aside,
        dialog,
        footer,
        header,
        section,
        footer,
        nav,
        figure,
        main {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        * {
          -moz-osx-font-smoothing: grayscale;
        }

        article,
        aside,
        dialog,
        footer,
        header,
        section,
        footer,
        nav,
        figure,
        main {
          display: block;
        }

        html,
        body {
          height: 100%;
          -webkit-text-size-adjust: none;
          -ms-text-size-adjust: none;
          scroll-behavior: smooth;
        }

        #root {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        img,
        form,
        fieldset,
        svg,
        li {
          border: 0;
          vertical-align: top;
        }

        ul,
        ol {
          list-style: none;
        }

        button {
          overflow: visible;
          border: 0;
          background-color: transparent;
          cursor: pointer;
        }

        button:disabled {
          cursor: default;
        }

        button::-moz-focus-inner {
          padding: 0;
          margin: -1px;
        }

        /* input,
        button,
        select {
          -webkit-border-radius: 0;
          border-radius: 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: 0;
        } */

        address,
        caption,
        em {
          font-style: normal;
        }

        a,
        a:focus,
        a:active,
        a:hover {
          text-decoration: none;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        label {
          cursor: pointer;
        }

        /* modal */
        /* .ReactModal__Body--open {
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
        } */

        @font-face {
          font-family: 'gothic';
          src: url(${Gothic});
        }
        @font-face {
          font-family: 'gothic_bold';
          src: url(${GothicBold});
        }
        @font-face {
          font-family: 'gothic_right';
          src: url(${GothicLight});
        }
        @font-face {
          font-family: 'gothic_ultra_right';
          src: url(${GothicUltraLight});
        }
      `}
    />
  );
}
