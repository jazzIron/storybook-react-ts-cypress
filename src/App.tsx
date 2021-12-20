import { ReactElement } from 'react';
import { Themes } from './theme';
import { ThemeProvider } from '@emotion/react';

function App(): ReactElement {
  return <ThemeProvider theme={Themes}></ThemeProvider>;
}

export default App;
