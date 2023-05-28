import Link from "next/link";
import React from "react";

const FeaturedProducts = ({ product }) => {
  console.log(product);
  return (
    <>
      {product && (
        <div className="bg-gray-900 text-white py-10">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="mt-8 order-2 md:order-1">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {product.title}
              </h1>
              <p className="text-gray-300 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex gap-4 mt-6">
                <Link href={"/products/1"}>
                  <label className="inline-block px-4 py-2 text-blue-600 bg-white rounded-md hover:bg-blue-600 hover:text-white transition duration-300">
                    Read more
                  </label>
                </Link>
                <Link href={"/products/1"}>
                  <label className="inline-block px-4 py-2 text-purple-600 bg-white rounded-md hover:bg-purple-600 hover:text-white transition duration-300">
                    Add to cart
                  </label>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={product.images[0]}
                alt="prod image"
                className="w-80 h-64 mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;
