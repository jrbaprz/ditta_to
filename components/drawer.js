import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import aWhite from "../public/logos/a-white.jpg";

const Drawer = ({ setOpen }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
          }}
          className="fixed bg-[url(../public/logos/pattern.jpg)] z-40 top-0 overflow-hidden w-full h-screen p-4"
        >
          <div className="grid grid-cols-2 pb-4 border-white border-b-[1px]">
            <a href="/" className="ml-[12px]">
              <Image
                src={aWhite}
                alt="Logo of Ditta Artigianale A in White"
                width={30}
              />
            </a>
            <div className="ml-auto my-auto hover:cursor-pointer">
              <svg
                onClick={() => setOpen(!open)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <ul className="flex flex-col justify-center items-center mt-16 text-white text-4xl space-y-6 font-elgoc">
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="hover:text-[#cfe600] duration-300"
            >
              <a href="/">Home</a>
            </div>
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="hover:text-[#cfe600] duration-300"
            >
              <a href="/menu">Menu</a>
            </div>
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="hover:text-[#cfe600] duration-300"
            >
              <a href="/about">About</a>
            </div>
            {/* <div
              onClick={() => {
                setOpen(false);
              }}
              className="hover:text-[#cfe600] duration-300"
            >
              <a href="/reservations">Reservations</a>
            </div> */}
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="hover:text-[#cfe600] duration-300"
            >
              <a href="/contact">Contact</a>
            </div>
          </ul>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Drawer;
