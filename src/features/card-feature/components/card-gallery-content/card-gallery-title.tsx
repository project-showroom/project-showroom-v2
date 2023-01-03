import { useId } from 'react';

import classNames from 'classnames';

import { BaseTypography } from '../../../../components/typography-elements';

const COMPONENT_NAME = 'CardGalleryTitle';
const CardGalleryTitle = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <BaseTypography variant="h6" component="h2">
        {'title'}
      </BaseTypography>
    </div>
  );
};

CardGalleryTitle.displayName = COMPONENT_NAME;

export { CardGalleryTitle };
