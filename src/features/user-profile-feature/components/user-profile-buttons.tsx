import { useId } from 'react';

import classNames from 'classnames';

import { ViewButton } from '../../../components/button-components';

const COMPONENT_NAME = 'UserProfileButtons';
const UserProfileButtons = (props: {
  className?: string;
  cvUrl?: string;
  buttonName?: string;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { cvUrl, buttonName, ...rest } = props;

  const userProfileButtonClassNames = classNames(
    'flex justify-center p-6 gap-3',
    COMPONENT_NAME,
  );
  return (
    <div id={id} {...rest} className={userProfileButtonClassNames}>
      <ViewButton
        href="/view-codes"
        variant="contained"
        size="small"
        color="primary"
      >
        VIEW MY PROJECTS
      </ViewButton>

      {cvUrl && (
        <ViewButton
          href={cvUrl}
          variant="contained"
          size="small"
          color="primary"
        >
          {buttonName}
        </ViewButton>
      )}
    </div>
  );
};

UserProfileButtons.displayName = COMPONENT_NAME;

export { UserProfileButtons };
