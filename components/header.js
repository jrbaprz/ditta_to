import React, { useState } from "react";
import Image from "next/image";
import Drawer from "./drawer";
import LogoWhite from "../public/logos/white.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed z-40 top-0 overflow-hidden w-screen p-4">
        <div className="grid grid-cols-2 pb-4 border-white border-b-[1px] xl:grid-cols-3">
          <div className="pr-6">
            <Image
              src={LogoWhite}
              alt="Photo of Ditta Artigianale Logo in White"
            />
          </div>
          <ul className="hidden md:flex gap-4 justify-center">
            <li>Menu</li>
            <li>About</li>
            <li>Reservations</li>
            <li>Contact</li>
          </ul>
          <div className="ml-auto my-auto xl:hidden">
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
      </nav>
      {open && <Drawer setOpen={setOpen} />}
    </>
  );
};

export default Header;
