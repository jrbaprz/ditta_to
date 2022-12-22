import React, { useState } from "react";
import Drawer from "./drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed z-40 top-0 overflow-hidden grid grid-cols-2 w-screen p-4 border-b-white border-[1px] xl:grid-cols-3">
        <div>Ditta Artigianale</div>
        <ul className="hidden md:flex gap-4 justify-center">
          <li>Menu</li>
          <li>About</li>
          <li>Reservations</li>
          <li>Contact</li>
        </ul>
        <div className="ml-auto xl:hidden">
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
      </nav>
      {open && <Drawer setOpen={setOpen} />}
    </>
  );
};

export default Header;
