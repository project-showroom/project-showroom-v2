import { useId } from 'react';

import Box from '@mui/material/Box';
import classNames from 'classnames';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { SubmitButton } from '../../../components/button-components';
import { FormInputText } from '../../../components/form-elements';
import { SendIconElement } from '../../../components/icons-elements';
import { postAndUpdateProfile } from '../../../store/update-profile-slice';
import { IManegeDetailsFormValues } from '../../../types/element-types/form-elements-types';
import initialProfileValuesFunc from '../../../utils/profil-initial-values';

const COMPONENT_NAME = 'MyDetailsForm';
const MyDetailsForm = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  const dispatch = useDispatch();
  const { profile } = useSelector((state: any) => state.profile);
  const { user } = useSelector((state: any) => state.user);

  const onSubmit = async (values: IManegeDetailsFormValues) => {
    dispatch(postAndUpdateProfile(values) as any);
  };

  const initialValues = initialProfileValuesFunc(profile);

  const boxClassNames = classNames(
    'flex items-center bg-blue-500 w-max rounded md:absolute md:right-4 ',
  );
  const spaceClassNames = classNames('flex flex-col h-full p-4 mt-2');
  const headerLoginButtonClassNames = classNames('bg-blue-600');
  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
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
        <Form>
          <FormInputText
            id="userName"
            name="userName"
            label="User Name"
            placeholder="User Name"
            disabled
          />
          <div className={spaceClassNames} />
          <FormInputText
            id="myDetails"
            name="myDetails"
            label="My Details"
            placeholder="My Details"
            variant="outlined"
            type="text"
          />

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

MyDetailsForm.displayName = COMPONENT_NAME;

export { MyDetailsForm };
