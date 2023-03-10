import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteProject } from '../../libs/api/projects';
import { AppDispatch } from '../../store';
import { IAddProjectFormValues } from '../../types/element-types/form-elements-types/';
import { ITEMS_PER_PAGE } from '../../utils/items-per-page';
import { paginationFunction } from '../../utils/pagination-function';
import { CardSelf } from './components/index';
import { CardPagination } from './index';

const COMPONENT_NAME = 'CardFeature';
const CardFeature = (props: { projects: IAddProjectFormValues[] }) => {
  const { projects } = props;

  const dispatch = useDispatch<AppDispatch>();

  const { leftProjectsAfterDeleted } = useSelector(
    (state: {
      leftProjectsAfterDeleted: {
        leftProjectsAfterDeleted: IAddProjectFormValues[];
      };
    }) => state.leftProjectsAfterDeleted,
  );

  const [page, setPage] = useState(1);

  const [allProjects, setAllProjects] = useState<
    IAddProjectFormValues[] | undefined
  >(projects);

  const [cards, setCards] = useState<IAddProjectFormValues[]>(
    projects.slice(0, ITEMS_PER_PAGE),
  );

  useEffect(() => {
    if (leftProjectsAfterDeleted.length === 0) return;
    setAllProjects(leftProjectsAfterDeleted);
  }, [leftProjectsAfterDeleted]);

  const cardLength = allProjects ? allProjects.length : projects.length;
  const page_size = Math.ceil(cardLength / ITEMS_PER_PAGE);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    const { pageArray } = paginationFunction(
      allProjects ? allProjects : projects,
      value,
      ITEMS_PER_PAGE,
    );
    setPage(value);
    setCards(pageArray);
  };

  const deleteCardById = (cardId: string | undefined) => {
    const filteredDeletedCard = allProjects?.filter(
      (card) => card?._id !== cardId,
    );
    const { pageArray } = paginationFunction(
      filteredDeletedCard ? filteredDeletedCard : cards,
      page,
      ITEMS_PER_PAGE,
    );
    setCards(pageArray);
    if (!cardId) return null;
    dispatch(deleteProject(cardId));
    if (filteredDeletedCard?.length === 0) setAllProjects(filteredDeletedCard);
  };

  return (
    <>
      {cards ? (
        <CardPagination
          page_size={page_size}
          onPageChange={onPageChange}
          page={page}
        />
      ) : null}
      <CardSelf userCards={cards} deleteCardById={deleteCardById} />
      {cards ? (
        <CardPagination
          page_size={page_size}
          onPageChange={onPageChange}
          page={page}
        />
      ) : null}
    </>
  );
};

CardFeature.displayName = COMPONENT_NAME;

export { CardFeature };
