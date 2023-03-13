import { useId, useEffect } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { UserProfileFeature } from '../../features/user-profile-feature';
import { getSearchProfile } from '../../libs/api/profile';
import { getAllProjects } from '../../libs/api/projects';
import { AppDispatch } from '../../store';
import { IAddProjectFormValues } from '../../types/element-types/form-elements-types';

const COMPONENT_NAME = 'UserPage';
const UserPage = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const router = useRouter();
  const { username } = router.query;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!username) return;
    dispatch(getAllProjects(username));
    dispatch(getSearchProfile(username));
  }, [dispatch, username]);

  const { projects, loading } = useSelector(
    (state: {
      projects: { projects: IAddProjectFormValues[]; loading: boolean };
    }) => state.projects,
  );

  if (loading) return <div>Loading...</div>;

  const userClassNames = classNames('flex relative flex-col p-4 top-16');
  return (
    <div id={id} {...rest} className={userClassNames}>
      {username && <UserProfileFeature projects={projects} />}
    </div>
  );
};

UserPage.displayName = COMPONENT_NAME;

export default UserPage;
