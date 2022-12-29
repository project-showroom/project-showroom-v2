import { useId, useState } from 'react';

import { IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';

import { LeftMenuList } from '../index';

const COMPONENT_NAME = 'AppBarMenu';
const AppBarMenu = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;
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
        anchor={'left'}
        open={openMenu}
        onClose={closeMenu}
        className="relative mt-20"
      >
        <LeftMenuList closeMenu={closeMenu} />
      </Drawer>
    </div>
  );
};

AppBarMenu.displayName = COMPONENT_NAME;

export { AppBarMenu };
