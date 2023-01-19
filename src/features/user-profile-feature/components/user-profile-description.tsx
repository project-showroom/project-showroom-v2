import { useId } from 'react';

import classNames from 'classnames';

const COMPONENT_NAME = 'UserProfileDescription';
const UserProfileDescription = (props: {
  className?: string;
  profileDescription?: string;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, profileDescription, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      {profileDescription}
    </div>
  );
};

UserProfileDescription.displayName = COMPONENT_NAME;

export { UserProfileDescription };
