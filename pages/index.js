import React from "react";
import Image from "next/image";
import Lounge from "../public/images/overlays/lounge.jpg";

const index = () => {
  return (
    <>
      <section className="overflow-hidden flex items-center justify-center h-screen">
        <div className="h-screen">
          <Image
            src={Lounge}
            alt="Photo of clothes"
            className="z-10 responsive object-cover"
            fill
            priority
          />
        </div>
        <div className="z-20 container mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl text-white tracking-wide">
            Ditta Artigianale Toronto
          </h1>
          <div className="flex justify-center mt-8 gap-6">
            <div className="border w-32 py-1 bg-black bg-opacity-50 hover:bg-white duration-300 group hover:text-white">
              <span className="text-xs text-white uppercase font-akkurat tracking-widest group-hover:text-black">
                Shop Mens
              </span>
            </div>

            <div className="border w-32 py-1 bg-black bg-opacity-50 hover:bg-white duration-300 group hover:text-white">
              <span className="text-xs text-white uppercase font-akkurat tracking-widest group-hover:text-black">
                Shop Womens
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
