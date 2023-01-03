import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

import { CardHeaderAction } from './index';

const COMPONENT_NAME = 'CardGalleryHeader';
const CardGalleryHeader = () => {
  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe">firstLatter</Avatar>}
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
