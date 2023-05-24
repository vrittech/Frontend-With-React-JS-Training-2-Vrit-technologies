import Layout from '@/components/Layout'
import { getProducts } from '@/services/axios.service'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Products = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      getProducts().then((resp) => {
         setProducts(resp.data);
      })
   }, [])

   const deleteProduct = async (e, product) => {
      e.preventDefault();
      try {
         await axios.delete('/api/products?id=' + product._id);
         const data = products.filter((prod) => {
            return prod._id !== product._id;
         })
         setProducts(data);
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <Layout>
         <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' href="products/new" >Add new product</Link>
         <table className='mt-10 basic'>
            <thead>
               <tr>
                  <td></td>
                  <td>Product name</td>
                  <td>Product price</td>
                  <td></td>
               </tr>
            </thead>
            <tbody>
               {
                  products && products.map((product) => {
                     return <tr key={product._id}>
                        <td>{
                           product.images.map((i) => {
                              return <img key={i} className='h-8' src={i} />
                           })
                        }</td>
                        <td>{product.title}</td>
                        <td>${product.price}</td>

                        <td>
                           <button className='' onClick={(e) => deleteProduct(e, product)}>Delete</button>
                        </td>
                     </tr>
                  })
               }
            </tbody>
         </table>

      </Layout>
   )
}

export default Products