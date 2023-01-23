import React from 'react';

export interface ITextFieldProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  variant?: 'standard' | 'filled' | 'outlined';
  multiline?: boolean;
  defaultValue?: string;
  helperText?: string;
  disabled?: boolean;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
