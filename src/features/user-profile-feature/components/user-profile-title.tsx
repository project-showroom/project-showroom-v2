import { useId } from 'react';

import classNames from 'classnames';

const COMPONENT_NAME = 'UserProfileTitle';
const UserProfileTitle = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const titleClassNames = classNames(
    'flex justify-center p-10',
    COMPONENT_NAME,
  );
  return (
    <div id={id} {...rest} className={titleClassNames}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl">
        There will be userName {COMPONENT_NAME}
      </h1>
    </div>
  );
};

UserProfileTitle.displayName = COMPONENT_NAME;

export { UserProfileTitle };
