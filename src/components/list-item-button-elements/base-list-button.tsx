import ListItemButton from '@mui/material/ListItemButton';

import { IListButtonType } from '../../types/element-types/list-elements-types';

const COMPONENT_NAME = 'BaseListButton';
const BaseListButton = (props: IListButtonType) => {
  const { children, ...rest } = props;

  return (
    <ListItemButton {...rest} component="a">
      {children}
    </ListItemButton>
  );
};

BaseListButton.displayName = COMPONENT_NAME;

export { BaseListButton };
