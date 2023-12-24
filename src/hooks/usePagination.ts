export const dotts = "...";
const getPages = (length: number, inc: number = 1) =>
  Array.from({ length }, (_, i) => i + inc);

const getPaginate = (
  totalItems: number,
  currentPage: number,
  itemsPerPage: number
) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  //Pages: 1, 2, 3, 4 ,5
  if (totalPages <= 5) {
    return getPages(totalPages);
  }

  //Pages: 1 2 3 4 ... 10
  if (currentPage <= 3) {
    return [...getPages(4), dotts, totalPages];
  }

  //Pages: 1 ... 4 5 6 ... 10
  if (currentPage < totalPages - 2) {
    return [
      1,
      dotts,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      dotts,
      totalPages,
    ];
  }

  //Pages: 1 ... 7 8 9 10
  return [1, dotts, ...getPages(4, totalPages - 3)];
};

export default getPaginate;
