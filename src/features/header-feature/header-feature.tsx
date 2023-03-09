import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../libs/api/user';
import { AppDispatch } from '../../store';
import { IUserType } from '../../types/api-types';
import convertTokenId from '../../utils/convert-token-id';
import {
  ThemeSwitch,
  HeaderTitle,
  LoginRegisterButton,
  AppBarMenu,
} from './index';

const COMPONENT_NAME = 'HeaderFeature';
const HeaderFeature = (props: {
  darkMode: boolean;
  toggleDarkMode: (e: boolean) => void;
}) => {
  const { darkMode, toggleDarkMode } = props;

  const takenUserId = convertTokenId();

  const [userId, setUserId] = useState(takenUserId);

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector(
    (state: { user: { user: IUserType } }) => state.user,
  );

  useEffect(() => {
    if (!takenUserId) setUserId('');
    dispatch(getUser(userId));
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
