import Layout from '@/components/Layout'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Categories = () => {
   const [name, setName] = useState('');
   const [parentCategory, setParentCategory] = useState('');
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      getCategories();
      console.log(categories);
   }, [])

   const getCategories = async () => {
      const resp = await axios.get('/api/categories');
      setCategories(resp.data);
   }

   const saveCategory = (e) => {
      e.preventDefault();
      const data = {
         name,
         parentCategory
      }
      console.log(data);
   }
   return (
      <Layout>
         <h1>Categories</h1>
         <form onSubmit={saveCategory}>
            <div className='flex gap-1'>
               <input type='text' placeholder='Category name' onChange={(e) => setName(e.target.value)} />
               <select onChange={(e) => setParentCategory(e.target.value)} >
                  <option value="">No parent category</option>
                  {categories.length > 0 &&
                     categories.map((category) => {
                        return <option key={category._id} value={category._id}>{category.name}</option>
                     })}

               </select>
               <button type='submit' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Save</button>
            </div>
         </form>
      </Layout>
   )
}

export default Categories