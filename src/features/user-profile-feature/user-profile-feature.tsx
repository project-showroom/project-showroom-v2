import { useId } from 'react';

import { Container, Divider } from '@mui/material';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { IProfileType } from '../../types/api-types';
import { IAddProjectFormValues } from '../../types/element-types/form-elements-types';
import { CardFeature } from '../card-feature';
import { UserProfileDescription, UserProfileTitle } from './components';
import { UserProfileButtons } from './components/user-profile-buttons';

const COMPONENT_NAME = 'UserProfileFeature';
const UserProfileFeature = (props: {
  className?: string;
  projects: IAddProjectFormValues[];
  username?: string | string[];
  profile?: IProfileType;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, projects, ...rest } = props;

  const { searchProfile } = useSelector(
    (state: { searchProfile: { searchProfile: IProfileType } }) =>
      state.searchProfile,
  );

  const currentSearchProfile = { ...searchProfile };

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <>
        <Container maxWidth="md">
          <UserProfileTitle profileTitle={currentSearchProfile.profileTitle} />
          <UserProfileDescription
            profileDescription={currentSearchProfile.myDetails}
          />
          <UserProfileButtons
            cvUrl={currentSearchProfile.addLinkToYourDetails}
            buttonName={currentSearchProfile.giveNameToButton}
            userProjectUrl={currentSearchProfile.userInfo?.defaultUserName}
          />
          {currentSearchProfile.profileTitle ||
            currentSearchProfile.myDetails ? (
              <Divider className="dark:bg-white" />
            ):null}
          <CardFeature projects={projects} />
        </Container>
      </>
    </div>
  );
};

UserProfileFeature.displayName = COMPONENT_NAME;

export { UserProfileFeature };
