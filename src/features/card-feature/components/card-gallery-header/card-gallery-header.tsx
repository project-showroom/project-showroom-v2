import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

import { CardHeaderAction } from './index';
import { takeFirstLetter } from '../../../../utils/take-first-letter';

const COMPONENT_NAME = 'CardGalleryHeader';
const CardGalleryHeader = (props: { cardUserName: string }) => {
  const { cardUserName } = props;

  const cardUserNameFirstLetter = takeFirstLetter(cardUserName);

  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe">{cardUserNameFirstLetter}</Avatar>}
      action={<CardHeaderAction />}
      subheader={
        <>
          <span>Posted at </span>
          <span>{new Date().getFullYear()}</span>
        </>
      }
    />
  );
};

CardGalleryHeader.displayName = COMPONENT_NAME;

export { CardGalleryHeader };
