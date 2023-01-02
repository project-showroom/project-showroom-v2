export interface ITextFieldProps {
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
}
