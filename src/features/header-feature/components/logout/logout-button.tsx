import { useId } from 'react';

import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import classNames from 'classnames';
import LinkNext from 'next/link';

import { ListItemIconButton } from '../menu/ListItemIconButton';

const COMPONENT_NAME = 'LogoutButton';
const LogoutButton = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  const logoutClassNames = classNames('');

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <ListItemIconButton
        url={'/logout'}
        text={'Logout'}
        ListIcon={LogoutIcon}
      />
    </div>
  );
};

LogoutButton.displayName = COMPONENT_NAME;

export { LogoutButton };
