import { useId } from 'react';

import { Button } from '@mui/material';

import { IBaseButtonType } from '../../types/element-types/button-elements-types';

const COMPONENT_NAME = 'BaseButton';

const BaseButton = (props: IBaseButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { buttonIcon, ...rest } = props;

  return <Button id={id} endIcon={buttonIcon} {...rest} />;
};

BaseButton.displayName = COMPONENT_NAME;

export { BaseButton };
