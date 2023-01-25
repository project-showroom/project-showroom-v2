import React, { useId } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';

import { ListButton } from '../../../../components/list-item-button-components/list-button';
import { urlHomePage } from '../../../../utils/url-home-page';

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

  const router = useRouter();
  const newUrl = urlHomePage(url);
  const onClick = () => {
    router.push(newUrl);
  };

  const onListItemClick = url ? onClick : onClickLogout;

  return (
    <>
      <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
        <ListButton onClick={onListItemClick} icon={ListIcon} text={text} />
      </div>
    </>
  );
};

ListItemIconButton.displayName = COMPONENT_NAME;

export { ListItemIconButton };
