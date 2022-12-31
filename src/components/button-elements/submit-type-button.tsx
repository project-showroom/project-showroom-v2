import { useId } from 'react';

import { IBaseButtonType } from '../../types/element-types/button-elements-types';
import { BaseButton } from './base-button';

const COMPONENT_NAME = 'SubmitTypeButton';
const SubmitTypeButton = (props: IBaseButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { ...rest } = props;

  // Server'a istek atmadan önce formun validasyonunu yapmak için

  return <BaseButton id={id} type="submit" {...rest} />;
};

SubmitTypeButton.displayName = COMPONENT_NAME;

export { SubmitTypeButton };
