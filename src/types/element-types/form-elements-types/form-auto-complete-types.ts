import { Dispatch, SetStateAction } from 'react';

import { ITextFieldProps } from './index';

export interface IFormAutoCompleteProps extends ITextFieldProps {
  tags?: Array<string | number>;
  setTags?:
    | Dispatch<SetStateAction<(string | number)[] | undefined>>
    | Dispatch<SetStateAction<never[]>>
    | undefined;
}
