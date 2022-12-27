import { useId } from 'react';

import { Box } from '@material-ui/core';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import { useTheme } from 'next-themes';

const COMPONENT_NAME = 'ThemeSwitch';
const ThemeSwitch = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;
  const { theme, setTheme } = useTheme();

  const themeSwitchClassnames = classNames('flex justify-end flex-auto');
  return (
    <>
      <div id={id} {...rest} className={className}>
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
