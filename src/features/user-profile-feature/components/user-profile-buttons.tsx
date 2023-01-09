import { useId } from 'react';

import classNames from 'classnames';

import { SubmitButton } from '../../../components/button-components';

const COMPONENT_NAME = 'UserProfileButtons';
const UserProfileButtons = (props: { className?: string }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { ...rest } = props;

  const userProfileButtonClassNames = classNames(
    'flex justify-center p-6 gap-3',
    COMPONENT_NAME,
  );
  return (
    <div id={id} {...rest} className={userProfileButtonClassNames}>
      {/* if there is project url, show this button */}
      <SubmitButton
        href="/view-codes"
        variant="contained"
        size="small"
        color="primary"
      >
        VIEW MY PROJECTS
      </SubmitButton>
      {/* if there is CV url, show this button */}
      <SubmitButton
        href="/view-codes"
        variant="contained"
        size="small"
        color="primary"
      >
        CV
      </SubmitButton>
    </div>
  );
};

UserProfileButtons.displayName = COMPONENT_NAME;

export { UserProfileButtons };
