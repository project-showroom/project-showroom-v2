import { useId, useEffect } from 'react';

import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Card from '@mui/material/Card';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ViewButton } from '../../components/button-components';
import { FormTitleElement } from '../../components/form-elements';
import { ImageGalleryElement } from '../../components/image-gallery-elements';
import { BaseTypography } from '../../components/typography-elements';
import { IUserType } from '../../types/api-types';
import { urlHomePage } from '../../utils/url-home-page';
import { FeaturesSection } from './features-section';

const COMPONENT_NAME = 'MainFeature';
const MainFeature = (props: { user: IUserType }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { user } = props;
  const { push } = useRouter();

  const userUrl = urlHomePage(user?.defaultUserName)?.href;

  useEffect(() => {
    if (user && new URL(userUrl).pathname !== '/undefined') {
      console.log(userUrl, 'userUrl');
      push(userUrl);
    }
  }, [push, user, userUrl]);

  if (!user)
    return (
      <div className="space-y-1 px-2">
        <FormTitleElement className="text-center my-8">
          Welcome to Project-Showroom!
        </FormTitleElement>
        <div className="flex justify-center items-center pb-10">
          <p className="w-96">
            Project-Showroom is a web app that allows developers and designers
            to showcase their projects in one place. Whether you are a beginner
            or an experienced developer, Project-Showroom is the perfect
            platform to showcase your work and share it with the world.
          </p>
        </div>
        <ImageGalleryElement />
        <div className="m-4 h-2" />
        <Card className="p-4  bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100 shadow-lg rounded-2xl">
          <div className="flex justify-center items-center gap-8">
            <div className="border-r-2 p-4">
              <TipsAndUpdatesIcon sx={{ fontSize: '60px' }} />
            </div>
            <div>
              <b>Getting started:</b>
              <p>
                To get started with Project-Showroom, simply create an account
                and start building your portfolio. You can add projects,
                customize your profile, and explore other portfolios with ease.
              </p>
              <p>
                We hope you enjoy using Project-Showroom and look forward to
                seeing your amazing projects!
              </p>
            </div>
          </div>
        </Card>
        <div className="m-4 h-2" />
        <FeaturesSection />
      </div>
    );

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
