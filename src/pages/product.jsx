import React from 'react'
import { useEffect, useState } from 'react';
import TemplateProps from '../component/producttemplate';

function Product() {
  
  const [product, setProduct] = useState([]);
  const [loading , setLoading] = useState('Loading products')

  useEffect(()=>{

    const fetchdata = async () => {
      await fetch('http://localhost:5689').then((response)=>{
      if (response.ok) {
        return response.json()
        
      } else {
        throw new Error('data error')

        

        
      }
    }).then((data)=>{
      if (!data) {
        throw new Error('data error')
       
        
      } else {
      setProduct(data)
      }
     
    })
      
    }
    fetchdata();
   
  }, [])


  return (
    <div>
      <section>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-5 align-middle producttext'>Product List</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 -mt-8">
          {product ?( product.map((item) => (
            <TemplateProps key={item.id} prop={item} />
          ))): <h3>Loading products</h3>}
        </div>
      </section>
    </div>
  )
}
export default Product






