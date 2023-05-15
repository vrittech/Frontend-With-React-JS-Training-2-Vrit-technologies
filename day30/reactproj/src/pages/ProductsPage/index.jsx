import React, { useEffect, useState } from "react";
import ProductLister from "../../components/ProductLister";
import { getProductsData } from "../../services/axios.service";
import { useDispatch } from "react-redux";
import "./index.css";
import { setProductsInRedux } from "./productSlice";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProds = async () => {
    const data = await getProductsData();
    setProducts(data.products);
    dispatch(setProductsInRedux(data.products));
  };

  useEffect(() => {
    getProds();
  }, []);

  return (
    <>
      <div className="flexbox">
        {products.map((prod) => {
          return <ProductLister key={prod.id} product={prod} />;
        })}
      </div>
    </>
  );
};

export default ProductsPage;
