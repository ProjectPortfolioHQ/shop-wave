import getPaginate, { dotts } from "@/hooks/usePagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface PaginationPageProps {
  totalItems: number;
  currentPage: number;
  perPage: number;
  renderPageLink: (page: number) => string;
}

const PaginationPage: React.FC<PaginationPageProps> = ({
  totalItems,
  currentPage,
  perPage,
  renderPageLink,
}) => {
  const pages = getPaginate(totalItems, currentPage, perPage);
  const totalPages = Math.ceil(totalItems / perPage);
  const prevPage = currentPage - 1 < 1 ? 1 : currentPage - 1;
  const nextPage = currentPage + 1 > totalPages ? totalPages : currentPage + 1;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={renderPageLink(prevPage)} />
        </PaginationItem>

        {pages.map((page, idx) => {
          return (
            <PaginationItem key={idx}>
              {page === dotts ? (
                <PaginationEllipsis key={idx} />
              ) : (
                <PaginationLink
                  href={renderPageLink(page as number)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext href={renderPageLink(nextPage)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationPage;
