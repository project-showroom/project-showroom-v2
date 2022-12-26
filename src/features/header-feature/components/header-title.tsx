import { useId } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

const COMPONENT_NAME = 'HeaderTitle';
const HeaderTitle = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  const headerTitleClassNames = classNames('flex flex-auto justify-end w-7/12');

  return (
    <div id={id} {...rest} className={headerTitleClassNames}>
      <Link href="/">{COMPONENT_NAME}</Link>
    </div>
  );
};

HeaderTitle.displayName = COMPONENT_NAME;

export { HeaderTitle };
