import axios from "axios";

export const getProductsData = async () => {
   const response = await axios('https://dummyjson.com/products');
   return response.data;
}



