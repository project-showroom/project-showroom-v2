import { useId } from 'react';

import CardContent from '@mui/material/CardContent';
import classNames from 'classnames';

import {
  CardGalleryDescription,
  CardGalleryTagsTitle,
  CardGalleryTitle,
  CardGalleryTags,
} from './index';

const COMPONENT_NAME = 'CardContentCombine';
const CardContentCombine = (props: {
  className?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardTags: (string | number)[] | undefined;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, cardTitle, cardDescription, cardTags, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <CardContent className="grow">
        <CardGalleryTitle cardTitle={cardTitle} />
        <CardGalleryDescription cardDescription={cardDescription} />
        <CardGalleryTagsTitle />
        <CardGalleryTags cardTags={cardTags} />
      </CardContent>
    </div>
  );
};

CardContentCombine.displayName = COMPONENT_NAME;

export { CardContentCombine };
