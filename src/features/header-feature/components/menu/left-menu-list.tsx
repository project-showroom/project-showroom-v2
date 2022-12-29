import { useId } from 'react';

import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import classNames from 'classnames';

import { LogoutButton, ListItemIconButton } from '../../index';

interface ListItemIconButtonProps {
  className?: string;
  closeMenu?: () => void;
}

const COMPONENT_NAME = 'LeftMenuList';
const LeftMenuList = (props: ListItemIconButtonProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, closeMenu, ...rest } = props;

  const firstItem = {
    url: 'add-project',
    text: 'Add New Project',
  };

  const secondItem = {
    url: 'my-details',
    text: 'Manege Your Details',
  };

  const themeClassNames = classNames(
    'flex flex-col justify-between dark:bg-gray-500 dark:text-white min-h-screen',
  );
  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <List className={themeClassNames}>
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
          <Divider />
          <LogoutButton />
        </div>
      </List>
    </div>
  );
};

LeftMenuList.displayName = COMPONENT_NAME;

export { LeftMenuList };
