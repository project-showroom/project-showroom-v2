import { useId, useState } from 'react';

import Box from '@mui/material/Box';
import classNames from 'classnames';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { SubmitButton } from '../../../../components/button-components';
import {
  FormAutoComplete,
  FormInputText,
} from '../../../../components/form-elements';
import { SendIconElement } from '../../../../components/icons-elements';
import { createProject } from '../../../../libs/api/projects';
import { AppDispatch } from '../../../../store';
import { IUserType } from '../../../../types/api-types';
import { IAddProjectFormValues } from '../../../../types/element-types/form-elements-types';
import validationSchema from '../../../../utils/add-project-validation-schema';
import { allTechs } from '../../../../utils/all-techs';

const COMPONENT_NAME = 'AddProjectForm';
const AddProjectForm = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  const [tags, setTags] = useState([]);

  const dispatch = useDispatch<AppDispatch>();

  const { user } = useSelector(
    (state: { user: { user: IUserType } }) => state.user,
  );
  const { _id: userId, defaultUserName, displayName } = user;

  const onSubmit = async (values: IAddProjectFormValues) => {
    if (values.projectTitle && values.thumbnailUrl) {
      setTags([]);
      dispatch(createProject(values));
    }
  };

  const initialValues: IAddProjectFormValues = {
    projectTitle: '',
    thumbnailUrl: '',
    description: '',
    skillTags: [],
    leftButtonTitle: 'View Online',
    leftButtonUrl: '',
    rightButtonTitle: 'View Codes',
    rightButtonUrl: '',
    userInfo: {
      userId: '',
      userEmail: '',
      defaultUserName: '',
      displayName: '',
    },
  };

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
          values.userInfo = {
            userId: userId,
            defaultUserName: defaultUserName,
            displayName: displayName,
          };
          onSubmit(values);
          actions.resetForm({
            values: { ...initialValues },
          });
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
            allTechs={allTechs}
            tags={tags}
          />
          <div className={spaceClassNames} />
          <div className={leftRightButtonClassNames}>
            <FormInputText
              id="leftButtonTitle"
              name="leftButtonTitle"
              placeholder="View Online"
              label="Left Button Title"
              className="w-full"
              type="text"
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
              placeholder="View Codes"
              label="Right Button Title"
              className="w-full"
              type="text"
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
              buttonIcon={<SendIconElement />}
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
