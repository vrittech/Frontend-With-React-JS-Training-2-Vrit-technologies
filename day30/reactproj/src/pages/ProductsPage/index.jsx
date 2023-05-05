import React, { useEffect, useState } from "react";
import ProductLister from "../../components/ProductLister";
import { getProductsData } from "../../services/axios.service";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getProds = async () => {
    const data = await getProductsData();
    setProducts(data.products);
  };

  useEffect(() => {
    getProds();
  }, []);

  return (
    <>
      {products.map((prod) => {
        return <ProductLister key={prod.id} product={prod} />;
      })}
    </>
  );
};

export default ProductsPage;
