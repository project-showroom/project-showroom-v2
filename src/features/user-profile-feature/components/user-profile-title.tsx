import { useId } from 'react';

import classNames from 'classnames';

import { BaseTypography } from '../../../components/typography-elements';

const COMPONENT_NAME = 'UserProfileTitle';
const UserProfileTitle = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const titleClassNames = classNames('flex justify-center p-6', COMPONENT_NAME);
  return (
    <div id={id} {...rest} className={titleClassNames}>
      <BaseTypography
        gutterBottom
        variant="h4"
        component="h4"
        color="textPrimary"
      >
        Ercan Akalar
      </BaseTypography>
    </div>
  );
};

UserProfileTitle.displayName = COMPONENT_NAME;

export { UserProfileTitle };
