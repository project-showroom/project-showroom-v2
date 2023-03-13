import { useId, useEffect } from 'react';

import { Box } from '@mui/material';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { MyDetailsFeature } from '../../../features/my-details-feature';
import { getCurrentProfile } from '../../../libs/api/profile';
import { AppDispatch } from '../../../store';

const COMPONENT_NAME = 'Index';
export default function MyDetailsPage(props: { className?: string }) {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector(
    (state: { profile: { loading: boolean } }) => state.profile,
  );
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  const mainClassNames = classNames('flex relative flex-col p-4 top-16');
  return (
    <div id={id} {...rest} className={mainClassNames}>
      <Box>
        <MyDetailsFeature />
      </Box>
    </div>
  );
}
