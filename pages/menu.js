import Image from "next/image";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import CoffeeMenu from "../components/coffeeMenu";
import FoodMenu from "../components/foodMenu";
import DrinksMenu from "../components/drinksMenu";
import salmon from "../public/images/photos/salmon.jpg";
import cappuccino from "../public/images/photos/cappuccino.jpg";
import portafilter from "../public/images/overlays/portafilter.jpg";
import sandwich from "../public/images/overlays/sandwich.jpg";
import matcha from "../public/images/overlays/matcha.jpg";
import { motion } from "framer-motion";
import counter from "../public/images/overlays/counter1.jpg";

const Menu = () => {
  return (
    <body>
      {/* ===== Banner ===== */}
      <section className="relative overflow-hidden flex items-center justify-center h-[40rem] lg:h-[43rem]">
        <Image
          src={counter}
          alt="Image of Ditta Counter"
          className="object-cover w-screen h-screen"
          fill
          priority
        />
        <div className="z-20 container mx-auto flex flex-col items-center text-center">
          <h1 className=" 10 text-white font-elgoc text-6xl lg:text-7xl">
            Our Menu
          </h1>
        </div>
      </section>

      {/* ===== Categories ===== */}
      <main>
        <div className="p-6 xl:px-12">
          <section className="grid gap-8 grid-cols-1 md:m-12 md:gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <div className="relative flex justify-center items-center">
                <AnchorLink href="#coffee">
                  <Image
                    src={portafilter}
                    alt="Photo of Ditta portafilter"
                    className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
                  />
                </AnchorLink>
                <div className="absolute text-white">
                  <h1 className="font-elgoc text-5xl flex justify-center">
                    Drinks
                  </h1>
                </div>
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
              <div className="relative flex justify-center items-center">
                <AnchorLink href="#food">
                  <Image
                    src={sandwich}
                    alt="Photo of sandwich"
                    className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
                  />
                </AnchorLink>
                <div className="absolute text-white">
                  <h1 className="font-elgoc text-5xl flex justify-center">
                    Food
                  </h1>
                </div>
              </div>
            </motion.div>
          </section>

          <div id="coffee" />
          <div className="border-t-[1px] mx-5 mt-12 md:mx-12 md:mt-20" />

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            viewport={{ once: true }}
            className="flex flex-col justify-center px-8 mt-8 md:mt-16 xl:mt-16"
          >
            <h1 className="text-center font-elgoc text-[#392e7a] text-5xl mt-5">
              Drinks
            </h1>
            <h2 className="font-akkuratlight text-[#606060] leading-loose my-4 mx-auto text-center md:w-[40rem] lg:text-lg">
              Try out some of our premium coffees roasted by the experts in
              Florence.
            </h2>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            viewport={{ once: true }}
          >
            <CoffeeMenu />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          viewport={{ once: true }}
        >
          <div className="my-10">
            <Image src={cappuccino} alt="cappuccino" />
          </div>
        </motion.div>

        <div id="food" />
        <div className="border-t-[1px] mx-5 mt-12 md:mx-12 md:mt-20" />

        <div className="px-6 xl:px-12">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            viewport={{ once: true }}
            className="flex flex-col justify-center px-8 mt-8 md:mt-16 xl:mt-16"
          >
            <h1 className="text-center font-elgoc text-[#392e7a] text-5xl mt-5">
              Food
            </h1>
            <h2 className="font-akkuratlight text-[#606060] leading-loose my-4 mx-auto text-center md:w-[40rem] lg:text-lg">
              Delicious offerings inspired by classic Italian cuisine. Authentic
              French baked goods delivered fresh every morning from Goûter.
            </h2>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            viewport={{ once: true }}
          >
            <FoodMenu />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          viewport={{ once: true }}
        >
          <div className="my-10">
            <Image src={salmon} alt="salmon" />
          </div>
        </motion.div>
      </main>

      <div className="border-b-[1px] mx-5 lg:my-16" />
    </body>
  );
};
export default Menu;
