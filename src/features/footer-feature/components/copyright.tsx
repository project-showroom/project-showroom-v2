import { useId } from 'react';

import { Divider } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
        <Typography
          variant="h6"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          <Link href="https://project-showroom.vercel.app/">
            PROJECT GALLERY | {copyrightWhoHas}
          </Link>
        </Typography>
        <div />
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Made with <FavoriteIcon fontSize={'small'} htmlColor="red" /> in
          Turkey
        </Typography>
        <div />
      </div>
    </div>
  );
};

Copyright.displayName = COMPONENT_NAME;

export { Copyright };
