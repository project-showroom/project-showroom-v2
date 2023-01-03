import { useId } from 'react';

import TextField from '@mui/material/TextField';
import classNames from 'classnames';
import { Field } from 'formik';

import { ITextFieldProps } from '../../types/element-types/form-elements-types';

const COMPONENT_NAME = 'FormInput';
const FormInputText = (props: ITextFieldProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, name, type, ...rest } = props;

  return (
    <div id={id} className={classNames(className, COMPONENT_NAME)}>
      <Field type={type} name={name}>
        {({ field, meta }: any) => (
          <>
            <TextField
              id={id}
              variant="standard"
              fullWidth
              {...field}
              {...rest}
            />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </>
        )}
      </Field>
    </div>
  );
};

FormInputText.displayName = COMPONENT_NAME;

export { FormInputText };
