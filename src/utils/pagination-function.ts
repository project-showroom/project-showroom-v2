// import { IPaginationFunctionType } from '../types/utils-types/pagination-function-type';

export const paginationFunction = (
  array: any,
  page_number: any,
  ITEMS_PER_PAGE: any,
) => {
  const pageArray = array.slice(
    (page_number - 1) * ITEMS_PER_PAGE,
    page_number * ITEMS_PER_PAGE,
  );

  return { pageArray };
};
