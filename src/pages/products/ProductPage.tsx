"use client";
import PaginationPage from "@/components/PaginationPage";
import FilterProduct from "./components/FilterProduct";
import ProductList from "./components/ProductList";
import { usePathname, useSearchParams } from "next/navigation";

interface ProductPageProps {
  data: any;
  perPage: number;
  totalItems: number;
}

const ProductPage: React.FC<ProductPageProps> = ({
  data,
  perPage,
  totalItems,
}) => {
  const searchParams = useSearchParams()!;
  const pathname = usePathname();

  const currentPage = searchParams.get("_start")
    ? Number(searchParams.get("_start")) / perPage
    : 1;

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("_start", String(page * perPage));
    return `${pathname}?${newParams.toString()}`;
  };

  return (
    <div className="container grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <FilterProduct />
      </div>

      <div className="col-span-10">
        <ProductList data={data} />

        {data.length > 0 && (
          <PaginationPage
            totalItems={totalItems}
            perPage={perPage}
            currentPage={currentPage}
            renderPageLink={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
