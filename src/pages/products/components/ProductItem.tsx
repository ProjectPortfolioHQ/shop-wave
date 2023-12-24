"use client";
import Image from "next/image";
import React from "react";

interface IProductItem {
  image: string;
  title: string;
  price: string;
}

const ProductItem: React.FC<IProductItem> = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 gap-4">
      <Image
        src={"/posts/phone.png" || image}
        alt={title}
        width="200"
        height="214"
        className="object-cover mb-4"
      />
      <p className="text-lg text-gray-800 mb-4">{title}</p>
      <h3 className="text-xl font-semibold mb-2 text-red-500">{price}</h3>
    </div>
  );
};

export default ProductItem;
