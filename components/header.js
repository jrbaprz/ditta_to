import { React, useState } from "react";
import Drawer from "./drawer";
import Image from "next/image";
import White from "../public/logos/white.jpg";
import Black from "../public/logos/black.jpg";
import aBlack from "../public/logos/a-black.jpg";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  return (
    <>
      <div className="overflow-hidden">
        {/* <div className='fixed top-0 flex bg-[#fbe54a] w-screen font-akkurat text-xs p-1 tracking-wide items-center justify-center'>Come visit us: 612 Richmond St W, Toronto, ON</div> */}

        <nav
          className={classNames(
            scrollPosition > 600
              ? "bg-white bg-opacity-100 p-4 border-b-[1px]"
              : "bg-none p-6 border-b-[1px] border-opacity-10",
            "hidden z-40 xl:grid fixed px-6 w-screen top-0 grid-cols-3 items-center transition-all duration-500 overflow-hidden"
          )}
        >
          <div className="transition-all duration-500 pl-2">
            {scrollPosition > 600 ? (
              <div className="transition-all duration-700">
                <a href="/">
                  <Image src={aBlack} alt="Logo" width={30} height={30} />
                </a>
              </div>
            ) : (
              <div className="transition-all duration-700">
                <a href="/">
                  <Image src={White} alt="Logo" width={210} height={50} />
                </a>
              </div>
            )}
          </div>

          <div className="transition-all duration-500 pl-2">
            {scrollPosition > 600 ? (
              <div className="transition-all duration-700">
                <a href="/">
                  <ul className="hidden md:flex gap-12 text-black font-akkuratlight justify-center">
                    <a
                      href="/menu"
                      className="hover:text-[#392e7a] bg-left-bottom bg-gradient-to-r from-[#392e7a] to-[#392e7a] bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                    >
                      Menu
                    </a>
                    <a
                      href="/about"
                      className="hover:text-[#392e7a] bg-left-bottom bg-gradient-to-r from-[#392e7a] to-[#392e7a] bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                    >
                      About
                    </a>
                    <a
                      href="/reservations"
                      className="hover:text-[#392e7a] bg-left-bottom bg-gradient-to-r from-[#392e7a] to-[#392e7a] bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                    >
                      Reservations
                    </a>
                    <a
                      href="/contact"
                      className="hover:text-[#392e7a] bg-left-bottom bg-gradient-to-r from-[#392e7a] to-[#392e7a] bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                    >
                      Contact
                    </a>
                  </ul>
                </a>
              </div>
            ) : (
              <div className="transition-all duration-700">
                <ul className="hidden md:flex gap-12 text-white font-akkuratlight justify-center">
                  <a
                    href="/menu"
                    className="hover:text-[#f8e700] bg-left-bottom bg-gradient-to-r from-[#f8e700] to-[#f8e700] bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                  >
                    Menu
                  </a>
                  <a
                    href="/about"
                    className="hover:text-[#f8e700] bg-left-bottom bg-gradient-to-r from-[#f8e700] to-[#f8e700] bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                  >
                    About
                  </a>
                  <a
                    href="/reservations"
                    className="hover:text-[#f8e700] bg-left-bottom bg-gradient-to-r from-[#f8e700] to-[#f8e700] bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                  >
                    Reservations
                  </a>
                  <a
                    href="/contact"
                    className="hover:text-[#f8e700] bg-left-bottom bg-gradient-to-r from-[#f8e700] to-[#f8e700] bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out"
                  >
                    Contact
                  </a>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile */}

        <nav
          className={classNames(
            scrollPosition > 450
              ? "bg-white p-4 border-b-[1px]"
              : "bg-none p-4 border-b-[1px]",
            "z-40 xl:hidden grid grid-cols-2 fixed w-screen items-center transition-all duration-500"
          )}
        >
          <div className="transition-all duration-500 pl-2">
            {scrollPosition > 450 ? (
              <div className="relative flex transition-all duration-700 items-center">
                <a href="/">
                  <Image src={Black} alt="Logo" width={120} height={30} />
                </a>
              </div>
            ) : (
              <div className="relative flex transition-all duration-700 items-center">
                <a href="/">
                  <Image src={White} alt="Logo" width={120} height={30} />
                </a>
              </div>
            )}
          </div>
          <div className="transition-all duration-500 pl-2">
            {scrollPosition > 450 ? (
              <svg
                onClick={() => setOpen(!open)}
                className="w-5 h-5 md:w-7 md:h-7 md:mr-2 cursor-pointer ml-auto"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>
            ) : (
              <svg
                onClick={() => setOpen(!open)}
                className="w-5 h-5 md:w-7 md:h-7 md:mr-2 cursor-pointer ml-auto"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>
            )}
          </div>
        </nav>
        {open && <Drawer setOpen={setOpen} />}
      </div>
    </>
  );
};

export default Header;
