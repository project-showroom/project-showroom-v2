import { useEffect, useId } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { EditProjectFeature } from '../../../features/edit-project-feature/edit-project-feature';
import { editCurrentProject } from '../../../libs/api/projects';
import { AppDispatch } from '../../../store';

const COMPONENT_NAME = 'UserCardEditById';
const UserCardEditById = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const router = useRouter();
  const { cardid } = router.query;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!cardid) return;
    dispatch(editCurrentProject(cardid));
  }, [dispatch, cardid]);

  const { loading } = useSelector(
    (state: { editProject: { loading: boolean } }) => state.editProject,
  );

  if (loading && cardid) return <div>Loading...</div>;

  const mainClassNames = classNames('flex relative flex-col p-4 top-16');
  return (
    <div id={id} {...rest} className={mainClassNames}>
      <EditProjectFeature />
    </div>
  );
};

UserCardEditById.displayName = COMPONENT_NAME;

export default UserCardEditById;
