import React, { useId } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import classNames from 'classnames';
import LinkNext from 'next/link';

import { urlHomePage } from '../../../../utils/url-home-page';

interface ListItemIconButtonProps {
  className?: string;
  url: string;
  onClick?: () => void;
  text: string;
  ListIcon: React.FC;
  onClickLogout?: () => void;
}

const COMPONENT_NAME = 'ListItemIconButton';
const ListItemIconButton = (props: ListItemIconButtonProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, url, text, onClick, onClickLogout, ListIcon, ...rest } =
    props;

  const onListItemClick = url ? onClick : onClickLogout;
  // convert url to new URL
  const newUrl = urlHomePage(url);

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <LinkNext href={newUrl} passHref>
        <ListItem button onClick={onListItemClick}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          {text}
        </ListItem>
      </LinkNext>
    </div>
  );
};

ListItemIconButton.displayName = COMPONENT_NAME;

export { ListItemIconButton };
