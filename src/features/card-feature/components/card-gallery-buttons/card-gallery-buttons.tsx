import { CardActions } from '@mui/material';

import { ViewButton } from '../../../../components/button-components';

const COMPONENT_NAME = 'CardGalleryButtons';
const CardGalleryButtons = (props: {
  leftButtonUrl: string | undefined;
  rightButtonUrl: string | undefined;
  leftButtonTitle: string | undefined;
  rightButtonTitle: string | undefined;
}) => {
  const { leftButtonUrl, rightButtonUrl, leftButtonTitle, rightButtonTitle } =
    props;
  return (
    <CardActions className="flex justify-between">
      <ViewButton
        href={leftButtonUrl}
        variant="contained"
        size="small"
        color="primary"
      >
        {leftButtonTitle}
      </ViewButton>
      <ViewButton
        href={rightButtonUrl}
        variant="contained"
        size="small"
        color="primary"
      >
        {rightButtonTitle}
      </ViewButton>
    </CardActions>
  );
};

CardGalleryButtons.displayName = COMPONENT_NAME;

export { CardGalleryButtons };
