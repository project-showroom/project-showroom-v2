import React from 'react';

import { ButtonProps } from '@mui/material';

export interface IButtonType extends ButtonProps {
  href?: string | undefined;
  className?: string;
  children?: React.ReactNode;
  buttonIcon?: React.ReactNode;
  target?: string;
}
