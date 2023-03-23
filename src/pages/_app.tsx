import '../styles/globals.css';
import { useState } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import store from '../store/index';
import { lightTheme, darkTheme } from '../utils/theme-mode';
import { AppContent } from './app-content';

function App(AppProps: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const Theme = darkMode ? darkTheme : lightTheme;

  return (
    <Provider store={store}>
      <Head>
        <title>PROJECT SHOWROOM - EMRE MUTLU & ERCAN AKALAR</title>
      </Head>

      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <NextThemeProvider attribute="class">
          <AppContent
            AppProps={AppProps}
            darkMode={darkMode}
            setDarkMode={(e: boolean) => setDarkMode(e)}
          />
          {/* <LoadingSpinner />
          <header className={headerClassNames}>
            <HeaderFeature
              darkMode={darkMode}
              toggleDarkMode={(e: boolean) => setDarkMode(e)}
            />
          </header>
          <main className="relative">
            <Component {...pageProps} />
          </main>
          <footer className="pt-28">
            <FooterFeature />
          </footer> */}
        </NextThemeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
