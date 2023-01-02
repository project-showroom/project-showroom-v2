import React, { useId } from 'react';

import classNames from 'classnames';

import { ListButton } from '../../../../components/list-item-button-components/list-button';

// import { urlHomePage } from '../../../../utils/url-home-page';

interface ListItemIconButtonProps {
  className?: string;
  url: string;
  onClick?: () => void;
  text: string;
  ListIcon?: React.ReactNode;
  onClickLogout?: () => void;
}

const COMPONENT_NAME = 'ListItemIconButton';
const ListItemIconButton = (props: ListItemIconButtonProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, url, text, onClickLogout, ListIcon, ...rest } = props;

  // const onListItemClick = url ? onClick : onClickLogout;
  // convert url to new URL
  // const newUrl = urlHomePage(url);

  return (
    <>
      <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
        <ListButton
          href={url}
          onClick={onClickLogout}
          icon={ListIcon}
          text={text}
        />
      </div>
    </>
  );
};

ListItemIconButton.displayName = COMPONENT_NAME;

export { ListItemIconButton };
