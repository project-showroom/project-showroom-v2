import { useId } from 'react';

import { Container, Divider } from '@mui/material';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { UserProfileDescription, UserProfileTitle } from './components';
import { UserProfileButtons } from './components/user-profile-buttons';
import { CardFeature } from '../card-feature';

const COMPONENT_NAME = 'UserProfileFeature';
const UserProfileFeature = (props: {
  className?: string;
  projects: any;
  username?: string | string[];
  profile?: any;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, projects, ...rest } = props;

  const { searchProfile } = useSelector((state: any) => state.searchProfile);

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
            cvURL={currentSearchProfile.addLinkToYourDetails}
            buttonName={currentSearchProfile.giveNameToButton}
          />
          <Divider />
          <CardFeature projects={projects} />
        </Container>
      </>
    </div>
  );
};

UserProfileFeature.displayName = COMPONENT_NAME;

export { UserProfileFeature };
