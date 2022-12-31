import '../styles/globals.css';
import classNames from 'classnames';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { HeaderFeature } from '../features/header-feature/header-feature';
import store from '../store';

export default function App({ Component, pageProps }: AppProps) {
  const headerClassNames = classNames(
    'flex justify-between items-center pl-2 py-3 font-bold bg-blue-600 text-white shadow-lg shadow-gray-300/50',
  );
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
        <main>
          <header className={headerClassNames}>
            <HeaderFeature />
          </header>
          <Component {...pageProps} />
        </main>
      </Provider>
    </ThemeProvider>
  );
}
