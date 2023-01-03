import { useId } from 'react';

import CardMedia from '@mui/material/CardMedia';
import classNames from 'classnames';

const COMPONENT_NAME = 'CardGalleryMedia';
const CardGalleryMedia = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <CardMedia
        image={'thumbnailUrl'}
        title={'projectTitle'}
        component="img"
        height="194"
        alt="Paella dish"
      />
    </div>
  );
};

CardGalleryMedia.displayName = COMPONENT_NAME;

export { CardGalleryMedia };
