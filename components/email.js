import React from "react";

const Email = () => {
  return (
    <div class="w-full">
      <form class="w-full">
        <div class="flex items-center border-b border-[#392e7a] py-2">
          <input
            className="appearance-none bg-transparent border-none placeholder:font-elgocmedium placeholder:text-lg focus:placeholder:text-[#606060] w-full text-[#606060] font-akkurat mr-3 py-1 px-2 focus:outline-none"
            type="text"
            placeholder="Name"
            aria-label="Name"
          />
        </div>

        <div class="flex items-center border-b border-[#392e7a] py-2 mt-5">
          <input
            className="appearance-none bg-transparent border-none placeholder:font-elgocmedium placeholder:text-lg focus:placeholder:text-[#606060] w-full text-[#606060] font-akkurat mr-3 py-1 px-2 focus:outline-none"
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
        </div>

        <div class="flex items-center border border-[#392e7a] py-2 mt-10">
          <textarea
            className="appearance-none bg-transparent border-none placeholder:font-elgocmedium placeholder:text-lg focus:placeholder:text-[#606060] w-full text-[#606060] font-akkurat mr-3 py-1 px-2 focus:outline-none"
            type="text"
            placeholder="Message"
            aria-label="Message"
            Rows="3"
          />
        </div>

        <div className="flex justify-center mt-4 gap-4 md:flex-row xl:mt-10 xl:gap-6">
          <div className="border-[#392e7a] border-[1px] px-6 py-2 md:px-9 md:py-2 xl:mr-auto xl:px-4 xl:py-3 hover:bg-[#392e7a] duration-300 group">
            <a href="/menu">
              <span className="relative text-xs text-[#392e7a] uppercase font-akkurat tracking-widest group-hover:text-white">
                Message Us
              </span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Email;
