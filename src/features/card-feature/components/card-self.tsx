import { useId } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import classNames from 'classnames';

import { CardSelfProps } from '../../../types/api-types';
import { IAddProjectFormValues } from '../../../types/element-types/form-elements-types';
import { CardGalleryButtons } from './card-gallery-buttons';
import { CardContentCombine } from './card-gallery-content/index';
import { CardGalleryHeader } from './card-gallery-header/index';
import { CardGalleryMedia } from './card-gallery-media/index';

const COMPONENT_NAME = 'CardSelf';
const cardGridClassNames = classNames('h-auto sm:h-[600px]', COMPONENT_NAME);
const cardContainerGridClassNames = classNames('flex flex-row', COMPONENT_NAME);
const cardClassNames = classNames(
  'flex flex-col h-full justify-between',
  COMPONENT_NAME,
);
const CardSelf = (props: CardSelfProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, userCards, deleteCardById } = props;

  if (!userCards) return null;

  return (
    <div id={id} className={classNames(className, COMPONENT_NAME)}>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        className={cardContainerGridClassNames}
      >
        {userCards?.map(
          (cardItem: IAddProjectFormValues | undefined, index: number) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              className={cardGridClassNames}
            >
              <Card className={cardClassNames}>
                <CardGalleryHeader
                  cardUserName={cardItem?.userInfo?.displayName}
                  cardId={cardItem?._id}
                  cardUserId={cardItem?.userInfo?.userId}
                  cardDefaultUserName={cardItem?.userInfo?.defaultUserName}
                  deleteCardById={() => deleteCardById(cardItem?._id)}
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
            </Grid>
          ),
        )}
      </Grid>
    </div>
  );
};

CardSelf.displayName = COMPONENT_NAME;

export { CardSelf };
