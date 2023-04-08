import '../styles/globals.css';
import { useState } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';

import { AppContent } from '../features/app-feature/app-content';
import store from '../store/index';
import { lightTheme, darkTheme } from '../utils/theme-mode';

function App(AppProps: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const Theme = darkMode ? darkTheme : lightTheme;

  return (
    <Provider store={store}>
      <NextNProgress color="green" showOnShallow height={8} />
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
        </NextThemeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
