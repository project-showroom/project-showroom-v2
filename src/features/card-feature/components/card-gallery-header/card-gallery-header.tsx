import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

import convertTokenId from '../../../../utils/convert-token-id';
import { takeFirstLetter } from '../../../../utils/take-first-letter';
import { CardHeaderAction } from './index';

const COMPONENT_NAME = 'CardGalleryHeader';
const CardGalleryHeader = (props: {
  cardUserName?: string;
  cardId?: string;
  cardUserId?: string;
  cardDefaultUserName?: string;
  deleteCardById?: () => void;
}) => {
  const {
    cardUserName,
    cardId,
    cardUserId,
    cardDefaultUserName,
    deleteCardById,
  } = props;

  const userId = convertTokenId();

  const cardUserNameFirstLetter = takeFirstLetter(cardUserName);

  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe">{cardUserNameFirstLetter}</Avatar>}
      action={
        userId === cardUserId && (
          <CardHeaderAction
            cardId={cardId}
            cardDefaultUserName={cardDefaultUserName}
            deleteCardById={deleteCardById}
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
