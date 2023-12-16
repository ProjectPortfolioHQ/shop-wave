import ProductItem from "./ProductItem";

const ProductList = async () => {
  const res = await fetch(
    "https://api.ezfrontend.com/products?_limit=9&_sort=salePrice:ASC&isFreeShip=false&isPromotion=false&_start=63",
    { method: "GET" }
  );

  const data: any = await res.json();

  return (
    <div className="grid grid-cols-5 gap-4">
      {data.map((product: any) => (
        <ProductItem
          key={product.id}
          image={product.thumbnail?.url}
          title={product.name}
          price={product.originalPrice}
        />
      ))}
    </div>
  );
};

export default ProductList;
