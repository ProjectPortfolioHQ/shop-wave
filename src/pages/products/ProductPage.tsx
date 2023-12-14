import ProductItem from "./components/ProductItem";

const products = [
  {
    id: 1,
    image: "posts/image1.webp",
    title: "Product 1",
    price: "$19.99",
  },
  {
    id: 2,
    image: "posts/image1.webp",
    title: "Product 2",
    price: "$29.99",
  },
  {
    id: 3,
    image: "posts/image1.webp",
    title: "Product 2",
    price: "$29.99",
  },
  {
    id: 4,
    image: "posts/image1.webp",
    title: "Product 2",
    price: "$29.99",
  },
  {
    id: 5,
    image: "posts/image1.webp",
    title: "Product 2",
    price: "$29.99",
  },
  {
    id: 6,
    image: "posts/image1.webp",
    title: "Product 2",
    price: "$29.99",
  },
];

const ProductPage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductPage;
