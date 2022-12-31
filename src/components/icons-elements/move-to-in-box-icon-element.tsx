import { useId } from 'react';

import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import classNames from 'classnames';

const COMPONENT_NAME = 'MoveToInBoxIconElement';
const MoveToInBoxIconElement = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <MoveToInboxIcon />
    </div>
  );
};

MoveToInBoxIconElement.displayName = COMPONENT_NAME;

export { MoveToInBoxIconElement };
