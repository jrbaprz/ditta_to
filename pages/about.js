import Image from "next/image";
import React from "react";
import ceo from "../public/images/photos/ceo.jpg";
import chair from "../public/images/photos/chair.jpg";
import salad from "../public/images/photos/salad.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* ===== Banner ===== */}

      <section className="relative py-64 bg-[url('../public/images/overlays/chair.jpg')] bg-cover bg-top overflow-hidden lg:py-[250px] xl:py-[295px]">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className=" 10 text-white font-elgoc text-6xl lg:text-7xl">
            About Us
          </h1>
        </div>
      </section>

      <div className="p-6 xl:px-52">
        <section className="mt-6 mb-24 xl:mt-20 xl:grid grid-cols-2">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <Image src={ceo} alt="Photo of CEO" className="xl:pr-10" />
          </motion.section>
          <motion.section
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="flex flex-col justify-center mt-8 xl:mt-0">
              <h1 className="text-center font-elgoc text-[#392e7a] text-5xl mt-5 xl:text-left xl:mt-0">
                Where it All Began
              </h1>
              <h2 className="flex justify-center font-akkuratlight text-[#606060] leading-loose my-4 text-center md:text-lg xl:text-left xl:leading-loose">
                Ditta Artigianale is an Italian roasting company with an
                international vision. We like to talk about coffee, we like to
                travel to the most distant places in the world in order to find
                exclusive coffees, to then carefully roast them and enhance all
                of their natural aromas.
              </h2>
              <div className="flex justify-center mt-4 gap-4 md:flex-row xl:mt-10 xl:gap-6">
                <div className="border-[#392e7a] border-[1px] px-6 py-2 md:px-9 md:py-2 xl:mr-auto xl:px-4 xl:py-3 hover:bg-[#392e7a] duration-300 group">
                  <a href="/contact">
                    <span className="relative text-xs text-[#392e7a] uppercase font-akkurat tracking-widest group-hover:text-white">
                      Get in Touch
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </section>

        <section className="my-24 xl:grid grid-cols-2">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="order-2"
          >
            <Image
              src={chair}
              alt="Photo of Ditta chair"
              className="xl:pl-10"
            />
          </motion.section>
          <motion.section
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="order-1 flex flex-col justify-center mt-8 xl:mt-0">
              <h1 className="text-center font-elgoc text-[#392e7a] text-5xl mt-5 xl:text-left xl:mt-0">
                Opening in Toronto
              </h1>
              <h2 className="flex justify-center font-akkuratlight text-[#606060] leading-loose my-4 text-center md:text-lg xl:text-left xl:leading-loose">
                The design philosophy behind our location began with the goal of
                blending the modern sophistication of the Toronto restaurant
                experience with the classic warmth of Italian coffee bar
                culture, right in the heart of the downtown core.
              </h2>
              <div className="flex justify-center mt-4 gap-4 md:flex-row xl:mt-10 xl:gap-6">
                <div className="border-[#392e7a] border-[1px] px-6 py-2 md:px-9 md:py-2 xl:mr-auto xl:px-4 xl:py-3 hover:bg-[#392e7a] duration-300 group">
                  <a href="/reservations">
                    <span className="relative text-xs text-[#392e7a] uppercase font-akkurat tracking-widest group-hover:text-white">
                      Come Visit Us
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </section>

        <section className="mt-24 xl:grid grid-cols-2">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <Image
              src={salad}
              alt="Photo of Ditta Salad"
              className="xl:pr-10"
            />
          </motion.section>
          <motion.section
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="flex flex-col justify-center mt-8 xl:mt-0">
              <h1 className="text-center font-elgoc text-[#392e7a] text-5xl mt-5 xl:text-left xl:mt-0">
                Our Food Selection
              </h1>
              <h2 className="flex justify-center font-akkuratlight text-[#606060] leading-loose my-4 text-center md:text-lg xl:text-left xl:leading-loose">
                Ditta Toronto&apos;s menu is our take on breakfast and brunch
                with inspiration from Italian classics. With plenty of seating
                in our restaurant paired with a delicious espresso, we&apos;re
                sure you will enjoy our offerings.
              </h2>
              <div className="flex justify-center mt-4 gap-4 md:flex-row xl:mt-10 xl:gap-6">
                <div className="border-[#392e7a] border-[1px] px-6 py-2 md:px-9 md:py-2 xl:mr-auto xl:px-4 xl:py-3 hover:bg-[#392e7a] duration-300 group">
                  <a href="/menu">
                    <span className="relative text-xs text-[#392e7a] uppercase font-akkurat tracking-widest group-hover:text-white">
                      Our Menu
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </section>
      </div>

      <div className="border-t-[1px] mx-10 my-12 lg:my-16" />
    </>
  );
};
export default About;
