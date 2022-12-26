import {
  ThemeSwitch,
  HeaderTitle,
  LoginRegisterButton,
  AppBarMenu,
} from './index';

const COMPONENT_NAME = 'HeaderFeature';
const HeaderFeature = () => {
  return (
    <>
      <AppBarMenu />
      <HeaderTitle />
      <LoginRegisterButton />
      <ThemeSwitch />
    </>
  );
};

HeaderFeature.displayName = COMPONENT_NAME;

export { HeaderFeature };
