import { useId } from 'react';

import classNames from 'classnames';

import { LogOutIconElement } from '../../../../components/icons-elements';
import { ListButton } from '../../../../components/list-item-button-components/list-button';

const COMPONENT_NAME = 'LogoutButton';
const LogoutButton = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  const onClickLogout = () => {
    console.log('clicked to signout');
  };

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <ListButton
        href="/"
        onClick={onClickLogout}
        icon={<LogOutIconElement />}
        text="Logout"
      />
    </div>
  );
};

LogoutButton.displayName = COMPONENT_NAME;

export { LogoutButton };
