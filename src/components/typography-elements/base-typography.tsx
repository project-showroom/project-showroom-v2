import { useId } from 'react';

import Typography from '@mui/material/Typography';

interface BaseTypographyProps {
  className?: string;
  title?: any;
  gutterBottom?: boolean;
  component?: string;
  variant?: any;
  color?: string;
  align?: any;
  children?: any;
}
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
