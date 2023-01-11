import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import tulip from "../public/images/overlays/tulip.jpg";
import almond from "../public/images/overlays/almond.jpg";
import cocktail from "../public/images/overlays/cocktail.jpg";

const MenuCategories = () => {
  return (
    <>
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
            <a href="/menu#coffee">
              <Image
                src={tulip}
                alt="Photo of Ditta Cappuccino"
                className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
              />
            </a>
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
            <a href="/menu#food">
              <Image
                src={almond}
                alt="Photo of almond croissant"
                className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
              />
            </a>
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
            <a href="/menu#drinks">
              <Image
                src={cocktail}
                alt="Photo of Ditta Cocktail"
                className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
              />
            </a>
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
    </>
  );
};

export default MenuCategories;
