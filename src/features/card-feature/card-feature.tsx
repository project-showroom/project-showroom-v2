import { useId } from 'react';

import Grid from '@mui/material/Grid';
import classNames from 'classnames';

import { CardSelf } from './components/index';

const COMPONENT_NAME = 'CardFeature';
const CardFeature = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Grid>
        <CardSelf />
      </Grid>
    </div>
  );
};

CardFeature.displayName = COMPONENT_NAME;

export { CardFeature };
