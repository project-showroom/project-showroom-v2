import { useId } from 'react';

import { IViewButtonType } from '../../types/element-types/button-elements-types';
import { SubmitTypeButton } from '../button-elements';

const COMPONENT_NAME = 'ViewButton';
const ViewButton = (props: IViewButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { children, ...rest } = props;

  return (
    <SubmitTypeButton id={id} {...rest}>
      {children}
    </SubmitTypeButton>
  );
};

ViewButton.displayName = COMPONENT_NAME;

export { ViewButton };
