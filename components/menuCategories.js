import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import portafilter from "../public/images/overlays/portafilter.jpg";
import sandwich from "../public/images/overlays/sandwich.jpg";

const MenuCategories = () => {
  return (
    <>
      <section className="grid gap-8 grid-cols-1 md:gap-12 lg:grid-cols-2">
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
                src={portafilter}
                alt="Photo of portafilter"
                className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
              />
            </a>
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
            <a href="/menu#food">
              <Image
                src={sandwich}
                alt="Photo of almond croissant"
                className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
              />
            </a>
            <div className="absolute text-white">
              <h1 className="font-elgoc text-5xl flex justify-center">Food</h1>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
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
                src={matcha}
                alt="Photo of Ditta matcha latte"
                className="object-cover h-80 md:h-[40rem] lg:h-72 xl:h-[25rem]"
              />
            </a>
            <div className="absolute text-white">
              <h1 className="font-elgoc text-5xl flex justify-center">
                Drinks
              </h1>
            </div>
          </div>
        </motion.div> */}
      </section>
    </>
  );
};

export default MenuCategories;
