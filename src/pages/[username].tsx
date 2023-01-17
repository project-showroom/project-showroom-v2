import { useId, useEffect } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { UserProfileFeature } from '../features/user-profile-feature';
import { allProjects } from '../store/take-projects-slice';

const COMPONENT_NAME = 'UserPage';
const UserPage = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const router = useRouter();
  const { username } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!username) return;
    dispatch(allProjects(username) as any);
  }, [dispatch, username]);

  const { projects, loading } = useSelector((state: any) => state.projects);

  if (loading && username) return <div>Loading...</div>;

  const userClassNames = classNames('flex relative justify-center top-16');
  return (
    <div id={id} {...rest} className={userClassNames}>
      {username && <UserProfileFeature projects={projects} />}
    </div>
  );
};

UserPage.displayName = COMPONENT_NAME;

export default UserPage;
