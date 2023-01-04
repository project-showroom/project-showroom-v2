import { CardActions } from '@mui/material';

import { SubmitButton } from '../../../../components/button-components';

const COMPONENT_NAME = 'CardGalleryButtons';
const CardGalleryButtons = () => {
  return (
    <CardActions className="flex justify-between">
      <SubmitButton
        href="/view-online"
        variant="contained"
        size="small"
        color="primary"
      >
        VIEW ONLINE
      </SubmitButton>
      <SubmitButton
        href="/view-codes"
        variant="contained"
        size="small"
        color="primary"
      >
        VIEW CODES
      </SubmitButton>
    </CardActions>
  );
};

CardGalleryButtons.displayName = COMPONENT_NAME;

export { CardGalleryButtons };
