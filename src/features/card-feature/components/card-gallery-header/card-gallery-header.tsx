import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { useSelector } from 'react-redux';

import { CardHeaderAction } from './index';
import { takeFirstLetter } from '../../../../utils/take-first-letter';

const COMPONENT_NAME = 'CardGalleryHeader';
const CardGalleryHeader = (props: {
  cardUserName: string;
  cardId: string;
  cardUserId: string;
  cardDefaultUserName: string;
}) => {
  const { cardUserName, cardId, cardUserId, cardDefaultUserName } = props;

  const { userId } = useSelector((state: any) => state.user);

  const cardUserNameFirstLetter = takeFirstLetter(cardUserName);

  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe">{cardUserNameFirstLetter}</Avatar>}
      action={
        userId === cardUserId && (
          <CardHeaderAction
            cardId={cardId}
            cardDefaultUserName={cardDefaultUserName}
          />
        )
      }
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
