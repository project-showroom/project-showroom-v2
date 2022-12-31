import { useId } from 'react';

import LoginIcon from '@mui/icons-material/Login';
import classNames from 'classnames';

const COMPONENT_NAME = 'LogInIcon';
const LogInIconElement = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <LoginIcon />
    </div>
  );
};

LogInIconElement.displayName = COMPONENT_NAME;

export { LogInIconElement };
