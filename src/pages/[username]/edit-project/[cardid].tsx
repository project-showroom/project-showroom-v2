import { useEffect, useId } from 'react';

import Box from '@mui/material/Box';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { EditProjectFeature } from '../../../features/edit-project-feature/edit-project-feature';
import { AppDispatch } from '../../../store';
import { getCardProject } from '../../../store/edit-project-slice';
import { IAddProjectFormValues } from '../../../types/element-types/form-elements-types';

const COMPONENT_NAME = 'UserCardEditById';
const UserCardEditById = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const router = useRouter();
  const { cardid } = router.query;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!cardid) return;
    dispatch(getCardProject(cardid));
  }, [dispatch, cardid]);

  const { loading } = useSelector(
    (state: { editProject: { loading: boolean } }) => state.editProject,
  );

  if (loading && cardid) return <div>Loading...</div>;

  const mainClassNames = classNames(
    'flex relative flex-col h-screen p-4 top-16',
  );
  return (
    <div id={id} {...rest} className={mainClassNames}>
      <Box>
        <EditProjectFeature />
      </Box>
    </div>
  );
};

UserCardEditById.displayName = COMPONENT_NAME;

export default UserCardEditById;
