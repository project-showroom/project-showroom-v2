import { useId } from 'react';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import classNames from 'classnames';

const COMPONENT_NAME = 'HelpIconButton';
const HelpIconButton = ({
  className = '',
  ...rest
}: {
  className?: string;
} & IconButtonProps) => {
  const id = useId() + '-' + COMPONENT_NAME;

  return (
    <IconButton
      id={id}
      {...rest}
      className={classNames(className, COMPONENT_NAME)}
      aria-label="help"
    >
      <HelpOutlineIcon />
    </IconButton>
  );
};

HelpIconButton.displayName = COMPONENT_NAME;

export { HelpIconButton };
