import React from "react";
import { motion } from "framer-motion";

const Drawer = ({ setOpen }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.15,
        }}
        className="z-50 fixed w-screen h-screen bg-gray-400 p-4"
      >
        <div className="flex">
          <div>Ditta Artigianale</div>
          <div className="ml-auto">
            <svg
              onClick={() => setOpen(!open)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
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
        <ul className="flex flex-col justify-center items-center">
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
