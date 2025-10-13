import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

function Products() {
  const { productId } = useParams();
  const { products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product images  */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 w-full sm:w-[50%]">
          <div className="flex sm:flex-col justify-between sm:justify-normal overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="sm:w-full w-[24%] sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="product image" />
          </div>
        </div>

        {/* product information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex gap-1 mt-2 items-center">
            <img src={assets.star_icon} alt="star_icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star_icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star_icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star_icon" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="star_icon" className="w-3 5" />
            <p>(122)</p>
          </div>
          <p className="text-3xl font-medium mt-3">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 sm:w-3/4">{productData.description}</p>

          <div className="flex flex-col mt-3 gap-2">
            <p>Availabe Sizes</p>
            <div className="flex gap-2">
              {
                productData.sizes.map((item, index) => (
                  <button onClick={()=>setSize(item)} key={index} className={`border-2 border-gray-500 px-4 py-2 bg-gray-300 ${item === size ? 'border-orange-500':''} cursor-pointer`}>{item}</button>
                ))
              }
            </div>
          </div>
          <button className="bg-black py-3 px-8 text-white rounded mt-5 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
            <p>100% Original Product</p>
            <p>Cash on Delivery is available on this product</p>
            <p>Return and Exchange Policy</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Products;
