import Image from "next/image";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import CoffeeMenu from "../components/coffeeMenu";
import FoodMenu from "../components/foodMenu";
import DrinksMenu from "../components/drinksMenu";
import salmon from "../public/images/photos/salmon.jpg";
import cappuccino from "../public/images/photos/cappuccino.jpg";
import tulip from "../public/images/overlays/tulip.jpg";
import almond from "../public/images/overlays/almond.jpg";
import cocktail from "../public/images/overlays/cocktail.jpg";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <>
      {/* ===== Banner ===== */}
      <section className="relative py-64 bg-[url('../public/images/overlays/counter1.jpg')] bg-cover bg-top overflow-hidden lg:py-[250px] xl:py-[295px]">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className=" 10 text-white font-elgoc text-6xl lg:text-7xl">
            Our Menu
          </h1>
        </div>
      </section>

      {/* ===== Categories ===== */}

      <section className="grid m-8 gap-8 grid-cols-1 md:m-12 md:gap-12 lg:grid-cols-3">
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
                src={tulip}
                alt="Photo of Ditta Cappuccino"
                className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
              />
            </AnchorLink>
            <div className="absolute text-white">
              <h1 className="font-elgoc text-5xl flex justify-center">
                Coffee & Tea
              </h1>
              <h1 className="font-akkuratlight flex justify-center lg:text-xl lg:text-center">
                Duis aute irure dolor in reprehnderit
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
                src={almond}
                alt="Photo of almond croissant"
                className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
              />
            </AnchorLink>
            <div className="absolute text-white">
              <h1 className="font-elgoc text-5xl flex justify-center">Food</h1>
              <h1 className="font-akkuratlight flex justify-center lg:text-xl lg:text-center">
                Duis aute irure dolor in reprehnderit
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <div className="relative flex justify-center items-center">
            <AnchorLink href="#drinks">
              <Image
                src={cocktail}
                alt="Photo of Ditta Cocktail"
                className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
              />
            </AnchorLink>
            <div className="absolute text-white">
              <h1 className="font-elgoc text-5xl flex justify-center">
                Drinks
              </h1>
              <h1 className="font-akkuratlight flex justify-center lg:text-xl lg:text-center">
                Duis aute irure dolor in reprehnderit
              </h1>
            </div>
          </div>
        </motion.div>
      </section>

      <div id="coffee" />
      <div className="border-t-[1px] mx-5 mt-12 md:mx-12 md:mt-20" />

      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          viewport={{ once: true }}
        >
          <div className="flex text-[#392e7a] justify-center font-elgoc text-5xl mt-12 md:text-5xl">
            Coffee & Tea
          </div>

          <div className="flex text-[#606060] justify-center font-elgoc px-20 text-center text-xl mt-4 mb-6 md:text-2xl md:w-[550px] md:mx-auto">
            Try out some of our premium coffees roasted by the experts in
            Florence.
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
          <CoffeeMenu />
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
          <div className="my-10">
            <Image src={cappuccino} alt="cappuccino" />
          </div>
        </motion.div>

        <div id="food" />
        <div className="border-t-[1px] mx-5 mt-12 md:mx-12 md:mt-20" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          viewport={{ once: true }}
        >
          <div className="flex text-[#392e7a] justify-center font-elgoc text-5xl mt-12 md:text-5xl">
            Food
          </div>
          <div className="flex text-[#606060] justify-center font-elgoc px-20 text-center text-xl mt-4 mb-6 md:text-2xl md:w-[550px] md:mx-auto">
            Try out some of our premium coffees roasted by the experts in
            Florence.
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
          <FoodMenu />
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
          <div className="my-10">
            <Image src={salmon} alt="salmon" />
          </div>
        </motion.div>

        <div id="drinks" />
        <div className="border-t-[1px] mx-5 mt-12 md:mx-12 md:mt-20" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          viewport={{ once: true }}
        >
          <div className="flex text-[#392e7a] justify-center font-elgoc text-5xl mt-12 md:text-5xl">
            Drinks
          </div>
          <div className="flex text-[#606060] justify-center font-elgoc px-20 text-center text-xl mt-4 mb-6 md:text-2xl md:w-[550px] md:mx-auto">
            Try out some of our premium coffees roasted by the experts in
            Florence.
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
          <DrinksMenu />
        </motion.div>
      </section>

      <div className="border-b-[1px] mx-5 lg:my-16" />
    </>
  );
};
export default Menu;
