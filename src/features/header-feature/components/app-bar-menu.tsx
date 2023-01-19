import { useId, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import classNames from 'classnames';

import { LeftMenuList } from '../index';

const COMPONENT_NAME = 'AppBarMenu';
const AppBarMenu = (props: {
  className?: string;
  currentDefaultUserName?: string;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, currentDefaultUserName, ...rest } = props;

  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setOpenMenu(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={openMenu}
        onClose={closeMenu}
        className="relative mt-20"
      >
        <LeftMenuList
          currentDefaultUserName={currentDefaultUserName}
          closeMenu={closeMenu}
        />
      </Drawer>
    </div>
  );
};

AppBarMenu.displayName = COMPONENT_NAME;

export { AppBarMenu };
