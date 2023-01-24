import { useId } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

import { SubmitTypeButton } from '../../components/button-elements';
import { BaseTypography } from '../../components/typography-elements';
import { IUserType } from '../../types/api-types';

const COMPONENT_NAME = 'MainFeature';
const MainFeature = (props: { user: IUserType }) => {
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
        <Link href={`/${user?.defaultUserName}`}>
          <SubmitTypeButton variant="contained">My Projects</SubmitTypeButton>
        </Link>
      </div>
    </div>
  );
};

MainFeature.displayName = COMPONENT_NAME;

export { MainFeature };
