import { useId } from 'react';

import CardMedia from '@mui/material/CardMedia';
import classNames from 'classnames';

const COMPONENT_NAME = 'CardGalleryMedia';
const cardMediaClassNames = classNames('h-48 ', COMPONENT_NAME);
const CardGalleryMedia = (props: { cardImageUrl?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { cardImageUrl, ...rest } = props;

  return (
    <div id={id} {...rest} className={cardMediaClassNames}>
      <CardMedia
        className="h-full"
        image={cardImageUrl}
        component="img"
        alt="Paella dish"
      />
    </div>
  );
};

CardGalleryMedia.displayName = COMPONENT_NAME;

export { CardGalleryMedia };
