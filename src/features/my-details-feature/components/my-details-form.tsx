import { useId, useState } from 'react';

import Box from '@mui/material/Box';
import classNames from 'classnames';
import { Formik, Form, FormikProps } from 'formik';
import { useDispatch } from 'react-redux';

import { SubmitButton } from '../../../components/button-components';
import { FormInputText } from '../../../components/form-elements';
import { FormTextArea } from '../../../components/form-elements/form-text-area';
import { SendIconElement } from '../../../components/icons-elements';
import { postAndUpdateProfile } from '../../../libs/api/profile';
import { AppDispatch } from '../../../store';
import { IProfileType, IUserType } from '../../../types/api-types';
import { IManegeDetailsFormValues } from '../../../types/element-types/form-elements-types';
import initialProfileValuesFunc from '../../../utils/profil-initial-values';

const COMPONENT_NAME = 'MyDetailsForm';
const MyDetailsForm = (props: { profile: IProfileType; user: IUserType }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { profile, user, ...rest } = props;

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (values: IManegeDetailsFormValues) => {
    dispatch(postAndUpdateProfile(values));
  };

  const initialValues = initialProfileValuesFunc(profile, user);

  const boxClassNames = classNames(
    'flex items-center bg-blue-500 w-max rounded md:absolute md:right-4 ',
  );
  const spaceClassNames = classNames('flex flex-col h-full p-4 mt-2');
  const headerLoginButtonClassNames = classNames('bg-blue-600');
  const [myImageUrl, setMyImageUrlUrl] = useState<string>(
    'https://fakeimg.pl/400x400/?text=No+Image',
  );

  return (
    <div id={id} {...rest} className={classNames(COMPONENT_NAME)}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          values.userInfo = {
            defaultUserName: user?.defaultUserName,
            userEmail: user?.email,
            userId: user?._id,
            displayName: user?.displayName,
          };
          onSubmit(values);
        }}
      >
        {(props: FormikProps<IManegeDetailsFormValues>) => {
          setMyImageUrlUrl(props.values.myImageUrl || '');

          return (
            <Form>
              <FormInputText
                id="userName"
                name="userName"
                label="User Name"
                placeholder="User Name"
                disabled
              />
              <div className={spaceClassNames} />
              <FormTextArea
                id="myDetails"
                name="myDetails"
                label="My Details"
                placeholder="My Details"
                variant="outlined"
                type="text"
              />
              <div className={spaceClassNames} />

              <div className="flex justify-between items-center gap-1">
                <FormInputText
                  id="myImageUrl"
                  name="myImageUrl"
                  label="Your Image Url"
                  placeholder="My Image Url"
                  type="url"
                  className="w-5/6"
                />
                <img
                  className="w-14 h-14 sm:w-40 sm:h-40"
                  alt="Picture of the user"
                  src={myImageUrl}
                />
              </div>

              <div className={spaceClassNames} />
              <FormInputText
                id="giveNameToButton"
                name="giveNameToButton"
                label="Give Name To Button"
                placeholder="Give Name To Button"
                type="text"
              />
              <div className={spaceClassNames} />
              <FormInputText
                id="addLinkToYourDetails"
                name="addLinkToYourDetails"
                label="Add Link To Your Details"
                placeholder="Add Link To Your Details"
                type="url"
                multiline
              />
              <div className={spaceClassNames} />
              <FormInputText
                id="profileTitle"
                name="profileTitle"
                label="Change Title"
                placeholder="Change Title"
                type="text"
                multiline
              />
              <div className={spaceClassNames} />
              <Box className={boxClassNames}>
                <SubmitButton
                  className={headerLoginButtonClassNames}
                  buttonIcon={<SendIconElement />}
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  {profile === null ? 'Send' : 'Update'}
                </SubmitButton>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

MyDetailsForm.displayName = COMPONENT_NAME;

export { MyDetailsForm };
