import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollection() {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);    

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [])
    

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={"LATEST"} text2={"COLLECTION"}/>
        <p className='text-xs sm:text-sm md:text-base text-gray-500 W-3/4 m-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum magni facere, magnam praesentium enim!</p>
      </div>

      {/* Rendering the products here  */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item,index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>
    </div>
  )
}

export default LatestCollection;
