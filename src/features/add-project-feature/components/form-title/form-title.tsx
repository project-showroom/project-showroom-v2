import { useId } from 'react';

import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const COMPONENT_NAME = 'FormTitle';
const FormTitle = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Typography gutterBottom variant="h4" component="h4" color="textPrimary">
        Add Project
      </Typography>
    </div>
  );
};

FormTitle.displayName = COMPONENT_NAME;

export { FormTitle };
