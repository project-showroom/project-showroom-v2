import { BaseTypography } from '../../../../components/typography-elements';

const COMPONENT_NAME = 'CardGalleryExplanation';
const CardGalleryDescription = (props: { cardDescription: string }) => {
  const { cardDescription } = props;

  return (
    <BaseTypography variant="body2" color="textSecondary" component="p">
      Card Description - {cardDescription}
    </BaseTypography>
  );
};

CardGalleryDescription.displayName = COMPONENT_NAME;

export { CardGalleryDescription };
