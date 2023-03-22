import { useId } from 'react';

import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

import ercan1 from '../../assets/images/example-usage/ercan-1.jpg';
import ercan2 from '../../assets/images/example-usage/ercan-2.jpg';
import ercan3 from '../../assets/images/example-usage/ercan-3.jpg';
import ercan4 from '../../assets/images/example-usage/ercan-4.jpg';
import ercan5 from '../../assets/images/example-usage/ercan-5.jpg';

const COMPONENT_NAME = 'ImageGalleryElement';

const ImageGalleryElement = ({
  className = '',
  images = [ercan3, ercan1, ercan2, ercan4, ercan5],
  ...rest
}: {
  className?: string;
  images?: string[] | StaticImageData[];
}) => {
  const id = useId() + '-' + COMPONENT_NAME;

  return (
    <div
      id={id}
      {...rest}
      className={classNames(
        className,
        COMPONENT_NAME,
        'flex max-h-1/4 max-w-4xl	overflow-x-scroll',
      )}
    >
      {images.map((image, index) => {
        return (
          <Image
            key={'image-' + index}
            className="scale-50 hover:scale-75 ease-in duration-500"
            alt="Picture of the author"
            src={image}
          />
        );
      })}
    </div>
  );
};

ImageGalleryElement.displayName = COMPONENT_NAME;

export { ImageGalleryElement };
