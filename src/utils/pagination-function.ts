import { IAddProjectFormValues } from '../types/element-types/form-elements-types';

export const paginationFunction = (
  array: IAddProjectFormValues[],
  page_number: number,
  ITEMS_PER_PAGE: number,
) => {
  const pageArray = array.slice(
    (page_number - 1) * ITEMS_PER_PAGE,
    page_number * ITEMS_PER_PAGE,
  );

  return { pageArray };
};
