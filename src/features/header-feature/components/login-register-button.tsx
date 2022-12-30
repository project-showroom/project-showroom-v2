import { useId } from 'react';

import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import LogoutIcon from '@mui/icons-material/Logout';
import classNames from 'classnames';

const COMPONENT_NAME = 'LoginRegisterButton';
const LoginRegisterButton = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { ...rest } = props;

  const headerLoginClassNames = classNames('flex text-sm mr-1');
  const headerLoginTextClassNames = classNames('flex h-6 text-sm leading-3');
  return (
    <div id={id} {...rest} className={headerLoginClassNames}>
      <Button href="/api/google" variant="contained">
        <LoginIcon />
        <Box />
        <Typography className={headerLoginTextClassNames}>
          Sign In / Up
        </Typography>
      </Button>
    </div>
  );
};

LoginRegisterButton.displayName = COMPONENT_NAME;

export { LoginRegisterButton };
