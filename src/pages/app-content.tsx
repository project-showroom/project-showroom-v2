import { useId } from 'react';

import classNames from 'classnames';
import type { AppProps } from 'next/app';
import { useSelector } from 'react-redux';

import { LoadingSpinner } from '../components/spinners';
import { FooterFeature } from '../features/footer-feature/footer-feature';
import { HeaderFeature } from '../features/header-feature/header-feature';

const COMPONENT_NAME = 'AppContent';
const AppContent = ({
  AppProps,
  darkMode,
  setDarkMode,
  className = '',
  ...rest
}: {
  className?: string;
  AppProps: AppProps;
  darkMode: boolean;
  setDarkMode: (e: boolean) => void;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { Component, pageProps } = AppProps;

  const reduxStates = useSelector((state: any) => state);

  const allLoaded = Object.values(reduxStates).every((el: any) => {
    return el.loading === false;
  });

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <LoadingSpinner isLoaded={allLoaded} />
      <>
        <HeaderFeature
          darkMode={darkMode}
          toggleDarkMode={(e: boolean) => setDarkMode(e)}
        />
      </>
      <main className="relative">
        <Component {...pageProps} />
      </main>
      <footer className="pt-28">
        <FooterFeature />
      </footer>
    </div>
  );
};

AppContent.displayName = COMPONENT_NAME;

export { AppContent };
