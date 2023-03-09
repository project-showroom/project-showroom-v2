import React from 'react';

import { ListItemButtonBaseProps } from '@mui/material';

export interface IListButtonType extends ListItemButtonBaseProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  variant?: string;
  size?: string;
  color?: string;
  target?: string;
  LinkComponent?: React.ElementType;
}
