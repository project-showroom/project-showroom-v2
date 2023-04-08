import { useId, useState } from 'react';

import Box from '@mui/material/Box';
import classNames from 'classnames';
import { Formik, Form, FormikProps } from 'formik';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { SubmitButton } from '../../../../components/button-components';
import {
  FormAutoComplete,
  FormInputText,
} from '../../../../components/form-elements';
import { SendIconElement } from '../../../../components/icons-elements';
import { updateProject } from '../../../../libs/api/projects';
import { AppDispatch } from '../../../../store';
import { IAddProjectFormValues } from '../../../../types/element-types/form-elements-types';
import validationSchema from '../../../../utils/add-project-validation-schema';
import allTechs from '../../../../utils/all-techs.json';

const COMPONENT_NAME = 'EditProjectForm';
const EditProjectForm = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { username, cardid } = router.query;

  const { editProject } = useSelector(
    (state: { editProject: { editProject: IAddProjectFormValues } }) =>
      state.editProject,
  );

  const [tags, setTags] = useState(editProject?.skillTags);
  const [thumbnailUrl, setThumbnailUrl] = useState<string>(
    'https://fakeimg.pl/400x400/?text=No+Image',
  );

  const onSubmit = async (values: IAddProjectFormValues) => {
    dispatch(updateProject({ values, cardid }));
    router.push(`/${username}`);
  };

  const initialValues = {
    projectTitle: editProject?.projectTitle,
    thumbnailUrl: editProject?.thumbnailUrl,
    description: editProject?.description,
    skillTags: tags,
    leftButtonTitle: editProject?.leftButtonTitle,
    leftButtonUrl: editProject?.leftButtonUrl,
    rightButtonTitle: editProject?.rightButtonTitle,
    rightButtonUrl: editProject?.rightButtonUrl,
    userInfo: { ...editProject?.userInfo },
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
        onSubmit={(values) => {
          initialValues.rightButtonTitle = values.rightButtonTitle;
          initialValues.leftButtonTitle = values.leftButtonTitle;
          initialValues.skillTags = tags;
          onSubmit(initialValues);
        }}
      >
        {(props: FormikProps<IAddProjectFormValues>) => {
          setThumbnailUrl(props.values.thumbnailUrl || '');

          return (
            <Form>
              <FormInputText
                id="editProjectTitle"
                name="editProjectTitle"
                label="Project Title"
                placeholder="Project Title"
                type="text"
                defaultValue={editProject?.projectTitle}
                onChange={(e) => {
                  initialValues.projectTitle = e.target.value;
                }}
              />
              <div className={spaceClassNames} />
              <div className="flex justify-between items-center gap-1">
                <FormInputText
                  id="editThumbnailUrl"
                  name="editThumbnailUrl"
                  label="Thumbnail Url"
                  placeholder="Thumbnail Url"
                  type="url"
                  defaultValue={editProject?.thumbnailUrl}
                  onChange={(e) => {
                    initialValues.thumbnailUrl = e.target.value;
                  }}
                  className="w-5/6"
                />
                <img
                  className="w-14 h-14 sm:w-40 sm:h-40"
                  alt="Picture of the project"
                  src={thumbnailUrl}
                />
              </div>
              <div className={spaceClassNames} />
              <FormInputText
                id="editDescription"
                name="editDescription"
                label="Description"
                placeholder="Description"
                variant="outlined"
                type="text"
                multiline
                defaultValue={editProject?.description}
                onChange={(e) => {
                  initialValues.description = e.target.value;
                }}
              />

              <div className={spaceClassNames} />
              <FormAutoComplete
                id="editSkillTags"
                name="editSkillTags"
                label="Skill Tags (ex: ReactJs, Materialui)"
                helperText="If you cannot find your technology, you can write it anyway."
                setTags={setTags}
                tags={tags}
                allTechs={allTechs}
              />
              <div className={spaceClassNames} />
              <div className={leftRightButtonClassNames}>
                <FormInputText
                  id="leftButtonTitle"
                  name="leftButtonTitle"
                  label="Left Button Title"
                  className="w-full"
                  type="text"
                />
                <FormInputText
                  id="editLeftButtonUrl"
                  name="editLeftButtonUrl"
                  helperText="(If you don't have url for this button, please
        leave it empty)"
                  label="Left Button Url"
                  className="w-full"
                  type="url"
                  defaultValue={editProject?.leftButtonUrl}
                  onChange={(e) => {
                    initialValues.leftButtonUrl = e.target.value;
                  }}
                />
              </div>
              <div className={spaceClassNames} />
              <div className={leftRightButtonClassNames}>
                <FormInputText
                  id="rightButtonTitle"
                  name="rightButtonTitle"
                  label="Right Button Title"
                  className="w-full"
                  type="text"
                />
                <FormInputText
                  id="editRightButtonUrl"
                  name="editRightButtonUrl"
                  helperText="(If you don't have url for this button, please
        leave it empty)"
                  label="Right Button Url"
                  className="w-full"
                  type="url"
                  defaultValue={editProject?.rightButtonUrl}
                  onChange={(e) => {
                    initialValues.rightButtonUrl = e.target.value;
                  }}
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
                  Update
                </SubmitButton>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

EditProjectForm.displayName = COMPONENT_NAME;

export { EditProjectForm };
