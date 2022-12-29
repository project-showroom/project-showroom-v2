import { useId } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import classNames from 'classnames';
import { Field } from 'formik';

interface FormAutoCompleteProps {
  className?: string;
  id?: string;
  name?: string;
  label?: string;
  helpertext?: string;
  tags?: Array<string | number>;
  setTags?: any;
  variant?: string;
}

const COMPONENT_NAME = 'FormAutoComplete';
const FormAutoComplete = (props: FormAutoCompleteProps) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const {
    className,
    name,
    id: formId,
    label,
    helpertext,
    tags,
    setTags,
  } = props;

  return (
    <div id={id} className={classNames(className, COMPONENT_NAME)}>
      <Field name={name}>
        {({ field, meta }: any) => (
          <>
            <Autocomplete
              multiple
              fullWidth
              freeSolo
              id={formId}
              value={tags}
              onChange={(_, newValue) => {
                setTags([...newValue]);
              }}
              options={top100Films.map((option) => option.title)}
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
                  helperText={helpertext}
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
const top100Films = [
  { title: 'The Shawshank Redemption' },
  { title: 'The Godfather' },
  { title: 'The Godfather: Part II' },
  { title: 'The Dark Knight' },
  { title: '12 Angry Men' },
  { title: "Schindler's List" },
  { title: 'Pulp Fiction' },
];
