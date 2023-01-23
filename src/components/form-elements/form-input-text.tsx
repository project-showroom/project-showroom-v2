import { useId } from 'react';

import TextField from '@mui/material/TextField';
import classNames from 'classnames';
import { Field, FieldProps } from 'formik';

import { ITextFieldProps } from '../../types/element-types/form-elements-types';

const COMPONENT_NAME = 'FormInput';
const FormInputText = (props: ITextFieldProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, name, type, ...rest } = props;

  const errorClassNames = classNames('text-red-500 text-xs');
  return (
    <div id={id} className={classNames(className, COMPONENT_NAME)}>
      <Field type={type} name={name}>
        {({ field, meta }: FieldProps) => (
          <>
            {meta.touched && meta.error ? (
              <>
                <TextField
                  variant="standard"
                  fullWidth
                  error
                  {...field}
                  {...rest}
                />
                <div className={errorClassNames}>{meta.error}</div>
              </>
            ) : (
              <TextField variant="standard" fullWidth {...field} {...rest} />
            )}
          </>
        )}
      </Field>
    </div>
  );
};

FormInputText.displayName = COMPONENT_NAME;

export { FormInputText };
