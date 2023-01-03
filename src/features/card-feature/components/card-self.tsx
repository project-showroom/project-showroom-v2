import { useId } from 'react';

import Card from '@mui/material/Card';
import classNames from 'classnames';

import { CardContentCombine } from './card-gallery-content/index';
import { CardGalleryHeader } from './card-gallery-header/index';
import { CardGalleryMedia } from './card-gallery-media/index';

const COMPONENT_NAME = 'CardSelf';
const CardSelf = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Card sx={{ maxWidth: 345 }}>
        <CardGalleryHeader />
        <CardGalleryMedia />
        <CardContentCombine />
      </Card>
    </div>
  );
};

CardSelf.displayName = COMPONENT_NAME;

export { CardSelf };
