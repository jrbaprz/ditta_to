import Image from "next/image";
import React from "react";
import ceo from "../public/images/photos/ceo.jpg";
import lounge from "../public/images/overlays/lounge.jpg";
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        viewport={{ once: true }}
      >
        <section className="px-10 mt-24 md:px-24 xl:mx-20 xl:px-0 2xl:px-24">
          <div className="xl:grid grid-cols-2">
            <div className="xl:flex xl:pl-32 xl:mr-20 xl:items-end">
              <Image src={ceo} alt="Photo of CEO" />
            </div>
            <div className="flex flex-col justify-center text-center xl:pr-32 xl:text-left">
              <h1 className="font-elgoc text-[#392e7a] mt-8 text-5xl lg:mt-16 lg:text-5xl xl:mt-0">
                Something About Ditta Italy
              </h1>
              <h2 className="font-elgoc text-[#606060] text-2xl my-4 md:text-2xl">
                Filler Header. Donec rutrum in justo eget. In porta nisi
                fringilla arcu, ac vulputate dui tempor et.
              </h2>
              <h3 className="font-akkuratlight text-[#606060] leading-loose my-4 2xl:text-lg">
                Ditta Artigianale is an Italian roasting company with an
                international vision. We like to talk about coffee, we like to
                travel to the most distant places in the world
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
        <section className="px-10 mt-12 md:px-24 xl:mx-20 xl:px-0 2xl:px-24">
          <div className="xl:grid grid-cols-2">
            <div className="flex flex-col justify-center text-center xl:pl-32 xl:text-left">
              <h1 className="font-elgoc text-[#392e7a] mt-8 text-5xl lg:mt-16 lg:text-5xl xl:mt-12">
                Something about Ditta Toronto
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
                <div className="border-[#392e7a] border-[1px] px-6 py-2 md:px-9 md:py-2 xl:mr-auto xl:px-12 xl:py-3 hover:bg-[#392e7a] duration-300 group">
                  <a href="/reservations">
                    <span className="relative text-xs text-[#392e7a] uppercase font-akkurat tracking-widest group-hover:text-white">
                      Visit Us
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-20 xl:mt-0 xl:flex xl:pl-28 xl:mr-20 xl:items-end">
              <Image src={lounge} alt="Photo of lounge" />
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
        <section className="px-10 mt-24 md:px-24 xl:mx-20 xl:px-0 2xl:px-24">
          <div className="xl:grid grid-cols-2">
            <div className="xl:flex xl:pl-32 xl:mr-20 xl:items-end">
              <Image src={salad} alt="Photo of Salad" />
            </div>
            <div className="flex flex-col justify-center text-center xl:pr-32 xl:text-left">
              <h1 className="font-elgoc text-[#392e7a] mt-8 text-5xl lg:mt-16 lg:text-5xl xl:mt-0">
                Something About Ditta Toronto Food
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

      <div className="border-t-[1px] mx-10 my-12 lg:my-16" />
    </>
  );
};
export default About;
