import { React, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import portafilter from "../public/images/photos/portafilter.jpg";
import omelette from "../public/images/photos/omelette.jpg";
import mug from "../public/images/products/mug.jpg";
import hario from "../public/images/products/hario.jpg";
import Bookings from "../components/bookings";
import Carousel from "../components/carousel";
import MenuCategories from "../components/menuCategories";
import CoffeeMenu from "../components/coffeeMenu";

const Home = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <>
      <section className="overflow-hidden flex items-center justify-center h-screen">
        <video
          className="relative object-cover z-0 w-full h-full flex justify-center items-center"
          src="/videos/Ditta.mp4"
          alt="Video of Ditta"
          type="video/mp4"
          defaultMuted
          muted={true}
          autoPlay={true}
          loop={true}
          playsInline={true}
          ref={vidRef}
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
              <a href="/contact">
                <span className="relative text-xs text-white uppercase font-akkurat tracking-widest group-hover:text-black">
                  Contact Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="p-6 xl:p-12">
        <section className="lg:pb-12 xl:grid grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <video
              className="md:px-16"
              src="/videos/stopmotion.mp4"
              type="video/mp4"
              defaultMuted
              muted={true}
              autoPlay={true}
              loop={true}
              playsInline={true}
              ref={vidRef}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-center xl:pr-32 xl:text-left"
          >
            <h1 className="font-elgoc text-[#392e7a] mt-8 text-5xl lg:mt-16 xl:mt-0">
              Welcome to Toronto
            </h1>
            <h2 className="flex justify-center font-akkuratlight text-[#606060] leading-loose my-4 w-80 mx-auto md:text-lg md:w-full md:px-10 xl:px-0">
              Our goal at Ditta Toronto is to bring a sophisticated yet
              effortless ambience to the heart of the city. From our
              thoughtfully designed and beautiful space, to the impeccable
              Italian coffee. A gift from Florence, here to enjoy.
            </h2>
            {/* <div className="flex justify-center mt-4 gap-4 md:flex-row xl:mt-10 xl:gap-6">
              <div className="border-[#392e7a] border-[1px] px-6 py-2 md:px-9 md:py-2 xl:mr-auto xl:px-4 xl:py-3 hover:bg-[#392e7a] duration-300 group">
                <a href="/reservations">
                  <span className="relative text-xs text-[#392e7a] uppercase font-akkurat tracking-widest group-hover:text-white">
                    Come Visit Us
                  </span>
                </a>
              </div>
            </div> */}
          </motion.div>
        </section>

        {/* <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="py-12"
        >
          <h1 className="font-elgoc text-[#392e7a] text-5xl text-center">
            Dine with Us
          </h1>
          <div className="mt-5 flex justify-center">
            <Bookings />
          </div>
        </motion.section> */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="py-12"
        >
          <section className="flex flex-col justify-center">
            <h1 className="text-center font-elgoc text-[#392e7a] text-5xl">
              Our Coffee Selection
            </h1>
            <h2 className="font-akkuratlight text-[#606060] leading-loose my-4 mx-auto text-center md:w-[40rem] md:text-lg">
              Our experts travel the world in search of the most exclusive
              micro-lots, with offerings being rotated each season.
            </h2>
          </section>
          <Carousel />
        </motion.section>

        <MenuCategories />

        <div className="border-t-[1px] mx-5 mt-12 md:mx-12 md:mt-20 xl:mt-20" />

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="py-12 pb-0 flex flex-col justify-center"
        >
          <h1 className="text-center font-elgoc text-[#392e7a] text-5xl mt-5">
            Our Drink Menu
          </h1>
          <h2 className="font-akkuratlight text-[#606060] leading-loose my-4 mx-auto text-center md:w-[40rem] md:text-lg">
            Between our traditional offerings to our specialty drinks, come see
            how Ditta bridges the gap between Specialty Coffee and classic
            Italian espresso.
          </h2>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <CoffeeMenu />
        </motion.div>

        {/* <section className="space-y-16 xl:space-y-0">
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
      </section> */}
      </div>
    </>
  );
};

export default Home;
