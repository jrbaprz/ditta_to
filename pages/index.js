import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lounge from "../public/images/overlays/lounge.jpg";
import portafilter from "../public/images/photos/portafilter.jpg";
import omelette from "../public/images/photos/omelette.jpg";
import mug from "../public/images/products/mug.jpg";
import hario from "../public/images/products/hario.jpg";
import Bookings from "../components/bookings";
import Carousel from "../components/carousel";
import MenuCategories from "../components/menuCategories";
import CoffeeMenu from "../components/coffeeMenu";

const index = () => {
  return (
    <>
      <section className="overflow-hidden flex items-center justify-center h-screen">
        <video
          className="relative object-cover z-0 w-full h-full flex justify-center items-center"
          src="/videos/Ditta.mp4"
          type="video/mp4"
          muted
          autoPlay
          loop
        />

        <div className="absolute z-20 container mx-auto flex flex-col items-center text-center">
          <h1 className="text-white flex font-elgoc items-center text-center justify-center text-5xl px-4 mb-4 md:text-8xl lg:px-20 xl:px-40 2xl:text-[11rem]">
            Ditta Artigianale Toronto
          </h1>

          <div className="flex justify-center mt-4 gap-4 xl:mt-10 xl:gap-6">
            <div className="border bg-black bg-opacity-40 px-6 py-1 md:px-9 md:py-2 xl:px-10 xl:py-3 hover:bg-white duration-300 group hover:text-white">
              <a href="/menu">
                <span className="relative text-xs text-white uppercase font-akkurat tracking-widest group-hover:text-black">
                  See our Menu
                </span>
              </a>
            </div>

            <div className="border bg-black bg-opacity-40 px-6 py-1 md:px-9 md:py-2 xl:px-10 xl:py-3 hover:bg-white duration-300 group hover:text-white">
              <a href="/reservations">
                <span className="relative text-xs text-white uppercase font-akkurat tracking-widest group-hover:text-black">
                  Book a Table
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        viewport={{ once: true }}
      >
        <section className="px-10 mt-8 md:px-24 xl:mt-16 xl:mx-20 xl:px-0 2xl:px-24">
          <div className="xl:grid grid-cols-2">
            <video
              className="xl:p-16"
              src="/videos/stopmotion.mp4"
              type="video/mp4"
              muted
              autoPlay
              loop
            />

            <div className="flex flex-col justify-center text-center xl:pr-32 xl:text-left">
              <h1 className="font-elgoc text-[#392e7a] mt-8 text-5xl lg:mt-16 lg:text-6xl xl:mt-0">
                Filler Title
              </h1>
              <h2 className="font-elgoc text-[#606060] text-2xl my-4 md:text-2xl">
                Filler Header. Donec rutrum in justo eget. In porta nisi
                fringilla arcu, ac vulputate dui tempor et.
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
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        viewport={{ once: true }}
      >
        <h1 className="font-elgoc text-[#392e7a] text-5xl mt-20 text-center md:mt-32 xl:mt-36 xl:mb-8">
          Dine with Us
        </h1>
        <div className="p-10 lg:px-44 xl:px-72 2xl:px-96">
          <Bookings />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        viewport={{ once: true }}
      >
        <section className="px-10 mt-8 md:mt-16 xl:mt-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-center font-elgoc text-[#392e7a] text-5xl mt-5">
              Our Coffees
            </h1>
            <h2 className="text-center font-akkuratlight text-[#606060] text-xl mt-5 lg:w-[400px] lg:mx-auto">
              Try out some of our premium coffees roasted by the experts in
              Florence.
            </h2>
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        viewport={{ once: true }}
      >
        <Carousel />
      </motion.div>

      <MenuCategories />

      <div className="border-t-[1px] mx-5 mt-12 md:mx-12 md:mt-20 xl:mt-20" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        viewport={{ once: true }}
      >
        <div className="flex text-[#392e7a] justify-center font-elgoc text-5xl mt-10 md:mt-24 lg:mt-10">
          Our Menu
        </div>
        <div className="flex text-[#606060] justify-center font-elgoc px-20 text-center text-xl mt-4 mb-6 md:mx-auto md:w-[550px] lg:text-2xl lg:mx-auto lg:w-[700px]">
          Italian
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        viewport={{ once: true }}
      >
        <CoffeeMenu />
      </motion.div>

      <section className="space-y-16 xl:space-y-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          viewport={{ once: true }}
        >
          <section className="xl:grid grid-cols-2">
            <div className="my-20 xl:mb-0">
              <Image src={portafilter} alt="cappuccino" />
            </div>
            <div className="flex flex-col px-16 md:px-60 lg:px-72 lg:my-28 xl:px-44 xl:m-0 justify-center items-center">
              <Image src={mug} alt="Ditta Mug" />
              <div className="flex justify-center text-[#392e7a] font-elgocmedium text-2xl">
                Cappuccino Mug
              </div>
              <div className="flex justify-center text-[#606060] font-akkuratlight">
                $15.00
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          viewport={{ once: true }}
        >
          <section className="xl:grid grid-cols-2">
            <div className="flex flex-col px-16 sm:px-44 lg:px-72 lg:my-28 xl:px-44 xl:m-0 justify-center items-center">
              <Image src={hario} alt="Hario Kit" />
              <div className="flex justify-center text-[#392e7a] font-elgocmedium text-2xl">
                Hario V60 Pourover Kit
              </div>
              <div className="flex justify-center text-[#606060] font-akkuratlight">
                $35.00
              </div>
            </div>

            <div className="my-20 lg:mt-52 xl:mt-0">
              <Image src={omelette} alt="omelette" />
            </div>
          </section>
        </motion.div>
      </section>
    </>
  );
};

export default index;
