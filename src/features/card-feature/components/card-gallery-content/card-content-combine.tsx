import { useId } from 'react';

import CardContent from '@mui/material/CardContent';
import classNames from 'classnames';

import { CardGalleryTitle } from './index';

const COMPONENT_NAME = 'CardContentCombine';
const CardContentCombine = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <CardContent>
        <CardGalleryTitle />
      </CardContent>
    </div>
  );
};

CardContentCombine.displayName = COMPONENT_NAME;

export { CardContentCombine };
