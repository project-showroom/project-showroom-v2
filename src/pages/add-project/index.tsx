import { useEffect, useId, useState } from 'react';

import Box from '@mui/material/Box';
import classNames from 'classnames';
import { getCookie } from 'cookies-next';

import { AddProjectFeature } from '../../features/add-project-feature/add-project-feature';
import { IUser } from '../../models/Users';
import convertTokenId from '../../utils/convert-token-id';

const COMPONENT_NAME = 'AddProjectPage';
export default function AddProjectPage(props: { className?: string }) {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const [user, setUser] = useState<IUser | any>();

  const takenToken = getCookie('token');

  useEffect(() => {
    async function fetchData(url: string, id: string) {
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();
      setUser(data.data);
    }
    const userId = convertTokenId(takenToken);
    if (userId) fetchData('/api/users', userId);
  }, [takenToken]);

  const mainClassNames = classNames(
    'flex relative flex-col h-screen p-4 top-16',
  );
  return (
    <div id={id} {...rest} className={mainClassNames}>
      <Box>
        <AddProjectFeature user={user} />
      </Box>
    </div>
  );
}
