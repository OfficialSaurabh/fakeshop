import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import axios from "axios";
import CatBtn from "./component/CatBtn";
import ProductCardSkelton from "./component/skelton/ProductCardSkelton";

const baseURL = "https://fakestoreapi.com/products";

function Home({ filter }) {
  // API
  const [isloading, setLoading] = useState(false);

  const [allProduct, setAllProduct] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(baseURL)
      .then(({ data }) => {
        setAllProduct(data);
        setFilteredProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);

  const setFilter = filter => {
    if (filter === "all") setFilteredProduct(allProduct);
    else {
      const newItem = allProduct.filter(newVal => {
        return newVal.category === filter;
      });
      setFilteredProduct(newItem);
    }
  };

  if (error)
    return (
      <p className="flex min-h-screen justify-center bg-gray-900 py-5 text-2xl text-white">
        {error}
      </p>
    );
  return (
    <div className=" bg-gray-900 ">
      {isloading ? (
        <>
          <ProductCardSkelton cards={8} />
        </>
      ) : (
        <>
          <CatBtn setFilter={setFilter} />
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center  gap-6 overflow-hidden px-4 sm:px-6 lg:px-4">
            {filteredProduct?.map((item, id) => (
              <div className=" " key={id}>
                <div className="my-5 w-72 max-w-sm  transform rounded-lg bg-gray-800 drop-shadow-lg transition duration-500 hover:scale-105 ">
                  <div className="  ">
                    <Link to={`/product/${item.id}`} key={item.id}>
                      <img
                        className="h-72 w-full rounded-t-lg"
                        src={item.image}
                        alt={item.title}
                      />
                    </Link>
                  </div>
                  <div className="p-5">
                    <Link to="">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white line-clamp-2">
                        {item.title}
                      </h5>
                    </Link>
                    <div className="my-4 flex items-center justify-between ">
                      <div className=" flex h-5 items-center gap-1 rounded-md py-4 px-3  text-white outline outline-1 outline-gray-200">
                        <span>
                          <BsCurrencyDollar />
                        </span>
                        {item.price}
                      </div>
                      <Link to={`/product/${item.id}`}>
                        <button className="rounded-md bg-blue-500  py-2 px-4 font-medium text-white hover:bg-blue-700">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
