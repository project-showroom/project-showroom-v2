import { ChangeEvent, useId, useState } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
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

  const [page, setPage] = useState(1);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="mb-6 pb-6 ease-in duration-500 border-y">
      <div
        id={id}
        {...rest}
        className={classNames(
          className,
          COMPONENT_NAME,
          'flex items-center justify-center',
        )}
        style={{
          height: '600px',
        }}
      >
        <Image
          key={'image-' + page}
          className="scale-110 hover:scale-125 ease-in duration-500 my-16 max-w-sm  sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
          alt="Picture of the author"
          src={images[page - 1]}
        />
      </div>
      <div className="flex items-center justify-center">
        <Pagination
          count={images.length}
          color="primary"
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

ImageGalleryElement.displayName = COMPONENT_NAME;

export { ImageGalleryElement };
