import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from '../src/GlobalStyle';
import { Themes } from '../src/theme';
import { customViewports } from './options/viewport';

export const parameters = {
  viewport: {
    viewports: customViewports,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <ThemeProvider theme={Themes}>
    <div id={'root'}></div>
    <RecoilRoot>
      <GlobalStyle />
      {/* <Router>
        <Routes>
          <Route path="*" element={story()} />
        </Routes>
      </Router>
      <Modal />
      <Alert />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Popup /> */}
    </RecoilRoot>
  </ThemeProvider>
));
