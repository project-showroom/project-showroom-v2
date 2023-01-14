import { useEffect } from 'react';

import classNames from 'classnames';

import {
  ThemeSwitch,
  HeaderTitle,
  LoginRegisterButton,
  AppBarMenu,
} from './index';

const COMPONENT_NAME = 'HeaderFeature';
const HeaderFeature = (props: any) => {
  const { darkMode, toggleDarkMode, token, user } = props;

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(user.data));
  // }, [user]);

  const headerTitleMenuClassNames = classNames(
    'flex items-center justify-center',
  );
  const headerRegisterThemeClassNames = classNames(
    'flex items-center justify-end',
  );
  return (
    // When user signIn, show MenuBar.
    // When user signOut, show Login/Register button.
    <>
      <div className={headerTitleMenuClassNames}>{token && <AppBarMenu />}</div>
      <div className={headerTitleMenuClassNames}>
        <HeaderTitle user={user} />
      </div>
      <div className={headerRegisterThemeClassNames}>
        {!token && <LoginRegisterButton />}
        <ThemeSwitch toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </>
  );
};

HeaderFeature.displayName = COMPONENT_NAME;

export { HeaderFeature };
