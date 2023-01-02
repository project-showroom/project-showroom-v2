import { ITextFieldProps } from './index';

export interface IFormAutoCompleteProps extends ITextFieldProps {
  tags?: Array<string | number>;
  setTags?: any;
}
