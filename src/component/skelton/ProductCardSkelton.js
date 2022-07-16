import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function ProductCardSkelton({ cards }) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center  gap-6 overflow-hidden px-4 sm:px-6 lg:px-4">
        {Array(cards)
          .fill(0)
          .map((item, i) => (
            <div key={i} className="my-5 w-72 max-w-sm  transform rounded-lg bg-gray-800 drop-shadow-lg transition duration-500 hover:scale-105 ">
              <SkeletonTheme baseColor="#2d3748" highlightColor="#4a5568">
                <Skeleton height={200} />
              </SkeletonTheme>

              <div className="p-5">
                <SkeletonTheme baseColor="#2d3748" highlightColor="#4a5568">
                  <Skeleton count={3} />
                </SkeletonTheme>
              </div>
              <div className="flex ">
                <div className="flex-1 p-5">
                  <SkeletonTheme
                    height={20}
                    baseColor="#2d3748"
                    highlightColor="#4a5568"
                  >
                    <Skeleton borderRadius={20} />
                  </SkeletonTheme>
                </div>
                <div className="flex-1 p-5 ">
                  <SkeletonTheme
                    height={40}
                    baseColor="#2d3748"
                    highlightColor="#4a5568"
                  >
                    <Skeleton borderRadius={20} />
                  </SkeletonTheme>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductCardSkelton;
