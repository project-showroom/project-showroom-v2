import { useId } from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import classNames from 'classnames';

const COMPONENT_NAME = 'CopyIconButton';
const CopyIconButton = ({
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
      aria-label="Copy-this-profile"
    >
      <ContentCopyIcon />
    </IconButton>
  );
};

CopyIconButton.displayName = COMPONENT_NAME;

export { CopyIconButton };
