import { useId } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import classNames from 'classnames';

import { CardGalleryButtons } from './card-gallery-buttons';
import { CardContentCombine } from './card-gallery-content/index';
import { CardGalleryHeader } from './card-gallery-header/index';
import { CardGalleryMedia } from './card-gallery-media/index';

type CardSelfProps = {
  className?: string;
  userCards?: any;
};

const COMPONENT_NAME = 'CardSelf';
const cardGridClassNames = classNames('h-auto sm:h-[600px]', COMPONENT_NAME);
const cardContainerGridClassNames = classNames('flex flex-row', COMPONENT_NAME);
const cardClassNames = classNames(
  'flex flex-col h-full justify-between',
  COMPONENT_NAME,
);
const CardSelf = (props: CardSelfProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, userCards, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        className={cardContainerGridClassNames}
      >
        {userCards.map((cardItem: any, index: number) => (
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
                cardUserName={cardItem.userInfo.displayName}
                cardId={cardItem._id}
                cardUserId={cardItem.userInfo.userId}
              />
              <CardGalleryMedia cardImageUrl={cardItem.thumbnailUrl} />
              <CardContentCombine
                cardTitle={cardItem.projectTitle}
                cardDescription={cardItem.description}
                cardTags={cardItem.skillTags}
              />
              <CardGalleryButtons />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

CardSelf.displayName = COMPONENT_NAME;

export { CardSelf };
