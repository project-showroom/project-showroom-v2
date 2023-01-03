import { useId } from 'react';

import classNames from 'classnames';

import { CardGalleryTitle } from './index';

const COMPONENT_NAME = 'CardContent';
const CardContent = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <CardGalleryTitle />
    </div>
  );
};

CardContent.displayName = COMPONENT_NAME;

export { CardContent };
