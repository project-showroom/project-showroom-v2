import { useState } from 'react';

import '../styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import classNames from 'classnames';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { FooterFeature } from '../features/footer-feature/footer-feature';
import { HeaderFeature } from '../features/header-feature/header-feature';
import store from '../store/index';
import { lightTheme, darkTheme } from '../utils/theme-mode';

function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  const Theme = darkMode ? darkTheme : lightTheme;

  const headerClassNames = classNames(
    'flex justify-between items-center pl-2 py-3 font-bold bg-blue-600 text-white shadow-lg shadow-gray-300/50 ',
  );
  return (
    <Provider store={store}>
      <Head>
        <title>PROJECT SHOWROOM - EMRE MUTLU & ERCAN AKALAR</title>
      </Head>

      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <NextThemeProvider attribute="class">
          <main>
            <header className={headerClassNames}>
              <HeaderFeature darkMode={darkMode} toggleDarkMode={setDarkMode} />
            </header>
            <Component {...pageProps} />
            <footer>
              <FooterFeature />
            </footer>
          </main>
        </NextThemeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
