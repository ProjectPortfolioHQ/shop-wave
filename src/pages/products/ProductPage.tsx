import FilterProduct from "./components/FilterProduct";
import ProductItem from "./components/ProductItem";

const products = [
  {
    id: 1,
    image: "posts/phone.png",
    title: "Product 1",
    price: "$19.99",
  },
  {
    id: 2,
    image: "posts/phone.png",
    title: "Product 2",
    price: "$29.99",
  },
  {
    id: 3,
    image: "posts/phone.png",
    title: "Product 2",
    price: "$29.99",
  },
  {
    id: 4,
    image: "posts/phone.png",
    title: "Product 2",
    price: "$29.99",
  },
  {
    id: 5,
    image: "posts/phone.png",
    title: "Product 2",
    price: "$29.99",
  },
  {
    id: 6,
    image: "posts/phone.png",
    title: "Product 2",
    price: "$29.99",
  },
];

const ProductPage = () => {
  return (
    <div className="container grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <FilterProduct />
      </div>

      <div className="col-span-10">
        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
