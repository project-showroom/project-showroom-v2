import { useId } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

import { ViewButton } from '../../components/button-components';
import { BaseTypography } from '../../components/typography-elements';
import { IUserType } from '../../types/api-types';
import { urlHomePage } from '../../utils/url-home-page';

const COMPONENT_NAME = 'MainFeature';
const MainFeature = (props: { user: IUserType }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { user } = props;

  const userUrl = urlHomePage(user?.defaultUserName)?.href;

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
      <div className="flex relative left-1/4">
        {user && (
          <ViewButton
            href={userUrl}
            variant="contained"
            size="small"
            color="primary"
            LinkComponent={Link}
          >
            My Projects
          </ViewButton>
        )}
      </div>
    </div>
  );
};

MainFeature.displayName = COMPONENT_NAME;

export { MainFeature };
