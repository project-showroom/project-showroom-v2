import { useId } from 'react';

import { Box } from '@mui/material';
import classNames from 'classnames';

import { MyDetailsFeature } from '../../features/my-details-feature';

const COMPONENT_NAME = 'Index';
export default function MyDetailsPage(props: { className?: string }) {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const mainClassNames = classNames(
    'flex flex-col h-screen	 p-4 mt-2  dark:bg-gray-500 dark:text-white',
  );
  return (
    <div id={id} {...rest} className={mainClassNames}>
      <Box>
        <MyDetailsFeature />
      </Box>
    </div>
  );
}