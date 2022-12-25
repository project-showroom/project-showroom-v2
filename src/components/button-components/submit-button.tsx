import { useId } from 'react';

import classNames from 'classnames';

import { ISubmitButtonType } from '../../types/element-types/button-elements-types';
import { SubmitTypeButton } from '../button-elements';

const COMPONENT_NAME = 'SubmitButton';
const SubmitButton = (props: ISubmitButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, submitCounter, ...rest } = props;

  return (
    <SubmitTypeButton
      id={id}
      {...rest}
      className={classNames(
        className,
        'bg-green', // All submit buttons will have this class
        COMPONENT_NAME,
      )}
    >
      Submit {submitCounter ? `+ ${submitCounter}` : ''}
    </SubmitTypeButton>
  );
};

SubmitButton.displayName = COMPONENT_NAME;

export { SubmitButton };
