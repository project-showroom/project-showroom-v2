import { useId } from 'react';
import * as React from 'react';

import classNames from 'classnames';

import { HelpIconButton } from './help-icon-button';
import { HowToUseModal } from './how-to-use-modal';

const COMPONENT_NAME = 'HowToUse';
const HowToUse = ({ className = '', ...rest }: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <HelpIconButton onClick={handleOpen} />
      <HowToUseModal onClose={handleClose} open={open} />
    </div>
  );
};

HowToUse.displayName = COMPONENT_NAME;

export { HowToUse };
