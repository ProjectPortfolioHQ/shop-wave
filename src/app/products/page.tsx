import ProductPage from "../../pages/products/ProductPage";

interface ProductsProps {
  searchParams: any;
}

const Products: React.FC<ProductsProps> = async ({ searchParams }) => {
  const queryParams = new URLSearchParams(searchParams);
  const perPage = 10;

  const res = await fetch(
    `https://api.ezfrontend.com/products?_limit=${perPage}&${queryParams}`,
    { method: "GET" }
  );

  const data: any = await res.json();
  console.log(
    "🚀 ~ file: page.tsx:17 ~ constProducts:React.FC<ProductsProps>= ~ data:",
    data?.length
  );

  const resCount = await fetch(
    `https://api.ezfrontend.com/products/count?_limit=${perPage}&${queryParams}`,
    { method: "GET" }
  );
  const totalCount: number = await resCount.json();
  console.log(
    "🚀 ~ file: page.tsx:27 ~ constProducts:React.FC<ProductsProps>= ~ totalCount:",
    totalCount
  );

  return <ProductPage perPage={perPage} data={data} totalItems={totalCount} />;
};

export default Products;
