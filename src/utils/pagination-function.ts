import { IPaginationFunctionType } from '../types/utils-types/pagination-function-type';

export const paginationFunction = ({
  array,
  page_size,
  page_number,
}: IPaginationFunctionType) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};
