import { useId } from 'react';

import { IButtonType } from '../../types/element-types/button-elements-types';
import { ViewTypeButton } from '../button-elements';

const COMPONENT_NAME = 'ViewButton';
const ViewButton = (props: IButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { children, ...rest } = props;

  return (
    <ViewTypeButton id={id} {...rest}>
      {children}
    </ViewTypeButton>
  );
};

ViewButton.displayName = COMPONENT_NAME;

export { ViewButton };
