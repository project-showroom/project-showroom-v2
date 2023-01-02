import { useId } from 'react';

import ListItemIcon from '@mui/material/ListItemIcon';
import classNames from 'classnames';

const COMPONENT_NAME = 'ListItemIconElement';
const ListItemIconElement = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <ListItemIcon />
    </div>
  );
};

ListItemIconElement.displayName = COMPONENT_NAME;

export { ListItemIconElement };
