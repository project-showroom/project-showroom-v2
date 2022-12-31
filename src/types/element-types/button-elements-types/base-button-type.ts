import React from 'react';

import { ButtonProps } from '@mui/material';

export interface IBaseButtonType extends ButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  Icon?: React.ReactNode;
}
