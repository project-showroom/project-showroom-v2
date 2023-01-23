import { useId, useEffect } from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Switch } from '@mui/material';
import Box from '@mui/material/Box';
import classNames from 'classnames';
import { useTheme } from 'next-themes';

const COMPONENT_NAME = 'ThemeSwitch';
const ThemeSwitch = (props: {
  className?: string;
  darkMode: boolean;
  toggleDarkMode: (e: boolean) => void;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, darkMode, toggleDarkMode, ...rest } = props;

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    toggleDarkMode(!darkMode);
  };

  useEffect(() => {
    theme === 'dark' ? toggleDarkMode(true) : toggleDarkMode(false);
  }, [theme, toggleDarkMode]);

  return (
    <>
      <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
        <Box>
          <Switch
            checked={darkMode}
            onChange={toggleTheme}
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            icon={theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            checkedIcon={
              theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
            }
          />
        </Box>
      </div>
    </>
  );
};

ThemeSwitch.displayName = COMPONENT_NAME;

export { ThemeSwitch };
