import { useId } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import classNames from 'classnames';

import { ListItemIconButton } from '../../index';

const COMPONENT_NAME = 'LogoutButton';
const LogoutButton = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  const onClickLogout = () => {
    console.log('clicked to signout');
  };

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <ListItemIconButton
        url={'/'}
        text={'Logout'}
        ListIcon={LogoutIcon}
        onClickLogout={onClickLogout}
      />
    </div>
  );
};

LogoutButton.displayName = COMPONENT_NAME;

export { LogoutButton };
