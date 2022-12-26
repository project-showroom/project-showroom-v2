import React, { useId } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import classNames from 'classnames';
import LinkNext from 'next/link';

interface ListItemIconButtonProps {
  className?: string;
  url?: string;
  onClick: () => void;
  text: string;
  ListIcon: React.FC;
}

const COMPONENT_NAME = 'ListItemIconButton';
const ListItemIconButton = (props: ListItemIconButtonProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, url, text, onClick, ListIcon, ...rest } = props;

  if (url) {
    return (
      <LinkNext href={url} passHref>
        <ListItem button onClick={onClick}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          {text}
        </ListItem>
      </LinkNext>
    );
  }

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <ListItem onClick={onClick}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        {text}
      </ListItem>
    </div>
  );
};

ListItemIconButton.displayName = COMPONENT_NAME;

export { ListItemIconButton };
