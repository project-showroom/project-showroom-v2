import { useId } from 'react';

import classNames from 'classnames';

import { SubmitButton } from '../../../components/button-components';

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
      <SubmitButton
        href="/view-codes"
        variant="contained"
        size="small"
        color="primary"
      >
        VIEW MY PROJECTS
      </SubmitButton>

      {cvUrl && (
        <SubmitButton
          href={cvUrl}
          variant="contained"
          size="small"
          color="primary"
        >
          {buttonName}
        </SubmitButton>
      )}
    </div>
  );
};

UserProfileButtons.displayName = COMPONENT_NAME;

export { UserProfileButtons };
