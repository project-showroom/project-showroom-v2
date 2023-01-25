import { useId } from 'react';

import { BaseButton } from './base-button';
import { IBaseButtonType } from '../../types/element-types/button-elements-types';

const COMPONENT_NAME = 'SubmitTypeButton';
const SubmitTypeButton = (props: IBaseButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { ...rest } = props;

  return <BaseButton id={id} {...rest} />;
};

SubmitTypeButton.displayName = COMPONENT_NAME;

export { SubmitTypeButton };
