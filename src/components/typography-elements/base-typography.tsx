import { useId } from 'react';

import Typography from '@mui/material/Typography';

import { BaseTypographyProps } from '../../types/element-types/typography-elements-types';

const COMPONENT_NAME = 'BaseTypography';
const BaseTypography = (props: BaseTypographyProps) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, children, ...rest } = props;

  return (
    <div id={id} className={className}>
      <Typography gutterBottom {...rest}>
        {children}
      </Typography>
    </div>
  );
};

BaseTypography.displayName = COMPONENT_NAME;

export { BaseTypography };
