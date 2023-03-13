import { useId } from 'react';

import Box from '@mui/material/Box';
import classNames from 'classnames';

import { AddProjectFeature } from '../../../features/add-project-feature/add-project-feature';

const COMPONENT_NAME = 'AddProjectPage';
export default function AddProjectPage(props: { className?: string }) {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const mainClassNames = classNames('flex relative flex-col p-4 top-16');
  return (
    <div id={id} {...rest} className={mainClassNames}>
      <Box>
        <AddProjectFeature />
      </Box>
    </div>
  );
}
