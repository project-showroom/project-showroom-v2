import { useId } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import classNames from 'classnames';

const COMPONENT_NAME = 'LogOutIcon';
const LogOutIconElement = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <LogoutIcon />
    </div>
  );
};

LogOutIconElement.displayName = COMPONENT_NAME;

export { LogOutIconElement };
