import { useId } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

const COMPONENT_NAME = 'HeaderTitle';
const HeaderTitle = (props: { className?: string; user: any }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { user, ...rest } = props;

  const title = 'PROJECT GALLERY';

  const headerTitleClassNames = classNames('flex');
  const headerTitleLinkClassNames = classNames('text-sm no-underline');
  return (
    // If user is not signed in, do not show the user name.
    <div id={id} {...rest} className={headerTitleClassNames}>
      <Link href="/">
        <h1 className={headerTitleLinkClassNames}>{title} &nbsp;</h1>
      </Link>
      {user && (
        <Link href={`/${user.defaultUserName}`}>
          <h1 className={headerTitleLinkClassNames}>| {user.displayName}</h1>
        </Link>
      )}
    </div>
  );
};

HeaderTitle.displayName = COMPONENT_NAME;

export { HeaderTitle };
