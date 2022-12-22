import React from "react";
import { motion } from "framer-motion";

const MenuCategories = () => {
  return (
    <>
      <section className="grid m-8 gap-8 grid-cols-1 md:m-12 md:gap-12 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <section className="relative flex items-center justify-center bg-[url('../public/images/overlays/tulip.jpg')] bg-cover bg-center lg:h-80 xl:h-96">
            <a href="/menu#coffee">
              <div className="container mx-auto flex flex-col items-center py-20 text-center my-6 md:py-40">
                <h1 className=" 10 text-white font-elgoc text-5xl lg:flex justify-center">
                  Coffee & Tea
                </h1>
                <h1 className=" 10 text-white font-akkuratlight px-4 lg:text-xl">
                  Duis aute irure dolor in reprehnderi
                </h1>
              </div>
            </a>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.75,
          }}
          viewport={{ once: true }}
        >
          <section className="relative flex items-center justify-center bg-[url('../public/images/overlays/almond.jpg')] bg-cover bg-center lg:h-80 xl:h-96">
            <a href="/menu#food">
              <div className="container mx-auto flex flex-col items-center py-20 text-center my-6 md:py-40">
                <h1 className=" 10 text-white font-elgoc text-5xl lg:flex justify-center">
                  Food
                </h1>
                <h1 className=" 10 text-white font-akkuratlight px-4 lg:text-xl">
                  Duis aute irure dolor in reprehnderit
                </h1>
              </div>
            </a>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          viewport={{ once: true }}
        >
          <section className="relative flex items-center justify-center bg-[url('../public/images/overlays/cocktail.jpg')] bg-cover bg-center lg:h-80 xl:h-96">
            <a href="/menu#drinks">
              <div className="container mx-auto flex flex-col items-center py-20 text-center my-6 md:py-40">
                <h1 className=" 10 text-white font-elgoc text-5xl lg:flex justify-center">
                  Drinks
                </h1>
                <h1 className=" 10 text-white font-akkuratlight px-4 lg:text-xl">
                  Duis aute irure dolor in reprehnderit
                </h1>
              </div>
            </a>
          </section>
        </motion.div>
      </section>
    </>
  );
};

export default MenuCategories;
