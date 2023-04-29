import { useId } from 'react';

import Divider from '@mui/material/Divider';
import classNames from 'classnames';
import type { AppProps } from 'next/app';
import { useSelector } from 'react-redux';

import { LoadingSpinner } from '../../components/spinners';
import { useIfBiggerThan } from '../../hooks/use-if-bigger-than';
import { IUserType } from '../../types/api-types';
import { FooterFeature } from '../footer-feature/footer-feature';
import { LeftMenuList } from '../header-feature';
import { HeaderFeature } from '../header-feature/header-feature';

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
  const { user } = useSelector(
    (state: { user: { user: IUserType } }) => state.user,
  );

  const allLoaded = Object.values(reduxStates).every((el: any) => {
    return el.loading === false;
  });

  const matches = useIfBiggerThan({ size: 'md' });
  const currentDefaultUserName = user?.defaultUserName;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <LoadingSpinner isLoaded={allLoaded} />
      <>
        <HeaderFeature
          darkMode={darkMode}
          toggleDarkMode={(e: boolean) => setDarkMode(e)}
        />
      </>
      <main className="relative flex">
        {matches && user ? (
          <>
            <div className="top-16 relative flex" id="wide-screen-left-menu">
              <LeftMenuList currentDefaultUserName={currentDefaultUserName} />
              <Divider orientation="vertical" flexItem />
            </div>
            <div className="flex justify-center w-full">
              <Component {...pageProps} />
            </div>
          </>
        ) : (
          <div className="flex justify-center w-full">
            <Component {...pageProps} />
          </div>
        )}
      </main>
      <footer className="pt-28">
        <FooterFeature />
      </footer>
    </div>
  );
};

AppContent.displayName = COMPONENT_NAME;

export { AppContent };
