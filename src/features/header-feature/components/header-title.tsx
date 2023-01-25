import { useId } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

const COMPONENT_NAME = 'HeaderTitle';
const HeaderTitle = (props: {
  className?: string;
  currentUserDisplayName?: string;
  currentDefaultUserName?: string;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { currentUserDisplayName, currentDefaultUserName, ...rest } = props;

  const title = 'PROJECT GALLERY';

  const headerTitleClassNames = classNames('flex');
  const headerTitleLinkClassNames = classNames('text-sm no-underline');
  return (
    <div id={id} {...rest} className={headerTitleClassNames}>
      <Link href="/">
        <h1 className={headerTitleLinkClassNames}>{title} &nbsp;</h1>
      </Link>

      {currentUserDisplayName && (
        <Link href={`/${currentDefaultUserName}`}>
          <h1 className={headerTitleLinkClassNames}>
            | {currentUserDisplayName}
          </h1>
        </Link>
      )}
    </div>
  );
};

HeaderTitle.displayName = COMPONENT_NAME;

export { HeaderTitle };
