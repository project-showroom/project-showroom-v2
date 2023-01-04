import { useId } from 'react';

import Pagination from '@mui/material/Pagination';

const COMPONENT_NAME = 'CardPagination';
const CardPagination = (props: { className?: string; cardLength?: any }) => {
  const id = useId() + '-' + COMPONENT_NAME;
  const { cardLength, ...rest } = props;

  const pageLength = Math.ceil(cardLength / 4);

  return (
    <div id={id} {...rest}>
      <Pagination
        count={pageLength}
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
