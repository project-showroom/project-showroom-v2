import classNames from 'classnames';

import {
  ThemeSwitch,
  HeaderTitle,
  LoginRegisterButton,
  AppBarMenu,
} from './index';

const COMPONENT_NAME = 'HeaderFeature';
const HeaderFeature = (props: any) => {
  const { darkMode, toggleDarkMode } = props;

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
      <div className={headerTitleMenuClassNames}>
        <AppBarMenu />
      </div>
      <div className={headerTitleMenuClassNames}>
        <HeaderTitle />
      </div>
      <div className={headerRegisterThemeClassNames}>
        <LoginRegisterButton />
        <ThemeSwitch toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </>
  );
};

HeaderFeature.displayName = COMPONENT_NAME;

export { HeaderFeature };
