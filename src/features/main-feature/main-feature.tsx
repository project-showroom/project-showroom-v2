import { useId } from 'react';

import classNames from 'classnames';

import { SubmitTypeButton } from '../../components/button-elements';
import { BaseTypography } from '../../components/typography-elements';

const COMPONENT_NAME = 'MainFeature';
const MainFeature = (props: { user: any }) => {
  const id = useId() + '-' + COMPONENT_NAME;

  const { user } = props;
  return (
    <div id={id} className="p-6">
      <div className={classNames(COMPONENT_NAME)}>
        <BaseTypography
          gutterBottom
          variant="h4"
          component="h4"
          color="textPrimary"
        >
          {user?.displayName}
        </BaseTypography>
      </div>
      <div className={classNames('flex justify-center', COMPONENT_NAME + 1)}>
        <SubmitTypeButton
          variant="contained"
          href={`/${user?.defaultUserName}`}
        >
          My Projects
        </SubmitTypeButton>
      </div>
    </div>
  );
};

MainFeature.displayName = COMPONENT_NAME;

export { MainFeature };
