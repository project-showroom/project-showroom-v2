import { Box } from '@mui/material';

import { BaseTypography } from '../../../../components/typography-elements';

const COMPONENT_NAME = 'CardGalleryTagsTitle';
const CardGalleryTagsTitle = () => {
  return (
    <Box display="flex" justifyContent="center">
      <BaseTypography variant="h6">TECHNOLOGIES</BaseTypography>
    </Box>
  );
};

CardGalleryTagsTitle.displayName = COMPONENT_NAME;

export { CardGalleryTagsTitle };
