import { useId } from 'react';

import { IButtonType } from '../../types/element-types/button-elements-types';
import { BaseButton } from './base-button';

const COMPONENT_NAME = 'SubmitTypeButton';
const SubmitTypeButton = (props: IButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { ...rest } = props;

  return <BaseButton id={id} {...rest} />;
};

SubmitTypeButton.displayName = COMPONENT_NAME;

export { SubmitTypeButton };
