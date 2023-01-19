import { useId, useEffect } from 'react';

import { Box } from '@mui/material';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { MyDetailsFeature } from '../../../features/my-details-feature';
import { getCurrentProfile } from '../../../store/take-profile-slice';

const COMPONENT_NAME = 'Index';
export default function MyDetailsPage(props: { className?: string }) {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const dispatch = useDispatch();

  const { loading } = useSelector((state: any) => state.profile);

  useEffect(() => {
    dispatch(getCurrentProfile() as any);
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  const mainClassNames = classNames(
    'flex relative flex-col h-screen p-4 top-16',
  );
  return (
    <div id={id} {...rest} className={mainClassNames}>
      <Box>
        <MyDetailsFeature />
      </Box>
    </div>
  );
}
