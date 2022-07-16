import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductDetailsSkelton() {
  return (
    <div>
      <div className="bg-gray-900">
        <div className="  mx-auto flex min-h-screen max-w-7xl flex-wrap justify-center overflow-x-hidden  p-4   py-5">
          <div className=" mx-10  flex items-center  justify-center drop-shadow-xl ">
            <SkeletonTheme
              className=" p-32 "
              baseColor="#2d3748"
              highlightColor="#4a5568"
            >
              <Skeleton height={500} width={350} />
            </SkeletonTheme>
          </div>
          <div className=" flex flex-1 items-center justify-center  overflow-hidden ">
            <div className=" space-y-11">
              <div className="my-4  flex flex-wrap items-center justify-center gap-x-5 ">
                <div className=" ">
                  <SkeletonTheme
                    width={150}
                    baseColor="#2d3748"
                    highlightColor="#4a5568"
                  >
                    <Skeleton height={30} borderRadius={10} />
                  </SkeletonTheme>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-2  p-1  ">
                  <SkeletonTheme
                    width={150}
                    baseColor="#2d3748"
                    highlightColor="#4a5568"
                  >
                    <Skeleton height={30} borderRadius={10} />
                  </SkeletonTheme>

                  <SkeletonTheme baseColor="#2d3748" highlightColor="#4a5568">
                    <Skeleton width={100} height={30} borderRadius={10} />
                  </SkeletonTheme>
                </div>
              </div>
              <div className=" space-y-3 ">
                <div className="  ">
                  <SkeletonTheme baseColor="#2d3748" highlightColor="#4a5568">
                    <Skeleton height={50} />
                  </SkeletonTheme>
                </div>
                <div className=" w-44 ">
                  <SkeletonTheme baseColor="#2d3748" highlightColor="#4a5568">
                    <Skeleton  height={30} />
                  </SkeletonTheme>
                </div>
                <div className="">
                  <SkeletonTheme baseColor="#2d3748" highlightColor="#4a5568">
                    <Skeleton height={200} />
                  </SkeletonTheme>
                </div>
              </div>
              <div className=" flex flex-wrap ">
                <button className="flex  items-center py-2 px-4 font-medium  ">
                  <SkeletonTheme baseColor="#2d3748" highlightColor="#4a5568">
                    <Skeleton width={100} height={50} borderRadius={10} />
                  </SkeletonTheme>
                </button>
                <button className="mx-5 py-2 px-4 font-medium ">
                  <SkeletonTheme baseColor="#2d3748" highlightColor="#4a5568">
                    <Skeleton width={100} height={50} borderRadius={10} />
                  </SkeletonTheme>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSkelton;
