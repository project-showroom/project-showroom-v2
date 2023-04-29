import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { useIfBiggerThan } from '../../hooks/use-if-bigger-than';
import { getUser } from '../../libs/api/user';
import { AppDispatch } from '../../store';
import { IUserType } from '../../types/api-types';
import convertTokenId from '../../utils/convert-token-id';
import { HowToUse } from './components/help/how-to-use';
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

  const matches = useIfBiggerThan({ size: 'md' });

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
    'flex items-center justify-end gap-4 mr-4',
  );

  return (
    <header
      className={classNames(
        'flex fixed w-full h-16 justify-between items-center p-2 z-10 font-bold bg-blue-600 text-white shadow-md shadow-gray-300/50',
      )}
    >
      <div className={headerTitleMenuClassNames}>
        {!matches && user && (
          <AppBarMenu
            currentDefaultUserName={currentDefaultUserName}
            className={headerTitleMenuClassNames}
          />
        )}
      </div>

      <div className={headerTitleMenuClassNames}>
        <HeaderTitle
          currentUserDisplayName={currentUserDisplayName}
          currentDefaultUserName={currentDefaultUserName}
          className={headerTitleMenuClassNames}
        />
      </div>
      <div className="flex gap-2">
        <div className={headerRegisterThemeClassNames}>
          {!user && <LoginRegisterButton />}
          <ThemeSwitch
            toggleDarkMode={(e: boolean) => toggleDarkMode(e)}
            darkMode={darkMode}
          />
        </div>
        <div id="how-to-use">
          <HowToUse />
        </div>
      </div>
    </header>
  );
};

HeaderFeature.displayName = COMPONENT_NAME;

export { HeaderFeature };
