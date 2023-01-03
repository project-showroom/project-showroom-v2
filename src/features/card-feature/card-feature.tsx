import { useId } from 'react';

import Card from '@mui/material/Card';
import classNames from 'classnames';

import { CardGalleryHeader } from './components/card-gallery-header/index';

const COMPONENT_NAME = 'CardFeature';
const CardFeature = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Card sx={{ maxWidth: 345 }}>
        <CardGalleryHeader />
      </Card>
    </div>
  );
};

CardFeature.displayName = COMPONENT_NAME;

export { CardFeature };
