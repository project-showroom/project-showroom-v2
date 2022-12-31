import { useId } from 'react';

import { ISubmitButtonType } from '../../types/element-types/button-elements-types';
import { SubmitTypeButton } from '../button-elements';

const COMPONENT_NAME = 'SubmitButton';
const SubmitButton = (props: ISubmitButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { children, ...rest } = props;

  return (
    <SubmitTypeButton id={id} {...rest}>
      {children}
    </SubmitTypeButton>
  );
};

SubmitButton.displayName = COMPONENT_NAME;

export { SubmitButton };
