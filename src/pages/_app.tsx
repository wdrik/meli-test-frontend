import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AppContextProvider } from '../contexts/appContext';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default MyApp;
