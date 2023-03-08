import { CardActions } from '@mui/material';

import { ViewButton } from '../../../../components/button-components';

const COMPONENT_NAME = 'CardGalleryButtons';
const CardGalleryButtons = () => {
  return (
    <CardActions className="flex justify-between">
      <ViewButton
        href="/view-online"
        variant="contained"
        size="small"
        color="primary"
      >
        VIEW ONLINE
      </ViewButton>
      <ViewButton
        href="/view-codes"
        variant="contained"
        size="small"
        color="primary"
      >
        VIEW CODES
      </ViewButton>
    </CardActions>
  );
};

CardGalleryButtons.displayName = COMPONENT_NAME;

export { CardGalleryButtons };
