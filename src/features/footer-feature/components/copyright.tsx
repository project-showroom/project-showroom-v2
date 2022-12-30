import { useId } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import classNames from 'classnames';

const COMPONENT_NAME = 'Copyright';
const copyrightWhoHas = 'Emre MUTLU & ERCAN AKALAR';
const Copyright = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Divider />
      <div>
        <Typography variant="h6" align="center" gutterBottom>
          <Link href="https://project-showroom.vercel.app/">
            PROJECT GALLERY | {copyrightWhoHas}
          </Link>
        </Typography>
        <div />
        <Typography variant="h5" align="center" component="p">
          Made with <FavoriteIcon fontSize="small" htmlColor="red" /> in Turkey
        </Typography>
        <div />
      </div>
    </div>
  );
};

Copyright.displayName = COMPONENT_NAME;

export { Copyright };
