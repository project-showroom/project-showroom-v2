import { useEffect } from 'react';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import {
  ThemeSwitch,
  HeaderTitle,
  LoginRegisterButton,
  AppBarMenu,
} from './index';
import { fetchUsers } from '../../store/take-user-slice';
import { IUserType } from '../../types/api-types';

const COMPONENT_NAME = 'HeaderFeature';
const HeaderFeature = (props: {
  darkMode: boolean;
  toggleDarkMode: (e: boolean) => void;
}) => {
  const { darkMode, toggleDarkMode } = props;

  const dispatch = useDispatch();
  const { user } = useSelector(
    (state: { user: { user: IUserType } }) => state.user,
  );

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  const currentUserDisplayName = user?.displayName;
  const currentDefaultUserName = user?.defaultUserName;

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
        {user && <AppBarMenu currentDefaultUserName={currentDefaultUserName} />}
      </div>

      <div className={headerTitleMenuClassNames}>
        <HeaderTitle
          currentUserDisplayName={currentUserDisplayName}
          currentDefaultUserName={currentDefaultUserName}
        />
      </div>
      <div className={headerRegisterThemeClassNames}>
        {!user && <LoginRegisterButton />}
        <ThemeSwitch
          toggleDarkMode={(e: boolean) => toggleDarkMode(e)}
          darkMode={darkMode}
        />
      </div>
    </>
  );
};

HeaderFeature.displayName = COMPONENT_NAME;

export { HeaderFeature };
