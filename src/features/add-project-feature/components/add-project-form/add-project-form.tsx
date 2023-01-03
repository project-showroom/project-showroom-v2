import { useId, useState } from 'react';

import Box from '@mui/material/Box';
import classNames from 'classnames';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { SubmitButton } from '../../../../components/button-components';
import {
  FormAutoComplete,
  FormInputText,
} from '../../../../components/form-elements';
import { SendIconElement } from '../../../../components/icons-elements';
import { IAddProjectFormValues } from '../../../../types/element-types/form-elements-types';

const COMPONENT_NAME = 'AddProjectForm';
const AddProjectForm = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  const [tags, setTags] = useState<string[]>([]);

  const initialValues: IAddProjectFormValues = {
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

  const boxClassNames = classNames(
    'flex items-center bg-blue-500 w-max rounded md:absolute md:right-4 ',
  );
  const spaceClassNames = classNames('flex flex-col h-full p-4 mt-2');
  const leftRightButtonClassNames = classNames('gap-3 md:flex ');
  const headerLoginButtonClassNames = classNames('bg-blue-600');
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
            label="Project Title"
            placeholder="Project Title"
            type="text"
          />
          <div className={spaceClassNames} />
          <FormInputText
            id="thumbnailUrl"
            name="thumbnailUrl"
            label="Thumbnail Url"
            placeholder="Thumbnail Url"
            type="url"
          />
          <div className={spaceClassNames} />
          <FormInputText
            id="description"
            name="description"
            label="Description"
            placeholder="Description"
            variant="outlined"
            type="text"
            multiline
          />

          <div className={spaceClassNames} />
          <FormAutoComplete
            id="skillTags"
            name="skillTags"
            label="Skill Tags (ex: ReactJs, Materialui)"
            helperText="If you cannot find your technology, you can write it anyway."
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
              type="url"
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
              type="url"
            />
          </div>
          <div className={spaceClassNames} />

          <Box className={boxClassNames}>
            <SubmitButton
              className={headerLoginButtonClassNames}
              Icon={<SendIconElement />}
              type="submit"
              variant="contained"
              size="large"
            >
              Send
            </SubmitButton>
          </Box>
        </Form>
      </Formik>
    </div>
  );
};

AddProjectForm.displayName = COMPONENT_NAME;

export { AddProjectForm };
