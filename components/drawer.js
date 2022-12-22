import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aWhite from "../public/logos/a-white.jpg";
import LogoWhite from "../public/logos/white.jpg";

const Drawer = ({ setOpen }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.15,
        }}
        className="fixed bg-[url(../public/logos/pattern.jpg)] z-40 top-0 overflow-hidden w-screen h-screen p-4"
      >
        <div className="grid grid-cols-2 pb-4 border-white border-b-[1px]">
          <div className="pr-[134px] ml-[5px]">
            <Image src={aWhite} alt="Logo of Ditta Artigianale A in White" />
          </div>
          <div className="ml-auto my-auto hover:cursor-pointer">
            <svg
              onClick={() => setOpen(!open)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>

        <ul className="flex flex-col justify-center items-center mt-16 text-white text-4xl space-y-6">
          <li>Menu</li>
          <li>About</li>
          <li>Reservations</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </>
  );
};

export default Drawer;
