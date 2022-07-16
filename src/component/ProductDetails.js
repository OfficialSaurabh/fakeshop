import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import ProductDetailsSkelton from "../component/skelton/ProductDetailsSkelton";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log(id);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      });
  }, [id]);
  if (error)
    return (
      <p className="flex min-h-screen justify-center bg-gray-900 py-5 text-2xl text-white">
        {error}
      </p>
    );
  return (
    <div className=" ">
      {isloading ? (
        <div className=" min-h-screen  bg-gray-900  text-white">
          <ProductDetailsSkelton />
        </div>
      ) : (
        <div className="bg-gray-900">
          <div className="  mx-auto flex min-h-screen max-w-7xl flex-wrap justify-center overflow-x-hidden  p-4   py-5 text-white">
            <div className=" flex  items-center  justify-center p-10 ">
              <img
                className="flex w-96 items-center rounded-md  drop-shadow-xl  "
                src={product.image}
                alt={product.title}
                priority
              />
            </div>
            <div className=" flex flex-1 items-center justify-center px-7">
              <div className=" space-y-11 ">
                <div className="flex justify-between ">
                  <p className="text-xl uppercase text-gray-400 sm:text-3xl ">
                    {product.category}
                  </p>{" "}
                  <span className=" rounded-lg">
                    <div className="flex items-center gap-x-2 space-x-3 p-1 text-xl  text-white  sm:text-2xl">
                      <div className="flex items-center  ">
                        {Array.from(Array(parseInt(product.rating.rate))).map(
                          (_, id) => (
                            <AiFillStar key={id} className="text-green-600" />
                          )
                        )}
                        {Array.from(
                          Array(5 - parseInt(product.rating.rate))
                        ).map((_, id) => (
                          <AiFillStar key={id} />
                        ))}
                      </div>
                      <p className=" text-sm ">
                        {product.rating.count} Ratings{" "}
                      </p>
                    </div>
                  </span>
                </div>
                <h1 className="text-2xl text-gray-50 sm:text-4xl">
                  {product.title}
                </h1>
                <p className="text-xl sm:text-3xl">$ {product.price}</p>
                <p className=" text-base text-gray-200 sm:text-xl">
                  {product.description}
                </p>
                <div className="flex">
                  <button className="flex  items-center rounded-md py-2 px-4 font-medium  text-white outline outline-1 outline-gray-200 hover:bg-blue-700">
                    <span className=" mr-2 text-lg">
                      <AiOutlineShoppingCart />
                    </span>{" "}
                    Add To Cart
                  </button>
                  <button className="mx-5 rounded-md bg-blue-500  py-2 px-4 font-medium text-white hover:bg-blue-700">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
