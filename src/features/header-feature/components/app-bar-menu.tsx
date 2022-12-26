import { useId, useState } from 'react';

import { Divider, IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import classNames from 'classnames';

import { LogoutButton } from './logout/logout-button';
import { ListItemIconButton } from './menu/ListItemIconButton';

const COMPONENT_NAME = 'AppBarMenu';
const AppBarMenu = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  const firstItem = {
    url: '/add-project',
    text: 'Add New Project',
  };

  const secondItem = {
    url: '/my-details',
    text: 'Manege Your Details',
  };

  const themeClassNames = classNames(
    'dark:bg-gray-500 dark:text-white min-h-screen',
  );
  const menuClassNames = classNames('flex justify-between flex-col h-full');

  const LeftMenuList = () => (
    <List className={themeClassNames}>
      <div className={menuClassNames}>
        <div>
          <ListItemIconButton
            url={firstItem.url}
            text={firstItem.text}
            ListIcon={InboxIcon}
            onClick={closeMenu}
          />
          <Divider variant="middle" />
          <ListItemIconButton
            url={secondItem.url}
            text={secondItem.text}
            ListIcon={InboxIcon}
            onClick={closeMenu}
          />
          <Divider />
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </List>
  );

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
      <Drawer anchor={'left'} open={openMenu} onClose={closeMenu}>
        <LeftMenuList />
      </Drawer>
    </div>
  );
};

AppBarMenu.displayName = COMPONENT_NAME;

export { AppBarMenu };
