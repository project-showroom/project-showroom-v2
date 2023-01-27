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
  setTags: (tags: string[]) => void;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { name, id: formId, label, helperText, tags, setTags } = props;

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
const top100Films = [
  { title: 'The Shawshank Redemption' },
  { title: 'The Godfather' },
  { title: 'The Godfather: Part II' },
  { title: 'The Dark Knight' },
  { title: '12 Angry Men' },
  { title: "Schindler's List" },
  { title: 'Pulp Fiction' },
];
