import { useId } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

import { ViewButton } from '../../components/button-components';
import { FormTitleElement } from '../../components/form-elements';
import { ImageGalleryElement } from '../../components/image-gallery-elements';
import { BaseTypography } from '../../components/typography-elements';
import { IUserType } from '../../types/api-types';
import { urlHomePage } from '../../utils/url-home-page';

const COMPONENT_NAME = 'MainFeature';
const MainFeature = (props: { user: IUserType }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { user } = props;

  const userUrl = urlHomePage(user?.defaultUserName)?.href;

  if (!user)
    return (
      <div className="space-y-1 px-2">
        <FormTitleElement className="text-center">
          Welcome to Project-Showroom!f
        </FormTitleElement>
        <p>
          Project-Showroom is a web app that allows developers and designers to
          showcase their projects in one place. Whether you are a beginner or an
          experienced developer, Project-Showroom is the perfect platform to
          showcase your work and share it with the world.
        </p>

        <div className="flex justify-center">
          <ImageGalleryElement />
        </div>

        <b>Features:</b>
        <ul className="text-gray-700 list-disc list-inside dark:text-gray-400">
          <li>
            Showcase your portfolio: Project-Showroom allows you to create a
            portfolio of your work, including images, descriptions, and links to
            your projects.
          </li>
          <li>
            Discover other portfolios: Explore other developers&apos; and
            designers&apos; portfolios and get inspired by their work.
          </li>
          <li>
            Easy to use: Project-Showroom is designed with simplicity in mind,
            making it easy for you to create and manage your portfolio.
          </li>
          <li>
            Customize your profile: Personalize your profile with your own
            branding and make it stand out from the crowd.
          </li>
        </ul>
        <b>Getting started:</b>
        <p>
          To get started with Project-Showroom, simply create an account and
          start building your portfolio. You can add projects, customize your
          profile, and explore other portfolios with ease.
        </p>
        <p>
          We hope you enjoy using Project-Showroom and look forward to seeing
          your amazing projects!
        </p>
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
