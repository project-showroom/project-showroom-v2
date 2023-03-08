import { CardActions } from '@mui/material';

import { ViewButton } from '../../../../components/button-components';

const COMPONENT_NAME = 'CardGalleryButtons';
const CardGalleryButtons = (props: {
  leftButtonUrl: string | undefined;
  rightButtonUrl: string | undefined;
}) => {
  const { leftButtonUrl, rightButtonUrl } = props;
  console.log(leftButtonUrl);
  return (
    <CardActions className="flex justify-between">
      <ViewButton
        href={leftButtonUrl}
        variant="contained"
        size="small"
        color="primary"
      >
        VIEW ONLINE
      </ViewButton>
      <ViewButton
        href={rightButtonUrl}
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
