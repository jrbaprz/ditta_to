import React from "react";
import Image from "next/image";
import latte from "../public/images/photos/latte.jpg";
import Bookings from "../components/bookings.js";
import caprese from "../public/images/photos/caprese.jpg";
import { motion } from "framer-motion";

const Reservations = () => {
  return (
    <>
      {/* ===== Banner ===== */}

      <section className="relative py-64 bg-[url('../public/images/overlays/chair2.jpg')] bg-cover bg-center overflow-hidden lg:py-[250px] xl:py-[295px]">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className=" 10 text-white font-elgoc text-6xl lg:text-7xl">
            Reservations
          </h1>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.75,
        }}
        viewport={{ once: true }}
      >
        <div className="overflow-hidden lg:grid grid-cols-2 lg:px-20 lg:mt-20 xl:px-40 2xl:px-72 2xl:mt-20">
          <div className="p-8 flex items-center justify-center">
            <Image src={latte} alt="Photo of Latte" />
          </div>

          <div className="md:my-10 lg:my-0 lg:flex flex-col justify-center items-center">
            <div className="flex justify-center font-elgocmedium text-2xl mt-5 text-[#392e7a] md:text-4xl lg:text-center lg:mx-24 lg:text-5xl">
              Looking forward to serving you
            </div>
            <div className="p-10 xl:px-72 2xl:px-[45rem]">
              <Bookings />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.75,
        }}
        viewport={{ once: true }}
      >
        <section className="px-10 md:px-24 lg:px-28 xl:px-16 2xl:px-48">
          <div className="xl:grid grid-cols-2">
            <div className="flex flex-col justify-center text-center xl:pl-32 xl:text-left">
              <h1 className="font-elgoc text-[#392e7a] mt-8 text-5xl lg:mt-16 lg:text-5xl xl:mt-12">
                Something about our menu
              </h1>
              <h2 className="font-elgoc text-[#606060] text-2xl my-4 md:text-2xl">
                Filler Header. Donec rutrum in justo eget.
              </h2>
              <h3 className="font-akkuratlight text-[#606060] leading-loose my-4 2xl:text-lg">
                Quis lectus nulla at volutpat diam ut. Mollis aliquam ut
                porttitor leo a diam, suspendisse, potenti nullam ac tortor
                vitae purus faucibus ornare. Volutpat maecenas volutpat. Iaculis
                at erat pellentesque adipiscing. Praesent tristique magna sit
                amet purus gravida quis blandit turpis egestas pretium.
              </h3>
              <div className="flex justify-center mt-4 gap-4 md:flex-row xl:mt-10 xl:gap-6">
                <div className="border-[#392e7a] border-[1px] px-6 py-2 md:px-9 md:py-2 xl:mr-auto xl:px-4 xl:py-3 hover:bg-[#392e7a] duration-300 group">
                  <a href="/menu">
                    <span className="relative text-xs text-[#392e7a] uppercase font-akkurat tracking-widest group-hover:text-white">
                      See our Menu
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-12 mt-20 lg:px-20 lg:mb-20 xl:flex xl:mt-0 xl:px-28 xl:items-end">
              <Image src={caprese} alt="Photo of caprese sandwich" />
            </div>
          </div>
        </section>
      </motion.div>

      <div className="border-b-[1px] mx-5" />
    </>
  );
};

export default Reservations;
