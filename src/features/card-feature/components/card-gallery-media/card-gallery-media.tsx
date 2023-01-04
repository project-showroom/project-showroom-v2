import { useId } from 'react';

import CardMedia from '@mui/material/CardMedia';
import classNames from 'classnames';

const COMPONENT_NAME = 'CardGalleryMedia';
const CardGalleryMedia = (props: {
  className?: string;
  cardImageUrl: string;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, cardImageUrl, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <CardMedia
        image={cardImageUrl}
        component="img"
        height="194"
        alt="Paella dish"
      />
    </div>
  );
};

CardGalleryMedia.displayName = COMPONENT_NAME;

export { CardGalleryMedia };
