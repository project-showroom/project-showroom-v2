import { useId } from 'react';

import classNames from 'classnames';

const COMPONENT_NAME = 'UserProfileDescription';
const UserProfileDescription = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      I developed my projects in NextJs and React by focusing mainly on clean
      and reusable code concepts which are based on SOLID principles and design
      patterns. {COMPONENT_NAME}
    </div>
  );
};

UserProfileDescription.displayName = COMPONENT_NAME;

export { UserProfileDescription };
