import { useId } from 'react';

import Card from '@mui/material/Card';
import classNames from 'classnames';

import { CardSelfProps } from '../../../types/api-types';
import { IAddProjectFormValues } from '../../../types/element-types/form-elements-types';
import { CardGalleryButtons } from './card-gallery-buttons';
import { CardContentCombine } from './card-gallery-content';
import { CardGalleryHeader } from './card-gallery-header';
import { CardGalleryMedia } from './card-gallery-media';

const COMPONENT_NAME = 'CardItem';
const cardClassNames = classNames(
  'flex flex-col h-full justify-between bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100 shadow-lg rounded-2xl p-1',
  COMPONENT_NAME,
);
interface ICardItem extends CardSelfProps {
  cardItem: IAddProjectFormValues | undefined;
}
const CardItem = ({ className = '', cardItem, ...rest }: ICardItem) => {
  const id = useId() + '-' + COMPONENT_NAME;

  if (!cardItem) return null;

  return (
    <>
      <Card
        id={id}
        {...rest}
        className={classNames(className, COMPONENT_NAME, cardClassNames)}
      >
        <CardGalleryHeader
          cardUserName={cardItem?.userInfo?.displayName}
          cardId={cardItem?._id}
          cardUserId={cardItem?.userInfo?.userId}
          cardDefaultUserName={cardItem?.userInfo?.defaultUserName}
        />
        <CardGalleryMedia cardImageUrl={cardItem?.thumbnailUrl} />
        <CardContentCombine
          cardTitle={cardItem?.projectTitle}
          cardDescription={cardItem?.description}
          cardTags={cardItem?.skillTags}
        />
        <CardGalleryButtons
          leftButtonUrl={cardItem?.leftButtonUrl}
          leftButtonTitle={cardItem?.leftButtonTitle}
          rightButtonUrl={cardItem?.rightButtonUrl}
          rightButtonTitle={cardItem?.rightButtonTitle}
        />
      </Card>
    </>
  );
};

CardItem.displayName = COMPONENT_NAME;

export { CardItem };
