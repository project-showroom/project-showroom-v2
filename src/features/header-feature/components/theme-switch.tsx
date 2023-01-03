import { useId } from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import classNames from 'classnames';
import { useTheme } from 'next-themes';

const COMPONENT_NAME = 'ThemeSwitch';
const ThemeSwitch = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
        <Box>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}
            color="inherit"
          >
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </div>
    </>
  );
};

ThemeSwitch.displayName = COMPONENT_NAME;

export { ThemeSwitch };