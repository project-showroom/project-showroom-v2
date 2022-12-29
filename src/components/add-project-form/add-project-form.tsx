import { useId, useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import classNames from 'classnames';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { FormAutoComplete, FormInputText } from '../form-elements/index';

interface MyFormValues {
  projectTitle: string;
  thumbnailUrl: string;
  description: string;
  skillTags: Array<string | number>;
  leftButtonTitle?: string;
  leftButtonUrl?: string;
  rightButtonTitle?: string;
  rightButtonUrl?: string;
}

const COMPONENT_NAME = 'AddProjectForm';
const AddProjectForm = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  const [tags, setTags] = useState<string[]>([]);

  const initialValues: MyFormValues = {
    projectTitle: '',
    thumbnailUrl: '',
    description: '',
    skillTags: [...tags],
    leftButtonTitle: 'View Online',
    leftButtonUrl: '',
    rightButtonTitle: 'View Codes',
    rightButtonUrl: '',
  };
  const validationSchema = yup.object({
    projectTitle: yup.string().required('Required'),
    thumbnailUrl: yup.string().required('Required'),
    leftButtonUrl: yup.string().required('Required'),
    rightButtonUrl: yup.string().required('Required'),
  });

  const buttonClassNames = classNames('flex justify-center md:justify-end');
  const spaceClassNames = classNames('flex flex-col h-full p-4 mt-2');
  const leftRightButtonClassNames = classNames('gap-3 md:flex ');
  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          values.skillTags = [...tags];
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <FormInputText
            id="projectTitle"
            name="projectTitle"
            placeholder="Project Title"
          />
          <div className={spaceClassNames} />
          <FormInputText
            id="thumbnailUrl"
            name="thumbnailUrl"
            placeholder="Thumbnail Url"
          />
          <div className={spaceClassNames} />
          <FormInputText
            id="description"
            name="description"
            placeholder="Description"
            variant="outlined"
            multiline
          />

          <div className={spaceClassNames} />
          <FormAutoComplete
            id="skillTags"
            name="skillTags"
            label="Skill Tags (ex: ReactJs, Materialui)"
            helpertext="If you cannot find your technology, you can write it anyway."
            setTags={setTags}
            tags={tags}
          />
          <div className={spaceClassNames} />
          <div className={leftRightButtonClassNames}>
            <FormInputText
              id="leftButtonTitle"
              name="leftButtonTitle"
              defaultValue="View Online"
              label="Left Button Title"
              disabled
              className="w-full"
            />
            <FormInputText
              id="leftButtonUrl"
              name="leftButtonUrl"
              helperText="(If you don't have url for this button, please
        leave it empty)"
              label="Left Button Url"
              className="w-full"
            />
          </div>
          <div className={spaceClassNames} />
          <div className={leftRightButtonClassNames}>
            <FormInputText
              id="rightButtonTitle"
              name="rightButtonTitle"
              defaultValue="View Codes"
              label="Right Button Title"
              disabled
              className="w-full"
            />
            <FormInputText
              id="rightButtonUrl"
              name="rightButtonUrl"
              helperText="(If you don't have url for this button, please
        leave it empty)"
              label="Right Button Url"
              className="w-full"
            />
          </div>
          <div className={spaceClassNames} />

          <Box className={buttonClassNames}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<Send />}
              type="submit"
              size="large"
            >
              Send
            </Button>
          </Box>
        </Form>
      </Formik>
    </div>
  );
};

AddProjectForm.displayName = COMPONENT_NAME;

export { AddProjectForm };
