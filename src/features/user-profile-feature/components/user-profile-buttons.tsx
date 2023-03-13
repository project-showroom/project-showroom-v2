import { useId } from 'react';

import classNames from 'classnames';

import { ViewButton } from '../../../components/button-components';
import { urlHomePage } from '../../../utils/url-home-page';

const COMPONENT_NAME = 'UserProfileButtons';
const UserProfileButtons = (props: {
  className?: string;
  cvUrl?: string;
  buttonName?: string;
  userProjectUrl?: string;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { cvUrl, buttonName, userProjectUrl, ...rest } = props;

  const userUrl = urlHomePage(userProjectUrl)?.href;

  const userProfileButtonClassNames = classNames(
    'flex justify-center p-6 gap-3',
    COMPONENT_NAME,
  );
  return (
    <div id={id} {...rest} className={userProfileButtonClassNames}>
      {userProjectUrl ? (
        <ViewButton
          href={userUrl}
          variant="contained"
          size="small"
          color="primary"
        >
          VIEW MY PROJECTS
        </ViewButton>
      ) : null}

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
