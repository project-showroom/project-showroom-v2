import classNames from 'classnames';

import { BaseTypography } from '../../../../components/typography-elements';

const typographyClassNames = classNames(
  'flex flex-col justify-between overflow-x-auto h-20 max-h-20 ',
);
const COMPONENT_NAME = 'CardGalleryExplanation';
const CardGalleryDescription = (props: { cardDescription?: string }) => {
  const { cardDescription } = props;

  return (
    <BaseTypography
      variant="body2"
      color="textSecondary"
      component="p"
      className={typographyClassNames}
    >
      {cardDescription}
    </BaseTypography>
  );
};

CardGalleryDescription.displayName = COMPONENT_NAME;

export { CardGalleryDescription };
