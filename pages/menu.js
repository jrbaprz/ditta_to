import Image from "next/image";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import CoffeeMenu from "../components/coffeeMenu";
import FoodMenu from "../components/foodMenu";
import DrinksMenu from "../components/drinksMenu";
import salmon from "../public/images/photos/salmon.jpg";
import cappuccino from "../public/images/photos/cappuccino.jpg";
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
          <section className="relative flex items-center justify-center bg-[url('../public/images/overlays/tulip.jpg')] bg-cover bg-center lg:h-80 xl:h-96">
            <AnchorLink href="#coffee">
              <div className="container mx-auto flex flex-col items-center py-12 text-center my-6 md:py-40">
                <h1 className=" 10 text-white font-elgoc text-5xl lg:flex justify-center">
                  Coffee & Tea
                </h1>
                <h1 className=" 10 text-white font-akkuratlight px-4 lg:text-xl">
                  Duis aute irure dolor in reprehnderit
                </h1>
              </div>
            </AnchorLink>
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
          <section className="relative flex items-center justify-center bg-[url('../public/images/overlays/almond.jpg')] bg-cover bg-center lg:h-80 xl:h-96">
            <AnchorLink href="#food">
              <div className="container mx-auto flex flex-col items-center py-12 text-center my-6 md:py-40">
                <h1 className=" 10 text-white font-elgoc text-5xl lg:flex justify-center">
                  Food
                </h1>
                <h1 className=" 10 text-white font-akkuratlight px-4 lg:text-xl">
                  Duis aute irure dolor in reprehnderit
                </h1>
              </div>
            </AnchorLink>
          </section>
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
          <section className="relative flex items-center justify-center bg-[url('../public/images/overlays/cocktail.jpg')] bg-cover bg-center lg:h-80 xl:h-96">
            <AnchorLink href="#drinks">
              <div className="container mx-auto flex flex-col items-center py-12 text-center my-6 md:py-40">
                <h1 className=" 10 text-white font-elgoc text-5xl lg:flex justify-center">
                  Drinks
                </h1>
                <h1 className=" 10 text-white font-akkuratlight px-4 lg:text-xl">
                  Duis aute irure dolor in reprehnderit
                </h1>
              </div>
            </AnchorLink>
          </section>
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
