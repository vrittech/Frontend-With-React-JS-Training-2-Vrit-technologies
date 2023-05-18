import Layout from '@/components/Layout'
import React from 'react'

const NewProducts = () => {
   return (
      <Layout>
         <h1>Add products</h1>
         <form>
            <label>Product name</label>
            <input type='text' placeholder='Product name' />

            <label>Category</label>
            <select>
               <option value="">Uncategorized</option>
               <option value="">Electronics</option>
            </select>

            <label>Photos</label>
            <div className='mb-2 flex flex-wrap'>
               <label className='w-20 h-20 cursor-pointer  flex justify-center items-center bg-gray-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                  </svg>
                  <input type='file' className='hidden' />
               </label>
            </div>

            <label>Description</label>
            <textarea placeholder='Product description' />

            <label>Price</label>
            <input type='number' placeholder='Product price' />

            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Save</button>
         </form>
      </Layout >
   )
}

export default NewProducts