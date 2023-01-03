import '../styles/globals.css';
import classNames from 'classnames';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { FooterFeature } from '../features/footer-feature/footer-feature';
import { HeaderFeature } from '../features/header-feature/header-feature';
import store from '../store';

export default function App({ Component, pageProps }: AppProps) {
  const headerClassNames = classNames(
    'flex justify-between items-center pl-2 py-3 font-bold bg-blue-600 text-white shadow-lg shadow-gray-300/50',
  );
  const footerClassNames = classNames('dark:bg-gray-500');
  return (
    <>
      <Head>
        <title>PROJECT SHOWROOM - EMRE MUTLU & ERCAN AKALAR</title>
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Provider store={store}>
          <main>
            <header className={headerClassNames}>
              <HeaderFeature />
            </header>

            <Component {...pageProps} />
            <footer className={footerClassNames}>
              <FooterFeature />
            </footer>
          </main>
        </Provider>
      </ThemeProvider>
    </>
  );
}
