import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { getCookie } from 'cookies-next';

import { CardHeaderAction } from './index';
import convertTokenId from '../../../../utils/convert-token-id';
import { takeFirstLetter } from '../../../../utils/take-first-letter';

const COMPONENT_NAME = 'CardGalleryHeader';
const CardGalleryHeader = (props: {
  cardUserName: string;
  cardId: string;
  cardUserId: string;
  cardDefaultUserName: string;
}) => {
  const { cardUserName, cardId, cardUserId, cardDefaultUserName } = props;

  const token = getCookie('token');
  const userId = convertTokenId(token);

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
