import { useId } from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const COMPONENT_NAME = 'CopyrightExplanation';
const copyrightWhoHas = 'Emre MUTLU & ERCAN AKALAR';
const CopyrightExplanation = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Typography variant="h6" align="center" gutterBottom>
        <div>
          Copyright © by{' '}
          <Link
            href="https://www.linkedin.com/in/emremutlu8/"
            target="_blank"
            color="inherit"
          >
            {copyrightWhoHas}
          </Link>
          .
        </div>
        <div>
          You are 100% allowed to use this webpage for both personal and
          commercial use, but NOT to claim it as your own app.
        </div>{' '}
        <div>
          A credit to the original author,{' '}
          <Link
            href="https://project-showroom.vercel.app/"
            target="_blank"
            color="inherit"
          >
            {copyrightWhoHas}
          </Link>
          , is of course highly appreciated!!
        </div>
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
};

CopyrightExplanation.displayName = COMPONENT_NAME;

export { CopyrightExplanation };
