import { useId } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

const COMPONENT_NAME = 'HeaderTitle';
const HeaderTitle = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { className, ...rest } = props;

  return (
    <div id={id} {...rest} className={classNames(className, COMPONENT_NAME)}>
      <Link href="/">{COMPONENT_NAME}</Link>
    </div>
  );
};

HeaderTitle.displayName = COMPONENT_NAME;

export { HeaderTitle };
