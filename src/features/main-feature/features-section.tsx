import { useId } from 'react';

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import classNames from 'classnames';

const COMPONENT_NAME = 'FeaturesSection';
const FeaturesSection = ({
  className = '',
  ...rest
}: {
  className?: string;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;

  return (
    <>
      <section
        id={id}
        {...rest}
        className={classNames(
          className,
          COMPONENT_NAME,
          'py-12 bg-white sm:py-16 lg:py-20',
        )}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Show your work to the world!
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
              Don&apos;t let your work go unnoticed.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
              <PhotoFilterIcon sx={{ fontSize: '60px' }} />
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Showcase your portfolio
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Project-Showroom allows you to create a portfolio of your work,
                including images, descriptions, and links to your projects.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
              <PersonSearchIcon sx={{ fontSize: '60px' }} />
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Discover other portfolios
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Explore other developers&apos; and designers&apos; portfolios
                and get inspired by their work.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t">
              <InsertEmoticonIcon sx={{ fontSize: '60px' }} />
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Utilize a simple interface
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Project-Showroom is designed with simplicity in mind, making it
                easy for you to create and manage your portfolio.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <PaletteIcon sx={{ fontSize: '60px' }} />
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Customize your profile
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Personalize your profile with your own branding and make it
                stand out from the crowd.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

FeaturesSection.displayName = COMPONENT_NAME;

export { FeaturesSection };
