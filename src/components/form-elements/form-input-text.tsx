import { useId } from 'react';

import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { Field } from 'formik';

interface TextFieldProps {
  className?: string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  variant?: string;
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
    // <div id={id} className={classNames(className, COMPONENT_NAME)}>
    //   <TextField fullWidth {...rest} />
    // </div>
    <div id={id} className={classNames(className, COMPONENT_NAME)}>
      <Field name={name}>
        {({ field, meta }: any) => (
          <>
            <TextField fullWidth {...field} {...rest} />
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
