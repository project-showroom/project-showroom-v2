import { useId, useEffect } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { UserProfileFeature } from '../../features/user-profile-feature';
import { AppDispatch } from '../../store';
import { getSearchProfile } from '../../store/search-profile-slice';
import { allProjects } from '../../store/take-projects-slice';
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
    dispatch(allProjects(username));
    dispatch(getSearchProfile(username));
  }, [dispatch, username]);

  const { projects, loading } = useSelector(
    (state: {
      projects: { projects: IAddProjectFormValues[]; loading: boolean };
    }) => state.projects,
  );

  if (loading) return <div>Loading...</div>;

  const userClassNames = classNames(
    'flow-root relative min-[320px]-justify-center top-16',
  );
  return (
    <div id={id} {...rest} className={userClassNames}>
      {username && <UserProfileFeature projects={projects} />}
    </div>
  );
};

UserPage.displayName = COMPONENT_NAME;

export default UserPage;
