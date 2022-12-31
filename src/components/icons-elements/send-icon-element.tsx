import { useId } from 'react';

import SendIcon from '@mui/icons-material/Send';
import classNames from 'classnames';

const COMPONENT_NAME = 'SendIcon';
const SendIconElement = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <SendIcon />
    </div>
  );
};

SendIconElement.displayName = COMPONENT_NAME;

export { SendIconElement };
