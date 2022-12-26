import classNames from 'classnames';

import {
  ThemeSwitch,
  HeaderTitle,
  LoginRegisterButton,
  AppBarMenu,
} from './index';

const COMPONENT_NAME = 'HeaderFeature';
const HeaderFeature = () => {
  const headerFeaturesClassNames = classNames(
    'flex flex-auto justify-end w-6/12',
  );
  return (
    <>
      <AppBarMenu />
      <HeaderTitle />
      <div className={headerFeaturesClassNames}>
        <LoginRegisterButton />
        <ThemeSwitch />
      </div>
    </>
  );
};

HeaderFeature.displayName = COMPONENT_NAME;

export { HeaderFeature };
