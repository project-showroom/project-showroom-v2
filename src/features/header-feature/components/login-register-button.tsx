import { useId } from 'react';

import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';
import classNames from 'classnames';

const COMPONENT_NAME = 'LoginRegisterButton';
const LoginRegisterButton = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Button href="/api/google" variant="contained">
        <LoginIcon />
        <Box />
        <Typography>Login / Register</Typography>
      </Button>
      {/* <Button variant="contained">
        <LogoutIcon />
        <Box sx={{ margin: '0 4px' }} />
        <Typography>Logout</Typography>
      </Button> */}
    </div>
  );
};

LoginRegisterButton.displayName = COMPONENT_NAME;

export { LoginRegisterButton };
