import { useId } from 'react';

import { IButtonType } from '../../types/element-types/button-elements-types';
import { BaseButton } from './base-button';

const COMPONENT_NAME = 'ViewTypeButton';
const ViewTypeButton = (props: IButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { ...rest } = props;

  return <BaseButton id={id} {...rest} />;
};

ViewTypeButton.displayName = COMPONENT_NAME;

export { ViewTypeButton };
