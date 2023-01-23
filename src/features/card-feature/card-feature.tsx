import React, { useState } from 'react';

import { CardSelf } from './components/index';
import { CardPagination } from './index';
import { IAddProjectFormValues } from '../../types/element-types/form-elements-types/';
import { ITEMS_PER_PAGE } from '../../utils/items-per-page';
import { paginationFunction } from '../../utils/pagination-function';

const COMPONENT_NAME = 'CardFeature';
const CardFeature = (props: { projects: IAddProjectFormValues[] }) => {
  const { projects } = props;
  const [page, setPage] = useState(1);

  const [cards, setCards] = useState<IAddProjectFormValues[]>(
    projects.slice(0, ITEMS_PER_PAGE),
  );

  const cardLength = projects.length;
  const page_size = Math.ceil(cardLength / ITEMS_PER_PAGE);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    const { pageArray } = paginationFunction(projects, value, ITEMS_PER_PAGE);
    setPage(value);
    setCards(pageArray);
  };

  return (
    <>
      <CardPagination
        page_size={page_size}
        onPageChange={onPageChange}
        page={page}
      />
      <CardSelf userCards={cards} />
      <CardPagination
        page_size={page_size}
        onPageChange={onPageChange}
        page={page}
      />
    </>
  );
};

CardFeature.displayName = COMPONENT_NAME;

export { CardFeature };
