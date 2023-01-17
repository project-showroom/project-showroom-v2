import { useId } from 'react';

import { Container, Divider } from '@mui/material';
import classNames from 'classnames';

import { UserProfileDescription, UserProfileTitle } from './components';
import { UserProfileButtons } from './components/user-profile-buttons';
import { CardFeature } from '../card-feature';

const COMPONENT_NAME = 'UserProfileFeature';
const UserProfileFeature = (props: { className?: string; projects: any }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, projects, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <>
        <Container maxWidth="md">
          <UserProfileTitle />
          <UserProfileDescription />
          <UserProfileButtons />
          <Divider />
          <CardFeature projects={projects} />
        </Container>
      </>
    </div>
  );
};

UserProfileFeature.displayName = COMPONENT_NAME;

export { UserProfileFeature };
