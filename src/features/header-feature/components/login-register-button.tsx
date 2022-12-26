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

  const { ...rest } = props;

  const headerLoginClassNames = classNames('mr-6');

  return (
    <div id={id} {...rest} className={headerLoginClassNames}>
      <Button href="/api/google" variant="contained">
        <LoginIcon />
        <Box />
        <Typography>Login / Register</Typography>
      </Button>
    </div>
  );
};

LoginRegisterButton.displayName = COMPONENT_NAME;

export { LoginRegisterButton };
