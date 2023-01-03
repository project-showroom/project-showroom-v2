import { useId } from 'react';

import classNames from 'classnames';

import { ITextFieldProps } from '../../types/element-types/form-elements-types';
import { BaseTypography } from '../typography-elements';

const COMPONENT_NAME = 'FormTitle';
const FormTitleElement = (props: ITextFieldProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, children, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <BaseTypography
        gutterBottom
        variant="h4"
        component="h4"
        color="textPrimary"
      >
        {children}
      </BaseTypography>
    </div>
  );
};

FormTitleElement.displayName = COMPONENT_NAME;

export { FormTitleElement };
