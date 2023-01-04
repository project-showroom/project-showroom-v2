import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import classNames from 'classnames';

const chipClassNames = classNames('p-1');
const COMPONENT_NAME = 'CardGalleryTags';
const CardGalleryTags = (props: { cardTags: string[] }) => {
  const { cardTags } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
    >
      {cardTags.map((chip) => (
        <div key={chip} className={chipClassNames}>
          <Chip label={chip} size="small" />
        </div>
      ))}
    </Grid>
  );
};

CardGalleryTags.displayName = COMPONENT_NAME;

export { CardGalleryTags };
