import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    console.log(id);
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProduct(data);
      console.log(data);
    });
  }, [id]);
  return (
    <div className="bg-black">
      <div className=" mx-auto flex min-h-screen max-w-7xl flex-wrap justify-center overflow-x-hidden  p-4   py-5 text-white">
        <div className=" flex  items-center    justify-center p-10 ">
          <img
            className="flex w-96 items-center rounded-md "
            src={product.image}
            alt={product.title}
            priority
          />
        </div>
        <div className=" flex flex-1 items-center justify-center px-7">
          <div className=" space-y-11 ">
            <p className="flex justify-between text-xl uppercase text-gray-400 sm:text-3xl ">
              {product.category}{" "}
              <span className=" rounded-lg bg-gray-700">
                <p className="flex items-center gap-x-2 p-1  text-white">
                  {product.rating && product.rating.rate} <AiFillStar />
                </p>
              </span>
            </p>
            <h1 className="text-2xl text-gray-100 sm:text-4xl">
              {product.title}
            </h1>
            <p className="text-xl sm:text-3xl">$ {product.price}</p>
            <p className="">{product.rating && product.rating.count}</p>
            <p className=" text-base text-gray-200 sm:text-xl">
              {product.description}
            </p>
            <button className="rounded-md  outline outline-1 outline-gray-200  py-2 px-4 font-medium text-white hover:bg-blue-700">
              Add To Cart
            </button>
            <button className="rounded-md mx-5 bg-blue-500  py-2 px-4 font-medium text-white hover:bg-blue-700">
              Buy Now
            </button>

            {/* <div className="flex items-center text-xl mt-2 ">
                  {Array.from(Array(product.rating && product.rating.rate)).map((_, id) => (
                    <AiFillStar key={id} className="text-white" />
                  ))}
                  {Array.from(Array(5 - product.rating && product.rating.rate)).map((_, id) => (
                    <AiFillStar key={id} />
                  ))}
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
