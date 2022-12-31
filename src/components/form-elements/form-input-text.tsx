import { useId } from 'react';

import TextField from '@mui/material/TextField';
import classNames from 'classnames';
import { Field } from 'formik';

interface TextFieldProps {
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

const COMPONENT_NAME = 'FormInput';
const FormInputText = (props: TextFieldProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, name, ...rest } = props;

  return (
    <div id={id} className={classNames(className, COMPONENT_NAME)}>
      <Field name={name}>
        {({ field, meta }: any) => (
          <>
            <TextField variant="standard" fullWidth {...field} {...rest} />
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
