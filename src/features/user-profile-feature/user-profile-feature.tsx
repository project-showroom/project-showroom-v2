import { useId } from 'react';

import { Container, Divider } from '@mui/material';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { IProfileType } from '../../types/api-types';
import { IAddProjectFormValues } from '../../types/element-types/form-elements-types';
import { CardFeature } from '../card-feature';
import { UserProfileDescription, UserProfileTitle } from './components';
import { UserProfileButtons } from './components/user-profile-buttons';
import { UserProfileUrl } from './components/user-profile-url';

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
          <div className="flex items-center justify-between mb-4">
            {currentSearchProfile?.myImageUrl && (
              <img
                className="w-14 h-14 sm:w-40 sm:h-40"
                alt="Picture of the project"
                src={currentSearchProfile?.myImageUrl}
              />
            )}
            <div className="flex flex-col justify-center items-center">
              <UserProfileTitle
                profileTitle={currentSearchProfile.profileTitle}
              />
              <UserProfileUrl />
            </div>
          </div>
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
          ) : null}
          {/* <FavoriteCards /> */}
          <CardFeature projects={projects} />
        </Container>
      </>
    </div>
  );
};

UserProfileFeature.displayName = COMPONENT_NAME;

export { UserProfileFeature };
