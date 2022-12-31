import React from 'react';

import { IBaseButtonType } from './index';

export interface ISubmitButtonType extends IBaseButtonType {
  children?: React.ReactNode;
  Icon?: React.ReactNode;
}
