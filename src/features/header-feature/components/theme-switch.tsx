import { useId, useEffect } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Switch } from '@mui/material';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
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

  const { theme, setTheme, resolvedTheme } = useTheme();
  const validTheme = theme === 'system' ? resolvedTheme : theme;

  const toggleTheme = () => {
    toggleDarkMode(!darkMode);
  };

  useEffect(() => {
    validTheme === 'dark' ? toggleDarkMode(true) : toggleDarkMode(false);
  }, [validTheme, toggleDarkMode]);

  return (
    <>
      <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
        <Box>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={toggleTheme}
                onClick={() => {
                  setTheme(validTheme === 'dark' ? 'light' : 'dark');
                }}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                icon={<LightModeIcon className="light-icon" />}
                checkedIcon={<DarkModeIcon className="dark-icon" />}
              />
            }
            label="Change Theme"
            labelPlacement="start"
          />
        </Box>
      </div>
    </>
  );
};

ThemeSwitch.displayName = COMPONENT_NAME;

export { ThemeSwitch };
