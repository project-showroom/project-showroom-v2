import { useId } from 'react';

import classNames from 'classnames';

const COMPONENT_NAME = 'MyDetailsFuture';
const MyDetailsFeature = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      {COMPONENT_NAME}
    </div>
  );
};

MyDetailsFeature.displayName = COMPONENT_NAME;

export { MyDetailsFeature };
