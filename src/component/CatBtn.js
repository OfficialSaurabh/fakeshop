import React, { useState } from "react";

function CatBtn({ setFilter }) {
  const [option, setOption] = useState(0);

  return (
    <div>
      <div className=" flex flex-wrap items-baseline justify-center gap-4  p-5 ">
        <p className="text-white">Categories</p>

        <button
          to="/"
          onClick={() => {
            setFilter("all");
            setOption(0);
          }}
          className={
            " rounded-md px-3 py-2 text-sm font-medium  outline   hover:bg-gray-700 " +
            (option === 0 ? " activated" : " deactivated")
          }
        >
          All
        </button>
        <button
          to="/"
          onClick={() => {
            setFilter("men's clothing");
            setOption(1);
          }}
          className={
            " rounded-md px-3 py-2 text-sm font-medium outline hover:bg-gray-700 " +
            (option === 1 ? " activated" : " deactivated")
          }
        >
          Mens's Clothing
        </button>
        <button
          to="/"
          onClick={() => {
            setFilter("women's clothing");
            setOption(2);
          }}
          className={
            " rounded-md px-3 py-2 text-sm font-medium outline hover:bg-gray-700 " +
            (option === 2 ? " activated" : " deactivated")
          }
        >
          Women's Clothing
        </button>
        <button
          to="/"
          onClick={() => {
            setFilter("jewelery");
            setOption(3);
          }}
          className={
            " rounded-md px-3 py-2 text-sm font-medium outline hover:bg-gray-700 " +
            (option === 3 ? " activated" : " deactivated")
          }
        >
          Jewelery
        </button>
        <button
          to="/"
          onClick={() => {
            setFilter("electronics");
            setOption(4);
          }}
          className={
            " rounded-md px-3 py-2 text-sm font-medium outline hover:bg-gray-700 " +
            (option === 4 ? " activated" : " deactivated")
          }
        >
          Electronics
        </button>
      </div>
    </div>
  );
}

export default CatBtn;
