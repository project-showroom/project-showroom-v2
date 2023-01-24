import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { getCookie } from 'cookies-next';
import { useDispatch, useSelector } from 'react-redux';

import {
  ThemeSwitch,
  HeaderTitle,
  LoginRegisterButton,
  AppBarMenu,
} from './index';
import { AppDispatch } from '../../store';
import { fetchUsers } from '../../store/take-user-slice';
import { IUserType } from '../../types/api-types';
import convertTokenId from '../../utils/convert-token-id';

const COMPONENT_NAME = 'HeaderFeature';
const HeaderFeature = (props: {
  darkMode: boolean;
  toggleDarkMode: (e: boolean) => void;
}) => {
  const { darkMode, toggleDarkMode } = props;

  const token = getCookie('token');
  const takenUserId = convertTokenId(token);

  const [userId, setUserId] = useState(takenUserId);

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector(
    (state: { user: { user: IUserType } }) => state.user,
  );

  useEffect(() => {
    if (!takenUserId) setUserId(null);
    dispatch(fetchUsers(userId));
  }, [dispatch, userId, takenUserId]);

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
