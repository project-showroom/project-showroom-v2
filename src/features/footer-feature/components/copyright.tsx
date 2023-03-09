import { useId } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import classNames from 'classnames';

import { BaseTypography } from '../../../components/typography-elements/index';
import { CopyrightExplanation } from './copyright-explanation';

const COMPONENT_NAME = 'Copyright';
const copyrightWhoHas = 'Emre MUTLU & ERCAN AKALAR';
const Copyright = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Divider className="dark:bg-white" />
      <div>
        <BaseTypography variant="h6" align="center" gutterBottom>
          <Link href="https://project-showroom.vercel.app/">
            PROJECT GALLERY | {copyrightWhoHas}
          </Link>
        </BaseTypography>
        <div />
        <BaseTypography variant="h5" align="center" component="p">
          Made with <FavoriteIcon fontSize="small" htmlColor="red" /> in Turkey
        </BaseTypography>
        <div />
        <BaseTypography variant="h6" align="center" gutterBottom>
          <CopyrightExplanation />
        </BaseTypography>
      </div>
    </div>
  );
};

Copyright.displayName = COMPONENT_NAME;

export { Copyright };
