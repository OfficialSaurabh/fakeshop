import React from "react";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
export default function home({ items }) {
  return (
    <div className="bg-black">
      <div className="mx-auto flex justify-center max-w-7xl flex-wrap  gap-6 overflow-hidden px-4 sm:px-6 lg:px-4">
        {items.map((item, id) => (
          <div className=" " key={id}>
            <div className="  ">
              <div className="">
                <div className="my-5 w-72  max-w-sm transform rounded-lg bg-gray-800 transition duration-500 hover:scale-105 ">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
