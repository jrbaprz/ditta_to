import React from "react";
import Map from "../components/googleMap";
import Email from "../components/email";
import { motion } from "framer-motion";
import Image from "next/image";
import machine from "../public/images/overlays/machine.jpg";

const Contact = () => {
  return (
    <>
      <section className="relative overflow-hidden flex items-center justify-center h-[40rem] lg:h-[43rem]">
        <Image
          src={machine}
          alt="Image of Ditta Espresso Machine"
          className="object-cover w-screen h-screen"
          fill
          priority
        />
      </section>

      {/* <section>
        <Image
          src={Machine}
          alt="Image of Ditta Espresso Machine"
          className="object-cover w-screen h-[35rem] lg:h-[42rem]"
        />
      </section> */}

      <section className="px-10 mt-10 mb-16 md:px-24 lg:mt-20 xl:mx-20 xl:px-0 2xl:px-24">
        <div className="lg:grid grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            viewport={{ once: true }}
          >
            <Map />
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
            <div className="flex flex-col justify-center text-center md:mt-8 lg:text-left lg:my-10 lg:pl-10 xl:pr-32 xl:text-left">
              <h1 className="font-elgoc text-[#392e7a] mt-8 text-4xl lg:mt-16 lg:text-5xl xl:mt-0">
                Visit Our Cafe
              </h1>
              <h2 className="font-akkuratlight text-[#606060] leading-loose mt-4 2xl:text-lg">
                612 Richmond St W, Toronto, ON
              </h2>
              <h2 className="font-akkuratlight text-[#606060] leading-loose 2xl:text-lg">
                Monday - Sunday
              </h2>
              <h2 className="font-akkuratlight text-[#606060] leading-loose 2xl:text-lg">
                8:00am - 5:00pm
              </h2>

              <div className="flex justify-center mt-4 gap-4 md:flex-row xl:mt-10 xl:gap-6">
                {/* <div className="border-[#392e7a] border-[1px] px-6 py-2 md:px-9 md:py-2 xl:mr-auto xl:px-4 xl:py-3 hover:bg-[#392e7a] duration-300 group">
                  <a href="/reservations">
                    <span className="relative text-xs text-[#392e7a] uppercase font-akkurat tracking-widest group-hover:text-white">
                      Visit Us
                    </span>
                  </a>
                </div> */}
              </div>
              <h1 className="font-elgoc text-[#392e7a] mb-2 mt-10 text-4xl px-8 lg:px-0 lg:text-left lg:text-5xl lg:pr-8 2xl:pr-16">
                Contact Us
              </h1>
              <Email />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Contact;
