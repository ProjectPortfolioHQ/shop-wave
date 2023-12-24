import ProductItem from "./ProductItem";

const ProductList = ({ data }: any) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {data.map((product: any) => (
        <ProductItem
          key={product.id}
          image={product.thumbnail?.url}
          title={product.name}
          price={product.salePrice}
        />
      ))}
    </div>
  );
};

export default ProductList;
