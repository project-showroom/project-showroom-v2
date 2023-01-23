import ListItemIcon from '@mui/material/ListItemIcon';

import { IListButtonType } from '../../types/element-types/list-elements-types';

const COMPONENT_NAME = 'ListIcon';
const ListIcon = (props: IListButtonType) => {
  const { icon } = props;

  return <ListItemIcon>{icon}</ListItemIcon>;
};

ListIcon.displayName = COMPONENT_NAME;

export { ListIcon };
