import { useId } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import classNames from 'classnames';
import { Field, FieldProps } from 'formik';

const COMPONENT_NAME = 'FormAutoComplete';
const FormAutoComplete = (props: {
  name: string;
  id: string;
  label: string;
  helperText: string;
  tags: (string | number)[] | undefined;
  setTags: any;
  allTechs: any;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const {
    name,
    id: formId,
    label,
    helperText,
    tags,
    setTags,
    allTechs,
  } = props;

  return (
    <div id={id} className={classNames(COMPONENT_NAME)}>
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <>
            <Autocomplete
              multiple
              fullWidth
              freeSolo
              id={formId}
              value={tags}
              onChange={(_, newValue) => {
                setTags([...newValue] as []);
              }}
              options={allTechs}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <div key={index}>
                    <Chip
                      variant="outlined"
                      label={option}
                      size="small"
                      {...getTagProps({ index })}
                    />
                  </div>
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...field}
                  variant="outlined"
                  label={label}
                  placeholder="Favorites"
                  helperText={helperText}
                />
              )}
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

FormAutoComplete.displayName = COMPONENT_NAME;

export { FormAutoComplete };
