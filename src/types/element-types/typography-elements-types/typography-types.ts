import React from 'react';

export interface BaseTypographyProps {
  className?: string;
  title?: string;
  gutterBottom?: boolean;
  component?: string;
  variant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  color?: string;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right' | undefined;
  children?: React.ReactNode;
}
