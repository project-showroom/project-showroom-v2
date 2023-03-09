import { useId } from 'react';

import { IButtonType } from '../../types/element-types/button-elements-types';
import { SubmitTypeButton } from '../button-elements';

const COMPONENT_NAME = 'SingInUpButton';
const SingInUpButton = (props: IButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { children, ...rest } = props;

  return (
    <SubmitTypeButton id={id} {...rest}>
      {children}
    </SubmitTypeButton>
  );
};

SingInUpButton.displayName = COMPONENT_NAME;

export { SingInUpButton };
