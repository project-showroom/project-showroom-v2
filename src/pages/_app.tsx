import '../styles/globals.css';
import { useState } from 'react';

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
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const Theme = darkMode ? darkTheme : lightTheme;

  const headerClassNames = classNames(
    'flex fixed w-full h-16 justify-between items-center pl-2 py-3 z-10 font-bold bg-blue-600 text-white shadow-lg shadow-gray-300/50 ',
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
              <HeaderFeature
                darkMode={darkMode}
                toggleDarkMode={(e: boolean) => setDarkMode(e)}
              />
            </header>
            <Component {...pageProps} />
            <footer className="pt-28">
              <FooterFeature />
            </footer>
          </main>
        </NextThemeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
