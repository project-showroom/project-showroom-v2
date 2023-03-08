import React, { useId } from 'react';

import Pagination from '@mui/material/Pagination';

const COMPONENT_NAME = 'CardPagination';
const CardPagination = (props: {
  className?: string;
  page_size: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  page: number;
}) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { page_size, onPageChange, page, ...rest } = props;

  if (page_size === 0) return <div className="h-12"></div>;

  return (
    <div id={id} {...rest}>
      <Pagination
        page={page}
        count={page_size}
        onChange={onPageChange}
        variant="outlined"
        color="primary"
        style={{
          display: 'flex',
          justifyContent: 'end',
          paddingBottom: '32px',
          paddingTop: '32px',
        }}
      />
    </div>
  );
};

CardPagination.displayName = COMPONENT_NAME;

export { CardPagination };
