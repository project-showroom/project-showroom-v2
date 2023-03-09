import { useId } from 'react';

import { Button } from '@mui/material';

import { IButtonType } from '../../types/element-types/button-elements-types';

const COMPONENT_NAME = 'BaseButton';

const BaseButton = (props: IButtonType) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { buttonIcon, ...rest } = props;

  return <Button id={id} endIcon={buttonIcon} {...rest} />;
};

BaseButton.displayName = COMPONENT_NAME;

export { BaseButton };
