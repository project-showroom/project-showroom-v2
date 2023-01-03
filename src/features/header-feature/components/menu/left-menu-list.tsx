import { useId } from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import classNames from 'classnames';

import { MoveToInBoxIconElement } from '../../../../components/icons-elements';
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
    url: '/add-project',
    text: 'Add New Project',
  };

  const secondItem = {
    url: '/my-details',
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
            ListIcon={<MoveToInBoxIconElement />}
            onClick={closeMenu}
          />
          <Divider variant="middle" />
          <ListItemIconButton
            url={secondItem.url}
            text={secondItem.text}
            ListIcon={<MoveToInBoxIconElement />}
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