import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import classNames from 'classnames';

const chipClassNames = classNames('p-3');
const COMPONENT_NAME = 'CardGalleryTags';
const CardGalleryTags = (props: {
  cardTags?: (string | number)[] | undefined;
}) => {
  const { cardTags } = props;

  if (!cardTags) return null;

  return (
    <Grid
      container
      className={classNames('flex justify-between max-h-14 overflow-auto')}
    >
      {cardTags?.map((chip) => (
        <div key={chip} className={chipClassNames}>
          <Chip label={chip} size="small" />
        </div>
      ))}
    </Grid>
  );
};

CardGalleryTags.displayName = COMPONENT_NAME;

export { CardGalleryTags };
